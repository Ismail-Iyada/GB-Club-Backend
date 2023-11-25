import ContactMe from "../models/contactMe.model.js";

export const contactMe = async (req, res, next)=>{
    const {name, email, message} = req.body;
    const newContactMe = new ContactMe({name, email, message})
    try{
        await newContactMe.save()
        res.status(201).json("contact-me form submited")

    } catch(error){
        next(error)
    }

}