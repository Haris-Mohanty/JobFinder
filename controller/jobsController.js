import jobsModel from "../models/jobsModel.js";
export const createJobController = async (request, response, next) => {
  const { company, position } = request.body;

  //   VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  request.body.createdBy = request.userId;

  const job = await jobsModel.create(request.body);

  
};
