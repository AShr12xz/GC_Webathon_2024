import React from "react";

const Profile = () => {
  //   const {
  //     name,
  //     rollNumber,
  //     email,
  //     course,
  //     year,
  //     semester,
  //     phoneNumber,
  //     dateOfBirth,
  //     fatherName,
  //     motherName,
  //   } = student;
  const details = [
    { label: "Name:", value: "John Doe" },
    { label: "Roll Number:", value: "22EE01002" },
    { label: "Email:", value: "john.doe@example.com" },
    { label: "Course:", value: "Engineering" },
    { label: "Year:", value: "4th" },
    { label: "Semester:", value: "8th" },
    { label: "Phone Number:", value: "+1234567890" },
    { label: "Date of Birth:", value: "1995-05-15" },
    { label: "Father's Name:", value: "Michael Doe" },
    { label: "Mother's Name:", value: "Jennifer Doe" },
    { label: "Gender:", value: "Male" },
    { label: "State:", value: "California" },
    { label: "Country:", value: "USA" },
    { label: "Year:", value: "2024" },
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column - Image */}
        <div className="bg-white shadow rounded-3xl p-6">
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/94.jpg"
              className="w-32 h-32 bg-gray-300 rounded-full mb-4"
              alt="Avatar"
            />
            <h1 className="text-xl font-bold">Name</h1>
            <p className="text-gray-700">22EE01002</p>
          </div>
          <hr className="my-2 border-t border-gray-300" />
        </div>

        {/* Right Column - Details Card */}
        <div className="bg-white shadow rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Student Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Replace placeholder values with actual data */}
            {details.map((detail, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 p-4"
              >
                <p className="text-gray-600">{detail.label}</p>
                <p className="font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
