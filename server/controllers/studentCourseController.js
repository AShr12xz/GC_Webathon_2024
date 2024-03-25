const studentCourse = require("../models/studentCourseModel");
const Course = require("../models/courseModel");
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
});

exports.submitFeedback = asyncCheck(async (req, res, next) => {
  console.log(req.body);

  // Check if the user has already submitted feedback
  const feedback = await studentCourse.findOne({
    rollno: req.body.rollno,
    facultycode: req.body.facultycode,
  });
  console.log(feedback);
  if (feedback.feedback !== "") {
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
  const facultyfeedback = await studentCourse.find({
    facultycode: req.body.facultycode,
  });
  const data = student.filter((ele) => {
    const { feedback } = ele;
    return feedback;
  });
  res.status(200).json({
    status: "success",
    data: {
      data,
    },
  });
});

exports.showAttendanceforStudent = async (req, res) => {
  if (req.body.rollno) {
    const student = await studentCourse.find({ rollno: req.body.rollno });
    const data = student.filter((ele) => {
      const { courseName, coursecode, attended, classes } = ele;
      return courseName, coursecode, attended, classes;
    });

    res.status(201).json({
      status: "success",
      data: {
        data,
      },
    });
  } else if (req.body.facultycode) {
    const student = await studentCourse.find({
      facultycode: req.body.facultycode,
    });
    const data = student.filter((ele) => {
      const { name, rollno } = ele;
      return name, rollno;
    });

    res.status(201).json({
      status: "success",
      data: {
        data,
      },
    });
  }
};

exports.showAttendanceforFaculty = async (req, res) => {
  const faculty = await studentCourse.find({
    facultycode: req.body.facultycode,
  });

  if (!faculty) return next(new error("No faculty found", 404));
};

exports.updateAttendance = asyncCheck(async (req, res) => {
  req.body.students.map(async (el) => {
    console.log(el);
    const student = await studentCourse.findOne({
      rollno: el.rollno,
      coursecode: el.coursecode,
    });
    console.log(student);
    if (el.attended !== "0") {
      student.attended.push(new Date(el.attended));
    }
    student.classes.push(new Date(el.classes));
    await student.save();
  });

  res.status(201).json({
    status: "success",
  });
});

exports.addGrade = asyncCheck(async (req, res) => {

  req.body.students.map(async (el) => {
    console.log(el);
    const student = await studentCourse.findOne({
      rollno: el.rollno,
      coursecode: el.coursecode,
    });
    student.grade=el.grade;
    await student.save();
  });

  res.status(201).json({
    status: "success",
  });
});

exports.showGrade = asyncCheck(async (req, res) => {
  const student = await studentCourse.find({ rollno: req.body.rollno });
  const data = student.filter((ele) => {
    const { courseName, coursecode, grade, credits } = ele;
    return courseName, coursecode, grade, credits;
  });
  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});

exports.showCourses = asyncCheck(async (req, res) => {
  const student = await studentCourse.find({ rollno: req.body.rollno });
  const data = student.filter((ele) => {
    const { courseName, coursecode, faculty, credits } = ele;
    return courseName, coursecode, faculty, credits;
  });

  if (!data || data.length === 0) {
    return next(new error("No courses found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      data,
    },
  });
});

// select courses from available options
exports.selectCourses = asyncCheck(async (req, res) => {
  console.log(req.body);
  req.body.selectedSubjects.map(async (ele) => {
    const existing = await studentCourse.findOne({
      rollno: req.body.rollno,
      coursecode: ele.coursecode,
    });
    if (!existing) {
      const course = await Course.findOne({ coursecode: ele.coursecode });
      const data = {
        rollno: req.body.rollno,
        studentName: req.body.studentName,
        courseName: course.name,
        coursecode: course.coursecode,
        faculty: course.faculty,
        facultycode: course.facultycode,
        credits: course.credits,
        attended: [],
        classes: [],
        feedback: "",
        grade: "",
      };
      await studentCourse.create(data);
    }
  });

  res.status(201).json({
    status: "success",
  });
});
