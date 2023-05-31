import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';

//Schema Create
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true, 'Name is Required!']
    },
    lastName:{
        type : String,
    },
    email:{
        type : String,
        required : [true, 'Email is Required!'],
        unique : true,
        validate : validator.isEmail
    },
    password:{
        type : String,
        required : [true, 'Password is Required!'],
        minLength : [6, 'Password Length Should be Greater than 6 Charcter!']
    },
    location:{
        type : String,
        default:'India'
    },
    timeStamp :{
        type: Date,
        default: Date.now
    }
});

//MIDDLEWARE CRATE
userSchema

export default mongoose.model('User', userSchema);