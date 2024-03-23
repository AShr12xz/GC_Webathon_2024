import React from 'react';

const RegisteredCourses = () => {
  
  const courses = [
    { subjectName: 'Introduction to Computer Science', subjectCode: 'CSE101', faculty: 'Dr. Smith', credits: 3 },
    { subjectName: 'Calculus', subjectCode: 'MAT102', faculty: 'Prof. Johnson', credits: 4 },
    { subjectName: 'Physics Fundamentals', subjectCode: 'PHY103', faculty: 'Dr. Brown', credits: 3 },
    { subjectName: 'Biology Basics', subjectCode: 'BIO104', faculty: 'Prof. Davis', credits: 3 },
  ];

  return (
    <div className="w-3/4 mx-auto mt-16 bg-white rounded-3xl overflow-hidden shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">Registered Courses</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Subject Name</th>
            <th className="px-4 py-2">Subject Code</th>
            <th className="px-4 py-2">Faculty</th>
            <th className="px-4 py-2">Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{course.subjectName}</td>
              <td className="border px-4 py-2">{course.subjectCode}</td>
              <td className="border px-4 py-2">{course.faculty}</td>
              <td className="border px-4 py-2">{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredCourses;
