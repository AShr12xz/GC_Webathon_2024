const Feedback = require("../models/feedbackModel");
const studentCourse = require("../models/studentCourseModel");
const asyncCheck = require("../utils/asyncCheck");
const error = require("../utils/error");

exports.submitFeedback = asyncCheck(async (req, res, next) => {

  console.log(req.body);

  // Check if the user has already submitted feedback
  const feedback = await studentCourse.find({ rollno: req.body.rollno, facultycode: req.body.facultycode });
  if (feedback.feedback.length > 0) {
    return next(new error("Feedback already submitted", 400));
  } else {
    feedback.feedback=req.body.feedback;
    await feedback.save();
    res.status(201).json({
      status: "success",
      data: {
        feedback,
      },
    });
  }
});

exports.submitFeedback2 = asyncCheck(async (req, res, next) => {
  console.log(req.body);

  // Check if the user has already submitted feedback
  const feedback = await Feedback.find({
    rollno: req.body.rollno,
    facultycode: req.body.facultycode,
  });
  if (feedback.length > 0) {
    return next(new error("Feedback already submitted", 400));
  } else {
    const feedback = await Feedback.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        feedback,
      },
    });
  }
});
