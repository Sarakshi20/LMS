const express = require('express');
const app = express();
const PORT = 3000;
const userRoute = require('./routes/User');

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
})

app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log("Your server has started");
});