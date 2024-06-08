import { React, useState,useEffect } from "react";
import axios from 'axios';
import { useUserContext } from "../../../store/UserContext";

const FeedbackBox = () => {
  // Hardcoded feedback data
  const [feedback,setFeedback]=useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/studentCourses/showAttendanceforStudent",
          { facultycode: user.uniqueId }
        );
        setFeedback(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setFeedback]);

  // State to manage showing more feedbacks
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="overflow-y-scroll w-full">
      <div className="w-3/5 mx-auto mt-10 ">
        <div className="bg-blue-500 text-white text-center py-2 px-4 mb-4 rounded-lg">
          <h2 className="text-2xl font-bold">Student Feedback</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* Render the first 5 feedbacks */}
          {feedback
            .slice(0, showAll ? feedback.length : 5)
            .map((feedback, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">{feedback.feedback}</p>
              </div>
            ))}

          {!showAll && feedback.length > 5 && (
            <button
              onClick={toggleShowAll}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Show More
            </button>
          )}

          {showAll && (
            <button
              onClick={toggleShowAll}
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
