import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        trim:true // borrar espacios en blanco
    },
    email: {
        type: String,
        unique:true,
        require:true,
        trim:true
    },
    password:{
        type: String,
        requiere:true
    }
    },{
        timestamps: true //createdAt and updateAt
});

export default mongoose.model("User", userSchema);