const bcrypt = require('bcrypt');
const User = require( '../models/user.model' );
const {setUser} = require('../service/auth');
const enrollCourse = require('../models/userCourses.model');

async function registerUser( req, res ) {
    try{
        let hashedPassword = await bcrypt.hash(req.body.password,10);
        let userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        };
        const checkEmail = await User.findOne( {'email': userData.email} ) === null ? true : false;
        if (!checkEmail) return res.status(200).json({message: "email already exists"});
        const newUser = await User.create(userData);
        await enrollCourse.create({userId: newUser.id});
        const token = await setUser(newUser);
        return res.status(200).send(token);
    }catch(err){
        res.status(500).send(err);
    }
};

module.exports = registerUser;