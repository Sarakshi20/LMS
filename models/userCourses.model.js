const mongoose = require('mongoose');

const enrolledCourseSchema = new mongoose.Schema({
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "course"
        },
        progress: {
            type: Number,
            min: 0,
            max: 100,
            default: 0
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
});

userCoursesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    enrolledCourses: {
        type: [enrolledCourseSchema]
    }
},{
    timestamps: true
})

const UserCourses = new mongoose.model('userCourses', userCoursesSchema);

module.exports = UserCourses;