require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const connectMongoDB = require('./connection');

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const createCourseRouter = require('./controller/courseCreation');
// const enrollCourseRouter = require('./routes/enrollCourse');

// middlewares
const restrictToLoggedInUser = require('./middlewares/auth');
const checkAdmin = require('./middlewares/checkAdmin');

connectMongoDB(process.env.MONGODB_URL)
.then(() => {console.log("MongoDB connected")})
.catch((err) => {console.log(err)});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Hello Welcome to our LMS API</h1>');
})

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/createCourse',restrictToLoggedInUser,checkAdmin,createCourseRouter);
// app.use('/user',restrictToLoggedInUser,enrollCourseRouter);   has issues to be fixed

app.listen(PORT,()=>{
    console.log("Your server has started");
});