const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
       video : String
    }
},{
    timestamps: true
});

module.exports = courseContentSchema;