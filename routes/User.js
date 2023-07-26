import express from 'express'
import {AddCard, createList,  GetCard,  getLists,  RemoveCard, RemoveList,addToList, getList} from '../controllers/User.js'
import {verify}  from '../verify.js'
const app=express.Router();
app.post('/createList',verify,createList);
app.post('/addList/:id',verify,addToList);
app.delete('/removeList/:id',verify,RemoveList);
app.post('/addCard/:id',verify,AddCard)
app.delete('/removeCard/:id',verify,RemoveCard);
app.get('/getLists',verify,getLists);
app.get('/getCard',verify,GetCard);
app.get('/getList/:id',verify,getList)
export default app