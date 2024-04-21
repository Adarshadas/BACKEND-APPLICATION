import mongoose, { Schema } from "mongoose";
import jwt from "jwt";
import bcrypt from "bcrypt";
import {}

const userschema = new Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      index:true,
    
    },
  
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      index:true,
    },
    fullname:{
      type:String,
      required:true,
      index:true,
      trim:true,
    },
    avatar:{
      type:String,//cloudanary url
      required:true,
      trim:true,
    },
    coverImage:{
      type:String,//cloudanary url
    },
    watchhistory:{
      type:Schema.Types.ObjectId,
      ref:"video"
    
  },
  password:{
    type:String,
    required:[true,"password is required"],
    trim:true,
  },

  refreshtoken:{
    type:String,
  
  }


}, { timestamps:true}

)

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
      return next();
  }
  this.password = bcrypt.hash(this.password, 10)
  next()

} )


userSchema.methords.ispasswordCorrect =async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methords.generateAccessToken = async function(){
   return jwt.token(
    {
    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
    avatar: this.avatar,
    coverImage: this.coverImage,
    watchhistory: this.watchhistory,
    refreshtoken: this.refreshtoken,
  },
  process.env.JWT_SECRET,
  { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
  )
}


userSchema.methords.generateRefreshToken = async function(){
  return jwt.token(
    {
    _id: this._id,

  },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
  )
}

export const User =mongoose.model('User',userschema)






