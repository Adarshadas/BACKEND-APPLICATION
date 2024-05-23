
import {v2 as cloudinary} from "cloudnary"

import fs from "fs"
// fs stands for file sysytem

         
cloudinary.config({ 
  cloud_name: process.env.CLOUDNIARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_APP_SECRET
});




const uploadoncloudinary =async (localfilespath) => {
  try {
    if (!localfilespath) return null

    // upload the file on cloudinary

    const response= await cloudinary.uploader.upload(localfilespath,{
      resource_type:"auto"
  })
  // file has been uploaded sucessfully
  console.log("file is uploaded on cloudinary",response.url);
  return response;

  } catch (error) {
    fs.unlinkSync(localfilespath)
    // remove the locally saved temporary file as the upload as the  operation got failed

    return null;

  }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });


export{uploadoncloudinary}















