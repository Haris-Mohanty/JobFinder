import mongoose from "mongoose";

//Schema Create
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true, 'Name is Required!']
    },
    email:{
        type : String,
        required : [true, 'Email is Required!'],
        unique : true
    },

});


export default mongoose.model('User', userSchema);