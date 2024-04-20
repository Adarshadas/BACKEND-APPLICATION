// const asynchandler = ()=>{}


export {asynchandler}


// const asynchandler = ()=>{}
// const asynchandler = (func) => ()=>{}
// const asynchandler = (func) => async()=>{}




// const asynchandler = (fn)=>async(req,res,next)=>{

//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       sucess:false,
//       message:err.message
//     })
//   }


// }


// doing above thing in promises

const asyncHnadler = (requestHandler)=>{
  return async (req,res,next)=>{
   Promise.resolve(requestHandler(req,res,next))
   .catch((err)=> next (err))
  }
}






export{asyncHnadler}


















