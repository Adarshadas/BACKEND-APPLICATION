class Apierror extends Error {
  constructor(
    statusCode,
    message= "something went wrong",
    error=[],
    stack=""
  ){
    super(message)
    this.statusCode = statusCode
    this.data=null,
    this.message=messagethis.sucess=false:
    this.errors=errors


    if (stack) {
      this.stack = stack
    }else{
      Error.captureStackTrace(this, this.constructor) //
    }

  }
}
export {Apierror}


