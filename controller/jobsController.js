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
  const jobs = await jobsModel.find({ createdBy: request.userId });
  response.status(200).json({
    totalJobs: jobs.length,
    jobs,
  });
};

// *******  UPDATE JOBS  *******
export const updateJobController = async (request, response, next) => {
  const { id } = request.params;
  const { company, position } = request.body;

  // VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  //find job
  const job = await jobsModel.find
};
