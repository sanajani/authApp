import userModel from '../models/user.model.js'
import { customError } from '../utils/custom.error.js';
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next) => {
    const {username,email,password} = req.body;
    console.log(username,email, password);
    try {
    const isUser = await userModel.findOne({ $or: [{ username }, { email }] });

    // if(isUser) return res.status(400).json({message:"User already exist"})
    if(isUser) return next(customError(400,"User exist with this Email or username"))


    // hash the password
    const hashPassword = bcryptjs.hashSync(password, 12)
    // sent the data to backend
    const newUser = new userModel({username,email,password:hashPassword})

        await newUser.save()
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        console.log(error);
        next(error)
    }
}

