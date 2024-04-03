const express = require('express');
const routes = express.Router();

routes.get('/profile',(req,res)=>{
    res.send("<h1>profile</h1>")
});


module.exports = routes;