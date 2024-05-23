import {asynchandler} from " ../utils/asyntchandler.js";
import { Apierror } from "../utils/apierrors.js";
import { User } from "../models/user_model.js";
import { uploadoncloudinary } from "../utils/cloudnary.JS";
import { Apiresponce } from "../utils/apiresponce.js";


  const {fullname,email,firstname,lastname,password}=req.body
  console.log("email",email);

  if (
    [fullname,email,firstname,lastname,password].some((field)=>field?.trim()==="")
  ) {
    throw new Apierror(400,"all fields are required")
  }

const existeduser=userSchema.findOne({
  $or:[{username},{email}]
})

if (existeduser) {
  throw new Apierror(409,"user with email or username already exist")
}
const avatarlocalpath=req.files?.avatar[0]?.path
req.files?.cover
const coverimagelocalpath=req.files?.coverimage[0]?.path;

if (!avatarlocalpath) {
  throw new Apierror(400,"avatar file is required")
}

const avatar= await uploadoncloudinary(avatarlocalpath,cover)
const coverimage= await uploadoncloudinary(coverimagelocalpath)

if (!avatar) {
  throw new Apierror(400,"avatar file is required")
}

const user=User.create({
  fullname,
  avatar:avatar.url,
  coverImage:coverimage?.url || "",
  password,
  email,
  username: username.toLowerCase(),
  
})
const createduser= await User.findById(user._id)
  "-password -refreshtoken"
)

if (!createduser) {
  throw new Apierror(500,"something went wrong while registering the user"
}
return res.status(201).json(
  new Apiresponce(200,createduser,"user registered sucessfully")
 .remove("password","refreshtoken")
)







// const registerUser = asynchandler(async(req,res)=>{


//  get user details from frontend
// validation-not empty
// check if user already exist:username,email
// check images for images,check for avatar
// upload the image to cloudnary,avatar
// create user object- create entry in db
// remove password and refresh tokenfield from responce
// check for user creation
// return responce

// const{fullname,email,username,password}=req.body
// console.log("email",email);

// if (fullname=="") {
//   throw new Apierror(400,"fullname is required")
// }



// if (
//   [fullname,email,username,password].some((field)=>field?.trim()==="")

// ){
//  throw new Apierror(400,"all fields are required")
  
// }

//  


// export {registerUser,}









