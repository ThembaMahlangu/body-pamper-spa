const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { validateToken, authenticateUser } = require('../middleware/auth');
const bcrypt = require('bcrypt');
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

router.post('/register', [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').notEmpty().withMessage('Email is required.'),
    body('password').notEmpty().withMessage('Password is required.'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        User.findOne({ email: req.body.email }).then(user => {
            if(user) {
                return res.status(422).json({ errors: [{ msg: 'User already exists.' }] });
            }
            else
            {
                const salt = bcrypt.genSaltSync(10);
                const HashedPassword = bcrypt.hashSync(req.body.password, salt);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: HashedPassword,
                    lastLogin: Date.now()
                });
                const user = new User(newUser);
                user.save().then((result) => {
                const email = req.body.email;
                const mailOptions = {
                    from: 'Body Pamper Web Notifications <',
                    to: email,
                    subject: 'Registration Successful',
                    text: `Hello ${newUser.name},

This email is to confirm that you have successfully registered with Body Pamper Admin.

You may login to your account and start using Body Pamper Admin Services.

Regards,
Body Pamper Admin Notifications`
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent successfully to:' +email);
                    }
                }
                );
                return res.status(201).json({ message: 'User registered successfully.', result: result });
            })
            .catch((err) => {
              res.status(500).json({ error: err.message });
            });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    authenticateUser(email, password)
      .then(({ token, userId }) => {
        res.status(200).json({ message: "Successful login, login tracker active", token: token, userId: userId });
        // Update last login
        const user = User.findOne({ _id: userId }).then((user) => {
          user.lastLogin = new Date();
          user.save();
        });
        const mailOptions = {
            from: 'Body Pamper Web Notifications <',
            to: email,
            subject: 'Body Pamper Login Notification',
            text: `Hello ${user.name},

This email is to confirm that you have successfully logged in to Body Pamper Admin.

If this was not you, please contact the Developer ASAP.

Regards,
Body Pamper Admin Notifications`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent successfully to:' +email);
            }
        }
        );
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        res.status(err.statusCode || 500).json({ error: err });
      });
});

router.get("/", async (req, res) => {
    try {
      // Find all users in the database
      const users = await User.find();
      
      // Send the users as a response to the client
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;