const bcrypt = require('bcrypt');
const User = require( '../models/user.model' );

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
        if (!checkEmail) return res.status(200).send(false);
        const newUser = await User.create(userData);
        const token = setUser(newUser);
        return res.status(200).send(token);
    }catch{
        res.status(500).send();
    }
};

module.exports = registerUser;