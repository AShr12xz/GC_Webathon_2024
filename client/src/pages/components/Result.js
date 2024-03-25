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
    <div className="w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg px-2 border border-gray-200">
      <h2 className="text-4xl font-serif text-center mt-3 mb-5 shadow-lg p-3">
        Subject-wise Grades
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                Subject Name
              </th>
              <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                Subject Code
              </th>
              <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                Credits
              </th>
              <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((grade, index) => (
              <tr
                key={index}
                className={index % 2 !== 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 sm:px-6 py-4">{grade.courseName}</td>
                <td className="border px-4 sm:px-6 py-4">{grade.coursecode}</td>
                <td className="border px-4 sm:px-6 py-4">{grade.credits}</td>
                <td className="border px-4 sm:px-6 py-4">{grade.grade}</td>
              </tr>
            ))}
            {/* SGPA and CGPA row */}
            <tr className="bg-gray-300">
              <td
                colSpan="3"
                className="border px-4 sm:px-6 py-4 font-semibold text-lg sm:text-xl"
              >
                CGPA
              </td>
              <td
                colSpan="1"
                className="border px-4 sm:px-6 py-4 font-semibold text-lg sm:text-xl"
              >
                {cgpa.toPrecision(3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
