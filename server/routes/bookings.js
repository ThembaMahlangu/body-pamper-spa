const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const User = require('../models/user');
const { validateToken, authenticateUser } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const env = require('dotenv').config();
const Password = process.env.SECRET_KEY;
const Email = process.env.EMAIL_HOST_USER;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Email,
        pass: Password
    }
});

router.post('/', [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').optional().isEmail(),
    body('phone').notEmpty().withMessage('Phone is required.'),
    body('message').notEmpty().withMessage('Message is required.'),
    body('service').isIn(['booking', 'enquiry']),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // post the contact form to the database
    try {
        const booking = new Booking({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
            service: req.body.service,
            date: Date.now()
        });
        booking.save().then((result) => {
            const mailOptions = {
                from: 'Body Pamper Web Notifications <',
                to: 'info@bodypampersalon.co.za' && 'vdayimani@icloud.com',
                subject: `New ${req.body.service} Submission`,
                text: `Hello Admin,

You have a new ${req.body.service} from ${req.body.name}

They left a message saying: '${req.body.message}'.

Their contact details are as follows:
Email: ${req.body.email}
Phone: ${req.body.phone}

Regards,
Body Pamper Admin Notifications`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return res.status(500).json({ errors: [{ msg: error.message }] });
                } else {
                    console.log('Email sent to admin');
                    return res.status(200).json({ msg: 'Form submitted successfully.', booking: result})
                }
            });
        }).catch((err) => {
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
        );
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
});

router.get('/', validateToken, async (req, res) => {
    try {
        const bookings = await Booking.find();
        return res.status(200).json({ bookings: bookings });
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
}
);

router.get('/bookings/:id', validateToken, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        return res.status(200).json({ booking: booking });
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
}
);

router.delete('/bookings/:id', validateToken, async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        return res.status(200).json({ msg: 'Booking deleted successfully.' });
    }
    catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
}
);

module.exports = router;