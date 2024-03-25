import React, { useState } from "react";

const GradeUpload = () => {
  // Sample data for courses, students, and Grade
  const [courses] = useState(["Course A", "Course B", "Course C"]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [students, setStudents] = useState([]);
  const [Grade, setGrade] = useState([]);

  // Function to fetch students based on selected course
  const fetchStudents = (course) => {
    // Sample logic to fetch students based on course
    // Replace with actual API call to fetch students
    const sampleStudents = [
      { id: 1, name: "Student 1", rollNumber: "001" },
      { id: 2, name: "Student 2", rollNumber: "002" },
      { id: 3, name: "Student 3", rollNumber: "003" },
    ];
    setStudents(sampleStudents);
  };

  // Function to handle checkbox change for marking Grade
  const handleGradeChange = (studentId) => {
    const updatedGrade = Grade.map((student) => {
      if (student.id === studentId) {
        return { ...student, present: !student.present };
      }
      return student;
    });
    setGrade(updatedGrade);
  };

  // Function to handle form submission
  const handleSubmitGrade = (e) => {
    e.preventDefault();
    // Implement logic to submit Grade
    console.log("Grade submitted:", Grade);
  };

  // Calculate summary of Grade
  const totalStudents = students.length;
  const totalPresent = Grade.filter((student) => student.present).length;
  const totalAbsent = totalStudents - totalPresent;

  return (
    <div className="w-full h-full bg-mygrey rounded-lg overflow-y-scroll shadow-lg p-6  border border-gray-200">
      <h2 className="text-xl md:text-4xl font-serif text-center mt-0 mb-5 shadow-lg p-3 ">
        Student Grade Portal
      </h2>
      <div className="container mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <div>
            <label htmlFor="course" className="block font-semibold">
              Select Course:
            </label>
            <select
              id="course"
              className="mt-1 block w-full rounded-sm p-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                fetchStudents(e.target.value);
              }}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          
        </div>

        {students.length > 0 && (
          <form onSubmit={handleSubmitGrade}>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-[10px] md:text-lg">
                  <tr>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Roll Number
                    </th>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y text-[10px] md:text-lg divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.rollNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          
                          onChange={() => handleGradeChange(student.id)}
                          className=" h-5 w-8 bg-gray-200 rounded-sm border-2 border-black text-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Grade
              </button>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
};

export default GradeUpload;
