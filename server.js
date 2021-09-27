const express = require('express');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//user model
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: { type:String, required: true},
    email: {type: String, required: true},
    password: {type:String, required: false},
    profile_photo_url: {type: String, required:true},
    roles: {type:String, required:true}
})

const User = mongoose.model("user", userSchema)


//student model
const studentSchema = new mongoose.Schema({
    roll_no: {type: Number, required: true},
    batch: { type:String, required: true},
   user: { 
       type: mongoose.Schema.Types.ObjectId,
       ref:"user",
       require:"true"
 }
})

const Student = mongoose.model("student", studentSchema)

//lectures collection
const lectureSchema = new mongoose.Schema({
    title: {type: String, required: true},
    batch: { type:String, required: true},
   instructor: { 
       type: mongoose.Schema.Types.ObjectId,
       ref:"user",
       require:"true"
 }
})

const Lecture = mongoose.model("lecture", studentSchema)

const app = express();

app.listen(2345, async function(){
    await connect();
    console.log('listening on port 2345')
})