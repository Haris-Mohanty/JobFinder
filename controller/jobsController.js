import mongoose from "mongoose";
import jobsModel from "../models/jobsModel.js";

// ******* CREATE JOBS **********
export const createJobController = async (request, response, next) => {
  const { company, position } = request.body;

  //   VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  request.body.createdBy = request.user.userId;

  const job = await jobsModel.create(request.body);

  response.status(201).json({ job });
};

// ******* GET JOBS **********
export const getAllJobsController = async (request, response, next) => {
  const jobs = await jobsModel.find({ createdBy: request.user.userId });
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
  const job = await jobsModel.findOne({ _id: id });

  if (!job) {
    next(`No Job Found With This Id : ${id}`);
  }
  if (!request.user.userId === job.createdBy.toString()) {
    next("You are not Authoried to Update this Job!");
    return;
  }

  const updateJob = await jobsModel.findOneAndUpdate(
    { _id: id },
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );
  // Response Send
  response.status(200).json({ updateJob });
};

// ******* DELETE JOB *******
export const deleteJobController = async (request, response, next) => {
  const { id } = request.params;

  //find job
  const job = await jobsModel.findOne({ _id: id });

  // Validation
  if (!job) {
    next(`No Job Found With This Id:${id}`);
  }
  //check login user
  if (!request.user.userId === job.createdBy.toString()) {
    next("You are not Authoried to Update this Job!");
    return;
  }

  //Delete
  await job.deleteOne();

  // Response Send
  response.status(200).json({ message: "Job Deleted Successfully!" });
};

// ******* JOB STATS & FILTER *******
export const jobStatsController = async (request, response) => {
  const stats = await jobsModel.aggregate([
    //Search by user job
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(request.user.userId),
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  // Default Stats
  const defaultStats = {
    pending: stats.pending || 0,
    reject: stats.reject || 0,
    interview: stats.interview || 0,
  };

  // Response Send
  response.status(200).json({
    totalJob: stats.length,
    stats,
  });
};
