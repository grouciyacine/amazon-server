import express from 'express'
import {login, register} from '../controllers/Auth.js'
const app=express.Router();
app.post('/register',register);
app.post('/login',login)
export default app