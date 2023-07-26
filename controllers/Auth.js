import User from '../models/Auth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register=async(req,res,next)=>{
    try{
        const user=await User.find({email:req.body.email})
        if(user.length>0){
            return res.status(500).json({msg:'user already exists'})
        }else{
            const base=bcrypt.genSaltSync(10)
            if(req.body.password ===null){
                return res.status(500).json('password is required')
            }
            const newPass=bcrypt.hashSync(req.body.password,base)
            const newUser=new User({...req.body,password:newPass})
            await newUser.save()
            const token=jwt.sign({id:newUser._id},process.env.JWT)
            const {password,...others}=newUser._doc
            return res.status(200).json({token,others})
        }
    }catch(e){
        next(e);
    }
}
export const login=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        console.log(user)
        if(!user){
            return res.status(500).json('error user not find')
        }else{
            const checkPassword=bcrypt.compareSync(req.body.password,user.password)
            if(!checkPassword){
                return res.status(500).json('error password not correct')
            }else{
                const token=jwt.sign({id:user._id},process.env.JWT)
                const {password,...others}=user._doc
                return res.status(200).json({token,others})
            }
        }
    }catch(e){
        next(e)
    }
}