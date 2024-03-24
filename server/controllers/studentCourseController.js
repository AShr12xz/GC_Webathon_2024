const studentCourse = require("../models/studentCourseModel");
const asyncCheck = require("../utils/asyncCheck");
const error = require("../utils/error");

exports.createStudentCourse = asyncCheck(async (req, res) => {
  console.log(req.body);
  const courses = await studentCourse.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      courses,
    },
  });
})

exports.submitFeedback = asyncCheck(async (req, res, next) => {

  console.log(req.body);

  // Check if the user has already submitted feedback
  const feedback = await studentCourse.findOne({ rollno: req.body.rollno, facultycode: req.body.facultycode });
  console.log(feedback);
  if (feedback.feedback !== '') {
    return next(new error("Feedback already submitted", 400));
  } else {
    feedback.feedback = req.body.feedback;
    await feedback.save();
    res.status(201).json({
      status: "success",
      data: {
        feedback,
      },
    });
  }
});

exports.showFeedback = asyncCheck(async (req, res) => {
    const feedback1 = await studentCourse.find({ facultycode: req.body.facultycode }).filter((feedback) => feedback.feedback !== '');
    const { coursecode, courseName, feedback } = feedback1;
    
    res.status(200).json({
      status: "success",
      data: {
        courseName, coursecode, feedback
      },
    });
});

