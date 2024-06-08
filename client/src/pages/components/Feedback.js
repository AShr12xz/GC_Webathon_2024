import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../App.js";

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
        const res = await axios.post(baseurl + "/courses/findStudentCourse", {
          rollno: user.uniqueId,
        });
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
    <div className="w-full h-full bg-mygrey rounded-lg overflow-hidden shadow-lg p-6  border border-gray-200">
      <ToastContainer></ToastContainer>
      <h2 className="text-4xl font-serif text-center mt-0 mb-5 shadow-lg p-3 ">
        Student's Feedback
      </h2>
      <form
        onSubmit={handleSubmit}
        class="max-w-md mx-auto  mt-10 p-6 bg-white border rounded-lg shadow-lg mb-6"
      >
        <h2 class="text-2xl font-bold mb-6">Feedback Form</h2>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" htmlFor="teacher">
            Professor's Name:
          </label>
          <select
            id="teacher"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            placeholder="Enter your feedback"
            rows="5"
            name="feedback"
            value={data.feedback}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>
        <button
          class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
