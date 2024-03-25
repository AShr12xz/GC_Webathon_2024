import { React, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../../store/UserContext";

const StudentAttendancePortal = () => {
  // Sample data for courses, students, and attendance
  const { user } = useUserContext();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/studentCourses/showAttendanceforStudent",
          { facultycode: user.uniqueId }
        );
        setCourses(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setCourses]);

  // Function to fetch students based on selected course
  const fetchStudents = (course) => {
    // Sample logic to fetch students based on course
    // Replace with actual API call to fetch students
    const sampleStudents = [
      { id: 1, name: "Student 1", rollNumber: "001" },
      { id: 2, name: "Student 2", rollNumber: "002" },
      { id: 3, name: "Student 3", rollNumber: "003" },
    ];
    setStudents(sampleStudents);
  };

  // // Function to handle checkbox change for marking attendance
  const handleCheckboxChange = (studentId) => {
    const updatedAttendance = attendance.map((student) => {
      if (student.id === studentId) {
        return { ...student, present: !student.present };
      }
      return student;
    });
    setAttendance(updatedAttendance);
  };

  // Function to handle form submission
  const handleSubmitAttendance = (e) => {
    e.preventDefault();
    // Implement logic to submit attendance
    console.log("Attendance submitted:", attendance);
  };

  // Calculate summary of attendance
  const totalStudents = students.length;
  const totalPresent = attendance.filter((student) => student.present).length;
  const totalAbsent = totalStudents - totalPresent;

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-y-scroll shadow-lg p-6  border border-gray-200">
      <h2 className="text-xl md:text-4xl font-serif text-center mt-0 mb-5 shadow-lg p-3 ">
        Student Attendance Portal
      </h2>
      <div className="container mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <div>
            <label htmlFor="course" className="block font-semibold">
              Select Course:
            </label>
            <select
              id="course"
              className="mt-1 block w-full rounded-sm p-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                fetchStudents(e.target.value);
              }}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block font-semibold">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full rounded-sm p-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
        </div>

        {students.length > 0 && (
          <form onSubmit={handleSubmitAttendance}>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-[10px] md:text-lg">
                  <tr>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Roll Number
                    </th>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Present
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y text-[10px] md:text-lg divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.rollNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={
                            attendance.find((a) => a.id === student.id)
                              ?.present || false
                          }
                          onChange={() => handleCheckboxChange(student.id)}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Attendance
              </button>
            </div>
            <div className="flex justify-center">
              <div className="mx-auto mt-6">
                <h2 className="text-lg md:text-lg font-serif text-center mt-0 mb-5 shadow-lg p-3 ">
                  Summary
                </h2>
                <p>Total Students: {totalStudents}</p>
                <p>Total Present: {totalPresent}</p>
                <p>Total Absent: {totalAbsent}</p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentAttendancePortal;
