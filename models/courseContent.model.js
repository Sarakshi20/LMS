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
    videoLink: {
       type: String
    }
},{
    timestamps: true
});

module.exports = courseContentSchema;