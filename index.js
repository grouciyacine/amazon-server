import express from 'express';
import dotenv from 'dotenv';
import {connect} from './connect.js';
import AuthRouter from './routes/Auth.js'
import ProductRouter from './routes/Products.js'
import UserRouter from './routes/User.js'
import cors from 'cors'
const app=express();
app.use(express.json())
dotenv.config()

// Only the cors middleware with specific configurations is needed
app.use(cors({
    origin: 'https://amazon-grouciyacine.vercel.app',
    credentials: true
  }));
  
  // Set other CORS headers and configurations
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://amazon-grouciyacine.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
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

