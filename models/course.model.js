const mongoose = require('mongoose');
const courseContentSchema = require('./courseContent.model');

const courseSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imageUrl: {
        type : String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    content: {
        type: [courseContentSchema],
        required: true
    }
},{
    timestamps: true
});

const Course = new mongoose.model( 'course', courseSchema );

module.exports = Course;