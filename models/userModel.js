import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Schema Create
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required!"],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is Required!"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Password is Required!"],
    minLength: [6, "Password Length Should be Greater than 6 Charcter!"],
  },
  location: {
    type: String,
    default: "India",
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

//MIDDLEWARE CREATE
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// JSON WEB TOKEN CREATE
userSchema.methods.createJWT = function () {
  return jwt.sign({
    userId : this._id
  }, );
};

export default mongoose.model("User", userSchema);
