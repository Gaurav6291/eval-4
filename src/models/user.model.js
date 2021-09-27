const mongoose = require('mongoose');

//user model
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: { type:String, required: true},
    email: {type: String, required: true},
    password: {type:String, required: false},
    profile_photo_url: {type: String, required:true},
    roles: {type:String, required:true},
   
},
{
    versionKey:false,
    timestamps:true
    
});

const User = mongoose.model("user", userSchema);

module.exports = User;
