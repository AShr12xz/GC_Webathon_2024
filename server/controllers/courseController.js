const Course = require("../models/courseModel");
const studentCourse =require("../models/studentCourseModel")

exports.createCourse = asyncCheck(async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      course,
    },
  });
});

exports.updateCourse = asyncCheck(async (req, res, next) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      course: updatedCourse,
    },
  });
});

exports.deleteCourse = asyncCheck(async (req, res, next) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getCourse = asyncCheck(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      course,
    },
  });
});

exports.browseCourses = asyncCheck(async (req, res, next) => {
  const courses = await Course.find();
  // Sending response
  res.status(200).json({
    status: "success",
    length: courses.length,
    data: {
      courses,
    },
  });
});

exports.myCourses = asyncCheck(async (req, res, next) => {
  const courses = await studentCourse.find();
  // Sending response
  res.status(200).json({
    status: "success",
    data: {
      courses,
    },
  });
});
