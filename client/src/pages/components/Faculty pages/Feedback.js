import React, { useState } from 'react';

const FeedbackBox = () => {
  // Hardcoded feedback data
  const feedbacks = [
    "Great teacher, very helpful!",
    "Really enjoyed the class, learned a lot.",
    "Could use more interactive activities.",
    "Amazing explanations, made difficult concepts easy to understand.",
    "Wish there were more practice quizzes.",
    "The class was too fast-paced for me.",
    "Excellent instructor, very knowledgeable.",
    "Overall, a fantastic learning experience."
  ];

  // State to manage showing more feedbacks
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-3/5 mx-auto mt-10">
      <div className="bg-blue-500 text-white text-center py-2 px-4 mb-4 rounded-lg">
        <h2 className="text-2xl font-bold">Student Feedback</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Render the first 5 feedbacks */}
        {feedbacks.slice(0, showAll ? feedbacks.length : 5).map((feedback, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg">{feedback}</p>
          </div>
        ))}
        
        {!showAll && feedbacks.length > 5 && (
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
  );
};

export default FeedbackBox;
