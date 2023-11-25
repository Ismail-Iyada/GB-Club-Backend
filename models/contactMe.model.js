import mongoose from "mongoose";

const contactMeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,  
    },
    email:{
        type: String,
        required: true,  
    },
    message:{
        type: String,
        required: true,  
    }
    },{timestamps: true})

const ContactMe = mongoose.model('ContactMe', contactMeSchema)

export default ContactMe;