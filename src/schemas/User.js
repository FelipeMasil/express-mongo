import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String
})

export default mongoose.model("Users", userSchema)