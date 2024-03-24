import { React, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";

const Attendance = () => {
  // Hardcoded attendance percentages for 8 subjects
  const [courses, setCourses] = useState([]);
  const { user } = useUserContext();

  const attendance = [
    { subjectName: "Mathematics", subjectCode: "MAT", percentage: 85 },
    { subjectName: "Science", subjectCode: "SCI", percentage: 90 },
    { subjectName: "History", subjectCode: "HIS", percentage: 78 },
    { subjectName: "English", subjectCode: "ENG", percentage: 92 },
    { subjectName: "Computer Science", subjectCode: "CSE", percentage: 68 },
    { subjectName: "Physics", subjectCode: "PHY", percentage: 80 },
    { subjectName: "Chemistry", subjectCode: "CHE", percentage: 85 },
    { subjectName: "Biology", subjectCode: "BIO", percentage: 55 },
  ];

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
  // console.log(courses);
  return (
    <div className="w-4/5 m-8 mx-auto px-4 md:px-16 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Subject-wise Attendance
      </h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Subject Name</th>
            <th className="px-4 py-2">Subject Code</th>
            <th className="px-4 py-2">Attendance Percentage</th>
            <th className="px-4 py-2">Attendance Bar</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(courses)} */}
          {courses.map((record, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{record.courseName}</td>
              <td className="border px-4 py-2">{record.coursecode}</td>
              <td className="border px-4 py-2">
                {record.classes.length
                  ? (record.attended.length * 100) / record.classes.length + "%"
                  : "No classes held"}
              </td>
              <td className="border px-4 py-2">
                <div className="w-full bg-gray-300 h-4 rounded-full mb-2">
                  <div
                    className={
                      record.percentage < 75
                        ? "bg-red-500 h-full rounded-full"
                        : "bg-green-500 h-full rounded-full"
                    }
                    style={{
                      width: `${
                        record.classes.length?(record.attended.length * 100) /
                        record.classes.length:0
                      }%`,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
