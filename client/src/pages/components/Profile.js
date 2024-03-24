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

  return (
    <div class=" bg-gradient-to-r from-sky-400 to-blue-500 w-full h-full">
      <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 md:gap-4 p-2">
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
              Student Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Name:</p>
                <p className="font-semibold">name</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Roll Number:</p>
                <p className="font-semibold">rollNumber</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Email:</p>
                <p className="font-semibold">email</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Course:</p>
                <p className="font-semibold">course</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Year:</p>
                <p className="font-semibold">year</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Semester:</p>
                <p className="font-semibold">semester</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Phone Number:</p>
                <p className="font-semibold">phoneNumber</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Date of Birth:</p>
                <p className="font-semibold">dateOfBirth</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Father's Name:</p>
                <p className="font-semibold">fatherName</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Mother's Name:</p>
                <p className="font-semibold">motherName</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Gender</p>
                <p className="font-semibold">male</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">State:</p>
                <p className="font-semibold">Jhumri talaiya</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Country:</p>
                <p className="font-semibold">India</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-gray-600">Year:</p>
                <p className="font-semibold">year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
