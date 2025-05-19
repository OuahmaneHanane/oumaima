import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
}, {
  versionKey: false // disables __v
});


export const User = mongoose.model('User', userSchema);
