import Items from "../models/Items.js";
import Products from "../models/Products.js";

export const SellProducts = async (req, res, next) => {
    try {
        const product = new Products({ ...req.body });
        product.save();
        return res.json(product).status(200);
    } catch (err) {
        next(err);
    }
};
export const GetProducts = async (req, res, next) => {
    try {
        const products = await Products.find({
            category: req.params.category,
        }).sort({ price: -1 });
        return res.json(products).status(200);
    } catch (err) {
        next(err);
    }
};
export const createItem = (req, res, next) => {
    try {
        const items = new Items({ ...req.body });
        items.save();
        return res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};
export const getItem = async (req, res, next) => {
    try {
        const item = await Items.findOne({ title: req.params.title });
        return res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};
export const getItems = async (req, res, next) => {
    try {
        const items = await Items.find({toggle:false});
        return res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};
export const getProduct=async(req, res, next) => {
    try{
        const product = await Products.findOne({_id:req.params.title});
        return res.status(200).json(product);
    }catch(err){
        next(err)
    }
}
export const SearchProducts = async (req, res, next) => {
    try {
        const product = req.query.product;
        console.log(typeof product);
        const products = await Products.find({
            category: { $regex: product },
        }).limit(20);
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};
export const ProductRender=async(req,res,next)=>{
    try{
        //const allProducts=await Products.find({title:req.params.title})
        const products=await Products.aggregate([{$match:{category:req.params.title}},{$sample:{size:20}}])
        return res.status(200).json(products)
    }catch(err){
        next(err);
    }
}