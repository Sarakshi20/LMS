const express = require('express');
const app = express();
const PORT = 3000;
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const createCourse = require('./controller/courseCreation');

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
})

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/createCourse',createCourse);

app.listen(PORT,()=>{
    console.log("Your server has started");
});