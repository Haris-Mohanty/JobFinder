import Jwt from "jsonwebtoken";

const userAuth = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    next("Auth Failed!");
  }
  const token = authHeader.splite(" ")[1];
  try {
    
  } catch (error) {
    next("Auth Failed!");
  }
};
