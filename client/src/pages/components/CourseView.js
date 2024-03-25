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
    <div className="container mx-auto px-4 py-4">
      <ToastContainer></ToastContainer>
      <h1 className="flex justify-center text-4xl font-bold mb-4 border p-4 bg-gray-50 shadow-lg font-sans rounded-xl">
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Faculty Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((subject, index) => (
                <tr key={subject.index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.coursecode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.faculty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4">
          <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseReg;
