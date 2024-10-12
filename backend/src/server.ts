import express from 'express';
import { dbConnect } from './db';
import FoodRouter from './routes/food.router';
import UserRouter from './routes/user.router';
import bodyParser from'body-parser'
const app= express();
app.use(express.json())
dbConnect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/foods",FoodRouter);
app.use("/api/user",UserRouter)
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log("server listening on port 4000")
})