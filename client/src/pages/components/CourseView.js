import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";

const CourseReg = () => {
  const { user } = useUserContext();
  const [courses, setCourses] = useState([]);

  const [selectedSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/courses/getAllCourses"
        );
        // console.log(res.data);
        setCourses(res.data.data.courses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg px-2 border border-gray-200">
      <ToastContainer></ToastContainer>
      <h1 className="text-4xl font-serif text-center mt-3 mb-5 shadow-lg p-3">
        Registered Courses
      </h1>
      {/* <div className="flex text-xl font-bold mb-4 border p-4 bg-gray-50 shadow-lg font-sans rounded-xl">
        <div className="flex flex-row mx-4">
          <div>Name</div>
          <div>Shrey Jain</div>
          <div>Roll Number</div>
          <div>22EE01002</div>
        </div>
      </div> */}

      <div>
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
                  Faculty Name
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((subject, index) => (
                <tr
                  key={subject.index}
                  className={index % 2 !== 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 sm:px-6 py-4">{subject.name}</td>
                  <td className="border px-4 sm:px-6 py-4">
                    {subject.coursecode}
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    {subject.credits}
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    {subject.faculty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4 mb-3">
          <button className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseReg;
