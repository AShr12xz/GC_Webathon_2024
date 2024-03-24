import { React, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";

const Result = () => {
  // Grades structured as an array of objects
  const [courses, setCourses] = useState([]);
  const { user } = useUserContext();

  var cgpa = 0;
  var totalcredit = 0;
  courses.map((ele) => {
    totalcredit += ele.credits;
    switch (ele.grade) {
      case "EX":
        cgpa += 10 * ele.credits;
        break;
      case "A":
        cgpa += 9 * ele.credits;
        break;
      case "B":
        cgpa += 8 * ele.credits;
        break;
      case "C":
        cgpa += 7 * ele.credits;
        break;
      case "D":
        cgpa += 6 * ele.credits;
        break;
      case "P":
        cgpa += 5 * ele.credits;
        break;
      case "F":
        break;
    }
  });
  cgpa /= totalcredit;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/studentCourses/showAttendanceforStudent",
          { rollno: user.uniqueId }
        );
        setCourses(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setCourses]);

  return (
    <div className="w-3/5 mx-auto mt-8 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Subject-wise Grades SEMESTER-4
      </h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Subject Name</th>
            <th className="px-4 py-2">Subject Code</th>
            <th className="px-4 py-2">Credits</th>
            <th className="px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((grade, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{grade.courseName}</td>
              <td className="border px-4 py-2">{grade.coursecode}</td>
              <td className="border px-4 py-2">{grade.credits}</td>
              <td className="border px-4 py-2">{grade.grade}</td>
            </tr>
          ))}
          {/* SGPA and CGPA row */}
          <tr className="bg-gray-100">
            <td colSpan="3" className="border px-4 py-2 font-semibold">
              {/* SGPA: {sgpa} */}CGPA
            </td>
            <td
              colSpan="1"
              className="border-r border-t border-b px-4 py-2 font-semibold"
            >
              {cgpa.toPrecision(3)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
