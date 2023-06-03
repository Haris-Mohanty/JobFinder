import userModel from "../models/userModel.js";

export const updateUserController = async (request, response, next) => {
  const { name, email, lastName, location } = request.body;
  // validation
  if (!name || !email || !lastName || !location) {
    next("Pleasr provide all fields!");
  }
  const user = await userModel.findOne({ _id: request.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();

  response.status(200).json({
    user,
    token,
  });
};
