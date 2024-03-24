const mongoose = require("mongoose");

const studentCourseSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: [true, "Course name is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  courseName: {
    type: String,
    required: [true, "Course name is required"],
  },
  coursecode: {
    type: String,
    required: [true, "Course code is required"],
  },
  faculty: {
    type: String,
    required: [true, "Faculty is required"],
  },
  facultycode: {
    type: String,
    required: [true, "Faculty is required"],
  },
  credits: {
    type: Number,
    required: [true, "Credits are required"],
  },
  feedback: {
    type: String,
  },
  attended: {
    type: String,
  },
  classes:[Date]
});

const studentCourse = mongoose.model("studentCourse", studentCourseSchema);
module.exports = studentCourse;
