import React, { useState } from "react";

const FeedbackForm = (user) => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [feedback, setFeedback] = useState("");
console.log(user);
  const teachers = [
    "Teacher 1",
    "Teacher 2",
    "Teacher 3",
    "Teacher 4",
    "Teacher 5",
    "Teacher 6",
    "Teacher 7",
    "Teacher 8",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Teacher:", selectedTeacher);
    console.log("Feedback:", feedback);
  };

  return (
    <div className="w-3/5 mx-2 md:mx-auto my-16 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
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
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            
            className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
