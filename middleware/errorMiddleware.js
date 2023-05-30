//ERROR MIDDLEWARE CREATE || NEXT FUNCTION
const errorMiddleware = (err, request, response, next) => {
  console.log(err);
  response.status(500).send({
    success: false,
    message: "Something Went Wrong",
    err,
  });
};

export default errorMiddleware;
