import mongoose, { Error } from "mongoose";

import { DB_name } from "../constants.js";

// DB IS ANOTHER CONTINENT
const connectDB= async () =>
{
  try
  {
   const connectionInstance=await mongoose.connect(`${process.env.MONOGODB_URL}/${DB_name}`)
   console.log(`\n Mongodb connected !! db host: ${connectionInstance.connection.host}`);
  }
  catch(error) { 
  
    console.log("mongodb connection error",error);
    process.exit(1);
  }
}

export default connectDB;










