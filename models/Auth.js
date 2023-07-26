import mongoose,{Schema} from 'mongoose';

const UserSchema=new mongoose.Schema({
    name:{
        required: [true,'Name required'],
        type:String,
    },
    familyName:{
        required: [true,'Family name required'],
        type:String
    },
    email:{
        required: [true,'Email required'],
        type:String,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password:{
        required:[true,'Password required'],
        type:String,
    },
    list:{
        type:[String],
    },
    cart:{
        type:[String]
    },


},{timestamps:true});
export default mongoose.model('User',UserSchema);
