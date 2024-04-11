const Course = require("../models/course.model");

async function createCourse(req,res){
    try{
        let courseData = {
            name: req.body.name,
            desc : req.body.desc,
            imageUrl: req.body.imageUrl,
            author: req.body.author,
            duration : req.body.duration,
            content: req.body.content.map((item) => {
                return {
                    title : item.title,
                    desc: item.desc,
                    videoLink: item.videoLink
                };
            }) // an array is being returned here 
        }


        let course = await Course.create(courseData);
        if(course === null){
            return res.status(200).json({message: "Invalid data"});
        }
        res.status(201).send();
    }catch{
        res.status(500).json({message:"Server error"});
    }
}

module.exports = createCourse;