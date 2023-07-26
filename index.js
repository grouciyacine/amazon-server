import express from 'express';
import dotenv from 'dotenv';
import {connect} from './connect.js';
import AuthRouter from './routes/Auth.js'
import ProductRouter from './routes/Products.js'
import UserRouter from './routes/User.js'
import cors from 'cors'
const app=express();
dotenv.config()
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
    })
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json())
app.use('/api/v1/user',UserRouter)
app.use('/api/v1/auth',AuthRouter)
app.use('/api/v1/product',ProductRouter)
const connect1=async()=>{
    try{
        await connect(process.env.MONGODB)
        app.listen(5000,()=>console.log('listening on port in 5000'))
    }catch(e){
        console.log(e)
    }
    
}
connect1()

