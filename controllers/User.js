import Products from "../models/Products.js";
import Auth from "../models/Auth.js";
import Lists from "../models/Lists.js";

export const createList=async(req,res,next)=>{
    try{
            const Element=new Lists({title:req.body.title,userId:req.user.id})
            await Element.save()
            res.status(200).json('created list successfully')
            
    }catch(e){
        next(e);
    }
}
export const getLists=async(req, res, next) => {
    try{
        const List=await Lists.find({userId:req.user.id})
        if(List) return res.status(200).json(List)
        return res.status(404).json('No Lists Exist')
    }catch(e){
        next(e)
    }
}
export const getList=async (req,res,next)=>{
    try{
        const list=await Lists.findById(req.params.id)
        return res.status(200).json(list)
    }catch(err){
        next(err)
    }
}
export const addToList = async(req, res,next) => {
    try{

        const findList=await Lists.findById(req.params.id)
        if(!findList){
            return res.status(404).json({message:'List Not Found'})
        }else{
            await Lists.findByIdAndUpdate(req.params.id,{
                $addToSet:{AllProducts:req.body._id}
            })
            
            return res.status(200).json('Added to list successfully') 
        }
    }catch(err){
        next(err)
    }
}
export const RemoveList=async(req,res,next)=>{
    try{
        await Lists.findByIdAndUpdate(req.params.id,
            {
            $pull:{AllProducts:req.body._id}
            })
            return res.status(200).json(' remove from  list with success')
    }catch(e){
        next(e);
    }
}

export const AddCard=async(req,res,next)=>{
    try{
        await Auth.findByIdAndUpdate(req.user.id,
            {
            $addToSet:{cart:req.params.id}
            })
            return res.status(200).json(' add to card with success')
    }catch(e){
        next(e);
    }
}
export const RemoveCard=async(req,res,next)=>{
    try{
        await Auth.findByIdAndUpdate(req.user.id,
            {
            $pull:{cart:req.params.id}
            })
            return res.status(200).json(' remove from card with success')
    }catch(e){
        next(e);
    }
}
export const GetCard=async(req,res,next)=>{
    try{
        const List=await Auth.findById(req.user.id);
        const {cart,...others}=List
        return res.status(200).json(cart)
    }catch(e){
        next(e);
    }
}
