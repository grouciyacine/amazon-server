import  mongoose from 'mongoose'
 const List=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter a title'],
    },
    imgURL:{
        type:String,
    },
    userId:{
        type:String,
        required:[true,'Please enter a user']
    },
    AllProducts:{
        type:[String]
    }
},{timestamps:true})
export default mongoose.model('List',List)