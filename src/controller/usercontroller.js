import {asynchandler} from " ../utils/asyntchandler.js";



  const {fullname,email,firstname,lastname,password}=req.body
  console.log("email",email);







const registerUser = asynchandler(async(req,res)=>{
  res.status(200).json({
    message:"ok"
  })
})

export {registerUser, registerUser}









