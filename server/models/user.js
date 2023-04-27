const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    profile: {
        type: String,
        required: false
    },
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);