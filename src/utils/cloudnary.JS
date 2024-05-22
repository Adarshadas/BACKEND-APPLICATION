
import {v2 as cloudinary} from "cloudnary"

import fs from "fs"




          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNIARY_CLOUD_NAM, 
  api_key: process.env.CLOUDNIARY_API_KEY,
  api_secret:process.env.CLOUDNIARY_API_SECRET
});
const uploadoncloudinary =async (localfilespath) => {
  try {
    if (!localFilespath) return null

    const responce= await cloudinary.uploader.upload(localFilespath,{
      resource_type:"auto"
  })
  // file has been uploaded sucessfully
  console.log("file is uploaded on cloudinary",responce.url);
  return responce

  } catch (error) {
    fs.unlinkSync(localfilespath)
    // remove the
    // locally saved temporary file as the upload as the 
    // operation got failed

    return null;

  }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });


















