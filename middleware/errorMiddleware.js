//ERROR MIDDLEWARE CREATE || NEXT FUNCTION
const errorMiddleware = (err, request, response, next) => {
  console.log(err);
  response.send(500).send({
    su
  });
};
