async function checkAdmin(req,res,next){
    try{
        if(req.isAdmin === true){
            next();
        }else{
            return res.status(200).json({message: "You are not admin"});
        }
    }catch{
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = checkAdmin;