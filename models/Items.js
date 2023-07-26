import mongoose from "mongoose";
const Items = new mongoose.Schema({
    title: {
        type: String,
    },
    img:{type: String},
    toggle:{type:Boolean, default: false},
});
export default mongoose.model('Items', Items)
