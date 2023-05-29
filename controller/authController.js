import e from "express";

export const registerController = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    //VALIDATE
    if (!name) {
      return response
        .status(400)
        .send({ success: false, message: "Please Provide Name!" });
    }
    if (!email) {
      return response
        .status(400)
        .send({ success: false, message: "Please Provide Email!" });
    }
    if (!password) {
      return response
        .status(400)
        .send({ success: false, message: "Please Provide Password!" });
    }
  } catch (error) {
    console.log(error);
    response.status(400).send({
      message: "Error in Register Controller!",
      success: false,
      error,
    });
  }
};
