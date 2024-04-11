async function checkAdmin(req,res,next){
    try{
        if(req.user.isAdmin === false){
            return res.status(200).json({message: "You are not admin"});
        }
        next();
    }catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = checkAdmin;