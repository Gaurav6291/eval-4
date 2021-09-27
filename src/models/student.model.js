const mongoose = require('mongoose');

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


module.exports = Student;
