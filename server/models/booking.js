const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required.']
    },
    service: {
        type: String,
        enum: ['booking', 'enquiry'],
        required: [true, 'Service is required.']
    },
    message: {
        type: String,
        required: [true, 'Message is required.']
    },
    date: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);