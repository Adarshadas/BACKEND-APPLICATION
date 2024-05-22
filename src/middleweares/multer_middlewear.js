import multer from './multer'

const storage =multer.diskstorage({
  destination: function (req,file,cb){
    cb(null,'/tmp/my-uploads')
  },
  filename : function (req,file,cb){
    // const uniquesufix=Date.now() + '-' + Math.round(Math.random() * 100)
    cb(null,file.originalname )
  
  }

})

 export const upload= multer ({ storage ,})














































































