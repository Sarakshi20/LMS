const enrollCourse = require('../models/userCourses.model');
const mongoose = require('mongoose');

async function enrollInCourse(req, res) {
    try {
        const {
            userId,
            courseId
        } = req.body;

        coursesEnrolled = await enrollCourse.find({
            userId: userId
        });
        console.log(coursesEnrolled[0].enrolledCourses);
        const updated_course = coursesEnrolled.push({
            id: mongoose.Types.ObjectId(courseId)
        });
        
        updated_course.save().then(()=>{
            console.log("Course Saved");
        }).catch((err)=>{
            console.log(err);
        })

        console.log(updated_course);
        res.status(200).send(true);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = enrollInCourse;