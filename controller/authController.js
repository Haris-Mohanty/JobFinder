import e from "express";

export const registerController = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    //VALIDATE
    if (!name) {
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
