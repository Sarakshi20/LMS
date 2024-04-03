const mongoose = require('mongoose');

userCoursesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    enrolledCourses: {
        type: [{
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
        }]
    }
},{
    timestamps: true
})

const UserCourses = new mongoose.model('userCourses', userCoursesSchema);