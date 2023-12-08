import userModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res) => {
    const {username,email,password} = req.body;

    const isUser = await userModel.findOne({ $or: [{ username }, { email }] });
    console.log("this is is User variable",isUser);

    if(isUser) return res.status(400).json({message:"User already exist"})

    // hash the password
    const hashPassword = await bcryptjs.hash(password, 12)
    // sent the data to backend
    const newUser = new userModel({username,email,password:hashPassword})

    try {
        await newUser.save()
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        console.log(error);
    }
}