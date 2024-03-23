import React from 'react';

const AttendanceDetails = () => {
  // Hardcoded attendance percentages for 8 subjects
  const attendance = {
    mathematics: 85,
    science: 90,
    history: 78,
    english: 92,
    computerScience: 88,
    physics: 80,
    chemistry: 85,
    biology: 15,
  };

  return (
    <div className="w-full m-8 mx-auto px-4  md:px-32  bg-red-100 rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">Subject-wise Attendance</h2>
      <div>
        {Object.entries(attendance).map(([subject, percentage]) => (
          <div key={subject} className="flex items-center mb-4">
            <p className="w-1/3 text-gray-600 font-semibold">{subject}:</p>
            <div className="flex flex-col justify-center items-center w-2/3">
              <div className="w-full bg-gray-300 h-4 rounded-full mb-2">
                <div className="bg-green-500 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
              </div>
              <p>{percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceDetails;
