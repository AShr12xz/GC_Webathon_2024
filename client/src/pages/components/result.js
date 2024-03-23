import React from "react";

const Result = () => {
  // Grades structured as an array of objects
  const grades = [
    { subjectName: "Mathematics", subjectCode: "MAT", grade: "Ex" },
    { subjectName: "Science", subjectCode: "SCI", grade: "B" },
    { subjectName: "History", subjectCode: "HIS", grade: "B" },
    { subjectName: "English", subjectCode: "ENG", grade: "A" },
    { subjectName: "Computer Science", subjectCode: "CSE", grade: "A" },
    { subjectName: "Physics", subjectCode: "PHY", grade: "B" },
    { subjectName: "Chemistry", subjectCode: "CHE", grade: "A" },
    { subjectName: "Biology", subjectCode: "BIO", grade: "C" },
  ];

  return (
    <div className="w-3/5 mx-auto mt-8 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Subject-wise Grades
      </h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Subject Name</th>
            <th className="px-4 py-2">Subject Code</th>
            <th className="px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{grade.subjectName}</td>
              <td className="border px-4 py-2">{grade.subjectCode}</td>
              <td className="border px-4 py-2">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
