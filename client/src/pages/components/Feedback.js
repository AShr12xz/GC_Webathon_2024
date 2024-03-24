import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";

const FeedbackForm = (props) => {
  const { user } = useUserContext();
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [data, setData] = useState({
    rollno: "",
    feedback: "",
    facultycode: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/courses/findStudentCourse",
          { rollno: user.uniqueId }
        );
        setCourses(res.data.data.courses);
        // Extract faculty names from the response
        const teachers1 = res.data.data.courses.map((course) => course.faculty);
        setTeachers(teachers1);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the faculty code from the selected teacher
    const fcode = courses.filter((code) => {
      if (code.faculty === selectedTeacher) {
        return code;
      }
    });
    console.log(fcode);
    data.rollno = user.uniqueId;
    data.facultycode = fcode[0].facultycode;
    try {
      await axios.post(
        "http://localhost:3000/studentCourses/submitFeedback",
        data
      );
      toast.success("Feedback Submitted Successfully");
    } catch (error) {
      toast.info("Feedback Already Submitted");
      console.log(error);
    }
  };

  return (
    <div className="w-3/5 mx-2 md:mx-auto my-16 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <ToastContainer></ToastContainer>
      <h2 className="text-lg font-semibold mb-4 text-center">
        Submit Feedback
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="teacher"
            className="block text-gray-600 font-semibold mb-2"
          >
            Select Teacher:
          </label>
          <select
            id="teacher"
            required="true"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
          >
            <option value="">Select</option>
            {teachers.map((teacher, index) => (
              <option key={index} value={teacher}>
                {teacher}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-gray-600 font-semibold mb-2"
          >
            Feedback:
          </label>
          <textarea
            id="feedback"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            rows="4"
            name="feedback"
            value={data.feedback}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>
        <div className="text-center">
          <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
