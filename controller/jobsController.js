import jobsModel from "../models/jobsModel.js";

// ******* CREATE JOBS **********
export const createJobController = async (request, response, next) => {
  const { company, position } = request.body;

  //   VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  request.body.createdBy = request.userId;

  const job = await jobsModel.create(request.body);

  response.status(201).json({ job });
};

// ******* GET JOBS **********
export const getAllJobsController = async (request, response, next) => {
    const 
};
