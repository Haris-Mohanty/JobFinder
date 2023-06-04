import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Company Name is Required!"],
  },
  position: {
    type: String,
    required: [true, "Job Position is Required!"],
    minLength: 100,
  },
  status: {
    type: String,
    enum: ["pending", "reject", "interview"],
    default: "pending",
  },
  workType: {
    type: String,
    enum: ["full-time", "part-time", "internship", "contract"],
    default: "full-time",
  },
  workLocation: {
    type: String,
    default: "Mumbai",
    required: [true, "Work Location is REquired!"],
  },
  createdBy: {
    type : mongoose.Types
  },
});

export default mongoose.model("Job", jobSchema);
