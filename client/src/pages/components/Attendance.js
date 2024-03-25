import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";

const Attendance = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useUserContext();

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

  const calculateAttendancePercentage = (attended, total) => {
    var attendancePercentage = total ? (attended * 100) / total : 0;
    console.log("Attendance Percentage:", attendancePercentage);
    return attendancePercentage;
  };

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg p-2 border border-gray-200">
      <h2 className="text-4xl font-serif text-center mt-3 mb-5 shadow-lg p-3">
        Subject-wise Attendance
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
                Attendance Percentage
              </th>
              <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                Attendance Bar
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(courses)} */}
            {courses.map((record, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100 " : "bg-white"}
              >
                <td className="border px-4 sm:px-6 py-4">
                  {record.courseName}
                </td>
                <td className="border px-4 sm:px-6 py-4">
                  {record.coursecode}
                </td>
                <td className="border px-4 sm:px-6 py-4">
                  {record.classes.length
                    ? (record.attended.length * 100) / record.classes.length +
                      "%"
                    : "No classes held"}
                </td>
                <td className="border px-4 sm:px-6 py-4">
                  <div className="w-full bg-gray-300 h-4 rounded-full ">
                    <div
                      className={
                        record.percentage < 75
                          ? "bg-red-500 h-full rounded-full"
                          : "bg-green-500 h-full rounded-full"
                      }
                      style={{
                        width: `${
                          record.classes.length
                            ? (record.attended.length * 100) /
                              record.classes.length
                            : 0
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
    </div>
  );
};

export default Attendance;
