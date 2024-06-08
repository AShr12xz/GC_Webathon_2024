import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../App.js";

const CourseReg = () => {
  const { user } = useUserContext();
  const [courses, setCourses] = useState([]);

  const [selectedSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseurl + "/courses/getAllCourses");
        // console.log(res.data);
        setCourses(res.data.data.courses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < courses.length; i++) {
      console.log(i);
      const box = document.getElementById(`${i}`);
      if (box.checked) {
        selectedSubjects.push(courses[i]);
      }
    }
    try {
      const res = await axios.post(baseurl + "/studentCourses/selectCourses", {
        selectedSubjects,
        rollno: user.uniqueId,
        studentName: user.name,
      });
      toast.success("Courses Selected Successfully");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg px-2 border border-gray-200">
      <ToastContainer></ToastContainer>
      <h2 className="text-4xl font-serif text-center mt-3 mb-5 shadow-lg p-3">
        Course Registration
      </h2>
      <form onSubmit={handleSubmit}>
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
                <th className="border px-4 sm:px-6 py-3 text-left text-lg sm:text-xl font-semibold">
                  Select
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
                  <td
                    className="
                  border px-4 sm:px-6 py-4"
                  >
                    {subject.credits}
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    {subject.faculty}
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    <input
                      id={`${index}`}
                      type="checkbox"
                      className="h-5 w-5 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                    />
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
      </form>
    </div>
  );
};

export default CourseReg;
