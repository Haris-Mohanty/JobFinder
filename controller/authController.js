import userModel from "../models/userModel.js";

export const registerController = async (request, response, next) => {
  try {
    const { name, email, password } = request.body;
    //VALIDATE
    if (!name) {
      // return response.status(400).send({ success: false, message: "Please Provide Name!" });
      next("Name is Required.");
    }
    if (!email) {
      return response.status(400).send({ success: false, message: "Please Provide Email!" });
    }
    if (!password) {
      return response.status(400).send({ success: false, message: "Please Provide Password!" });
    }

    //check email exist or not
    const existingUser = await userModel.findOne({email});

    if(existingUser){
        return response.status(200).send({
            success : false,
            message : 'Email Already Registered! Please Login!'
        });
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
