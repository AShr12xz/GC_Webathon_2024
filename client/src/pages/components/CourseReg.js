import React, { useState } from "react";

const CourseReg = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const subjects = [
    {
      id: 1,
      name: "Subject 1",
      code: "SUB101",
      credits: 3,
      faculty: "Dr. John Doe",
    },
    {
      id: 2,
      name: "Subject 2",
      code: "SUB102",
      credits: 4,
      faculty: "Dr. Jane Smith",
    },
    {
      id: 3,
      name: "Subject 3",
      code: "SUB103",
      credits: 4,
      faculty: "Dr. MD Smith",
    },
    {
      id: 4,
      name: "Subject 4",
      code: "SUB104",
      credits: 4,
      faculty: "Dr. MD Smith",
    },
    {
      id: 5,
      name: "Subject 5",
      code: "SUB105",
      credits: 4,
      faculty: "Dr. MD Smith",
    },
    {
      id: 6,
      name: "Subject 6",
      code: "SUB106",
      credits: 4,
      faculty: "Dr. MD Smith",
    },
    {
      id: 7,
      name: "Subject 7",
      code: "SUB107",
      credits: 4,
      faculty: "Dr. MD Smith",
    },
  ];

  const handleCheckboxChange = (subjectId) => {
    const index = selectedSubjects.indexOf(subjectId);
    if (index === -1) {
      if (selectedSubjects.length < 6) {
        setSelectedSubjects([...selectedSubjects, subjectId]);
      }
    } else {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic
    console.log("Selected subjects:", selectedSubjects);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-2xl font-semibold mb-4 border p-4 bg-gray-50 shadow-lg ">
        Course Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Faculty Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subjects.map((subject) => (
                <tr key={subject.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.faculty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => handleCheckboxChange(subject.id)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="mt-4">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={
              selectedSubjects.length < 4 || selectedSubjects.length > 6
            }
          >
            Submit
          </button>
        </div> */}
        <div className="text-center mt-4">
          <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseReg;
