// require('dotenv').config({path : './env'})


// import dotenv from 'dotenv'
// import connectDB from "./db/index.js";
// // import mongoose from "mongoose";
// // import {DB_NAME} from "./constants/db_name";

// // writing a profession way to write a code


// dotenv.config({
//   path : './env'
// })

// connectDB()
// .then(()=>{
//   app.listen(process.env.PORT || 8000,()=>{
//     console.log(`server is runnning at port ${process.env.PORT}`);
//   })
// })
// .catch((err)=>{
//   console.log("MONGO db connected failed",err);
// })




/*

import express from "express";
const app= express();


better way to write async and IIFE code
;(async  ()=>{
  try {
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

   app.on("ERROR",()=>{
    console.log("error",error);
    throw error
   })


app.listen(process.env.PORT,()=>{
  console.log("server is running on port",process.env.PORT)
})

  } catch (error) {
    console.error(error)
    throw err
  }
})()

*/




import 'dotenv/config';
import express from 'express';
import connectDB from './db/index.js';

const app = express();

// Connect to MongoDB
connectDB();

// Your other code...

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});





connectDB()






