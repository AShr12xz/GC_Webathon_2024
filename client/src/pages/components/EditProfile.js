import React from "react";
import { useState } from "react";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    rollNumber: "",
    email: "",
    course: "",
    year: "",
    semester: "",
    phoneNumber: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",
    gender: "",
    state: "",
    country: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit profile changes
    console.log("Profile updated:", profile);
  };

  return (
    <div>
      <div class="w-full h-full">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 md:gap-24 px-4">
            <div class="col-span-4 sm:col-span-3">
              {/* Image */}
              <div class="bg-white shadow rounded-3xl p-6 md:ml-8 ">
                <div class="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="Avatar"
                  />
                  <h1 class="text-xl font-bold">Name</h1>
                  <p class="text-gray-700">22EE01002</p>
                </div>
                <hr class="my-2 border-t border-gray-300" />
              </div>
            </div>

            {/* Details Card */}
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow w-full rounded-3xl p-6">
                <h2 className="flex justify-center text-xl font-semibold mb-4">
                  Edit-Profile
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2 "
                >
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="name" className="text-gray-600">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="rollNumber" className="text-gray-600">
                      Roll Number:
                    </label>
                    <input
                      type="text"
                      id="rollNumber"
                      name="rollNumber"
                      value={profile.rollNumber}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="email" className="text-gray-600">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="course" className="text-gray-600">
                      Course:
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={profile.course}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="year" className="text-gray-600">
                      Year:
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={profile.year}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="semester" className="text-gray-600">
                      Semester:
                    </label>
                    <input
                      type="text"
                      id="semester"
                      name="semester"
                      value={profile.semester}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="phoneNumber" className="text-gray-600">
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={profile.phoneNumber}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="dateOfBirth" className="text-gray-600">
                      Date of Birth:
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={profile.dateOfBirth}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="fatherName" className="text-gray-600">
                      Father's Name:
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={profile.fatherName}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="motherName" className="text-gray-600">
                      Mother's Name:
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={profile.motherName}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="gender" className="text-gray-600">
                      Gender:
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={profile.gender}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="state" className="text-gray-600">
                      State:
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={profile.state}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="country" className="text-gray-600">
                      Country:
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={profile.country}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <label htmlFor="year" className="text-gray-600">
                      Year:
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={profile.year}
                      onChange={handleInputChange}
                      className="block w-full mt-1 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
