const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: [true, "Student Roll No. is required"],
  },
  feedback: {
    type: String,
    required: [true, "feedback is required"],
  },
  facultycode: {
    type: String,
    required: [true, "Faculty code is required"],
  },
  // courseCode: {
  //   type: String,
  //   required: [true, "Course code is required"],
  // }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;