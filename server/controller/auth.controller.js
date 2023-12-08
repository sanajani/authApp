import userModel from '../models/user.model.js'
import { customError } from '../utils/custom.error.js';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const signin = async (req,res,next) => {
    const {email,password} = req.body;

    try {
    const validUser = await userModel.findOne({email})
    if(!validUser) return next(customError(404,"User not found"))  
    const validPassword = bcryptjs.compareSync(password,validUser.password)
    if(!validPassword) return next(customError(401,"Invalid credentials"))
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
    // validUser.password = ''
    const {password:hashPassword, ...rest} = validUser._doc
    const expiryDate = new Date(Date.now() + 3600000)
    res.cookie('access_token',token,{httpOnly:true, expires: expiryDate}).status(201).json(rest)
    } catch (error) {
        next(error)
    }
}