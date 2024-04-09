const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    isEmailVerified: {
        type: Boolean
    },
    password: {
        type: String,
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