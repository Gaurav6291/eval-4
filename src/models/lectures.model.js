const mongoose = require('mongoose');



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


module.exports = Lecture;
