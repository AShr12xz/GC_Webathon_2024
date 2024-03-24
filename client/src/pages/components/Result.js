import { React, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";

const Result = () => {
  // Grades structured as an array of objects
  const [courses, setCourses] = useState([]);
  const { user } = useUserContext();

  var cgpa = 0;
  var totalcredit = 0;
  for (let i = 0; i < courses.length; i++) {
    totalcredit += courses[i].credits;
    switch (courses[i].grade) {
      case "EX":
        cgpa += 10 * courses[i].credits;
        break;
      case "A":
        cgpa += 9 * courses[i].credits;
        break;
      case "B":
        cgpa += 8 * courses[i].credits;
        break;
      case "C":
        cgpa += 7 * courses[i].credits;
        break;
      case "D":
        cgpa += 6 * courses[i].credits;
        break;
      case "P":
        cgpa += 5 * courses[i].credits;
        break;
      default:
        break;
    }
  }
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
    <div className="w-full h-full bg-white rounded-l overflow-hidden shadow-lg px-2 border border-gray-200">
      <h2 className="text-4xl font-serif  my-5 text-center">
        Subject-wise Grades
      </h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-4 py-2">Subject Name</th>
            <th className="px-4 py-2">Subject Code</th>
            <th className="px-4 py-2">Credits</th>
            <th className="px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((grade, index) => (
            <tr key={index} className={index % 2 !== 0 ? "bg-gray-300" : ""}>
              <td className="border px-4 py-2">{grade.courseName}</td>
              <td className="border px-4 py-2">{grade.coursecode}</td>
              <td className="border px-4 py-2">{grade.credits}</td>
              <td className="border px-4 py-2">{grade.grade}</td>
            </tr>
          ))}
          {/* SGPA and CGPA row */}
          <tr className="bg-gray-300">
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
