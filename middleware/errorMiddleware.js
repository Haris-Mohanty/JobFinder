//ERROR MIDDLEWARE CREATE || NEXT FUNCTION
const errorMiddleware = (err, request, response, next) => {
  console.log(err);
  const defaultErrors = {
    statusCode: 500,
    message: err,
  };
  
  
  //MISSING FIELD ERROR
  if (err.name == "ValidationError") {
    defaultErrors.statusCode = 400;
    defaultErrors.message = Object.values(err.errors).map((item) => item.message).join(",");
  }
  response.status(defaultErrors.statusCode).json({message : defaultErrors.message});
};

export default errorMiddleware;
