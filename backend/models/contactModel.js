const mongoose = require('mongoose')
// import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your username!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number!"],
        trim: true,
        
    },
    message: {
        type: String,
        required: [true, "Please enter message!"],
        trim: true,
        
    },
    
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Contactdb", contactSchema)