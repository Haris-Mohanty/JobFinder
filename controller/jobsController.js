import mongoose from "mongoose";
import jobsModel from "../models/jobsModel.js";
import moment from "moment";

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

  const {status} = request.query;

  // Condition for searching filters
  const queryObject = {
    createdBy : request.user.userId
  }
  // Filter Logic
  if(status && status !== 'all'){
    queryObject.status = status;
  }
  const queryResult = jobsModel.find(queryObject);
  const jobs = await queryResult;

  // const jobs = await jobsModel.find({ createdBy: request.user.userId });
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

  // Monthly & Yearly Stats show
  let monthlyApplication = await jobsModel.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(request.user.userId),
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  monthlyApplication = monthlyApplication
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  // Response Send
  response.status(200).json({
    totalJob: stats.length,
    defaultStats,
    monthlyApplication,
  });
};
