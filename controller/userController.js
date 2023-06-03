import userModel from "../models/userModel";

export const updateUserController = async (request, response, next) => {
  const { name, email, lastName, password } = request.body;
  // validation
  if (!name || !email || !lastName || !password) {
    next("Pleasr provide all fields!");
  }
  const user = await userModel
};
