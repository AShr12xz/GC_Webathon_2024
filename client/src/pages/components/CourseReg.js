import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";

const CourseReg = () => {
  const { user } = useUserContext();
  const [courses, setCourses] = useState([]);

  const [selectedSubjects, setSelectedSubjects] = useState([]);

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
  const abcd = [];
  const handleCheckboxChange = (index) => {
    if(abcd.includes(index)){

    };
    abcd.push(index);

    // setSelectedSubjects({selectedSubjects});
    console.log(abcd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for(let i=0;i<courses.length;i++){
      console.log(i);
      const box=document.getElementById(`${i}`);
      if(box.checked){
          selectedSubjects.push(courses[i]);
      }
    }
    try{
      const res = await axios.post(
          "http://localhost:3000/studentCourses/selectCourses",
          { selectedSubjects,rollno:user.uniqueId,studentName:user.name }
        );
        toast.success("Courses Selected Successfully");
        console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer></ToastContainer>
      <h1 className="flex justify-center text-2xl font-semibold mb-4 border p-4 bg-gray-50 shadow-lg ">
        Course Registration
      </h1>
      <form onSubmit={handleSubmit}>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      id={`${index}`}
                      type="checkbox"
                      // checked={selectedSubjects.includes(index)}
                      // onChange={() => {
                      //   handleCheckboxChange(index);
                      // }}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
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
      </form>
    </div>
  );
};

export default CourseReg;
