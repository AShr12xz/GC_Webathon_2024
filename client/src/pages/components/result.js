import React from 'react';

const Result = () => {
  // Hardcoded grades for 8 subjects
  const grades = {
    mathematics: 'Ex',
    science: 'B',
    history: 'B',
    english: 'A',
    computerScience: 'A',
    physics: 'B',
    chemistry: 'A',
    biology: 'C',
  };

  // Hardcoded SGPA and CGPA
  const sgpa = 8.5;
  const cgpa = 8.2;

  return (
    <div className="w-3/5 mx-auto mt-8 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">Subject-wise Grades</h2>
      <div>
        {Object.entries(grades).map(([subject, grade]) => (
          <div key={subject} className="flex justify-between items-center mb-2">
            <p className="text-gray-600 font-semibold">{subject}:</p>
            <p>{grade}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-gray-300 pt-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-600 font-semibold">SGPA:</div>
          <div className="h-0.5 w-16 bg-gray-300"></div>
          <div>{sgpa}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600 font-semibold">CGPA:</div>
          <div className="h-0.5 w-16 bg-gray-300"></div>
          <div>{cgpa}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
