import userModel from "../models/userModel.js";

export const registerController = async (request, response, next) => {
  try {
    const { name, email, password } = request.body;
    //VALIDATE
    if (!name) {
      // return response.status(400).send({ success: false, message: "Please Provide Name!" });
      next("Please Provide Name!");
    }
    if (!email) {
      next("Please Provide Email!");
    }
    if (!password) {
      next("Please Provide Password! Password Must be Greater then 6 Character!");
    }

    //check email exist or not
    const existingUser = await userModel.findOne({email});

    if(existingUser){
        next("Email Already Registered! Please Login!");
    }

    //CREATE USER
    const user = await userModel.create({name, email, password});
    response.status(201).send({
        success : true,
        message : 'User Created Successfully!',
        user
    });

  } catch (error) {
    next(error);
  }
};
