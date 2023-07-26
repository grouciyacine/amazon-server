import express from 'express'
import {GetProducts, SearchProducts, ProductRender,getProduct,SellProducts,createItem,getItem,getItems} from '../controllers/Products.js'

const app=express.Router();
app.post('/sell',SellProducts);
app.get('/products/:category',GetProducts);
app.get('/search',SearchProducts)
app.post('/addItem',createItem)
app.get('/getProduct/:title',getProduct)
app.get('/getItem/:title',getItem)
app.get('/getItems',getItems)
app.get('/render/:title',ProductRender)
export default app