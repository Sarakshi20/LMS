const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        required : true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    isEmailVerified: {
        type: Boolean
    },
    password: {
        type: password,
        required: true
    },
    isAdmin: {
        type: Boolean,
    }
},{
    timestamps: true
});

const User = new mongoose.model('user', userSchema);

module.exports = User;