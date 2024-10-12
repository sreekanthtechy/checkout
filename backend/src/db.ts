import {connect,ConnectOptions} from "mongoose";
import mongoose from "mongoose";
// export const dbConnect=()=>mongoose.connect("mongodb://127.0.0.1/27017/np1").then(()=>{
//     console.log("connected successfuly")
// }).catch(()=>{
//     console.log("connnection failed")
// });
//  export const dbConnect= ()=>mongoose.connect("mongodb://localhost:27017/np1", {
//   }).then(()=>{
//     console.log("connect successfully")
//   });
// const { MongoClient } = require('mongodb');
// const client = new MongoClient("mongodb://localhost:27017/np1");
// export const dbConnect=async()=>await client.connect();
export const dbConnect= ()=>mongoose.connect('mongodb://127.0.0.1:27017/np1').then(()=>{
   console.log("connected successfuly")
}).catch(()=>{
     console.log("connnection failed")

});