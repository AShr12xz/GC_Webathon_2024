import { React, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentAttendancePortal = () => {
  // Sample data for courses, students, and attendance
  const { user } = useUserContext();
  const [courses, setCourses] = useState([]);
  const [coursenames, setCoursenames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [students] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/studentCourses/showAttendanceforStudent",
          { facultycode: user.uniqueId }
        );

        if (res.data.data.data) {
          var cor = [];
          console.log(res.data.data.data);
          for (let i = 0; i < res.data.data.data.length; i++) {
            if (!cor.includes(res.data.data.data[i].coursecode)) {
              cor.push(res.data.data.data[i].coursecode);
            }
          }
          console.log(cor);
          setCoursenames(cor);
        }

        setCourses(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setCourses]);

  // Function to handle form submission
  const handleSubmitAttendance = async (e) => {
    e.preventDefault();
    for (let i = 0; i < courses.length; i++) {
      const box = document.getElementById(`${i}`);
      if (courses[i].coursecode === selectedCourse) {
        if (box.checked) {
          students.push({
            rollno: courses[i].rollno,
            coursecode: courses[i].coursecode,
            attended: selectedDate,
            classes: selectedDate,
          });
        } else {
          students.push({
            rollno: courses[i].rollno,
            coursecode: courses[i].coursecode,
            attended: "0",
            classes: selectedDate,
          });
        }
      }
    }
    console.log(students);
    try {
      const res = await axios.post(
        "http://localhost:3000/studentCourses/updateAttendance",
        { students }
      );
      toast.success("Attendance updated Successfully");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error in updating attendance");
      navigate("/facultyattendance");
    }
  };

  // Calculate summary of attendance

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-y-scroll shadow-lg p-6  border border-gray-200">
      <ToastContainer></ToastContainer>
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
              className="mt-1 block w-full text-black rounded-sm p-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
              }}
              required
            >
              <option value="">Select Course</option>
              {coursenames.map((course, index) => (
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

        {
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
                  {courses.map(
                    (student, index) =>
                      student.coursecode === selectedCourse && (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.studentName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.rollno}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              id={`${index}`}
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-blue-600"
                            />
                          </td>
                        </tr>
                      )
                  )}
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
          </form>
        }
      </div>
    </div>
  );
};

export default StudentAttendancePortal;
