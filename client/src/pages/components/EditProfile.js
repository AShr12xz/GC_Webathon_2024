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
    <section class="py-10 my-auto w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg p-2 border border-gray-200">
      <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white">
          {/* <!--  --> */}
          <div class="">
            <div>
              <h1 class="lg:text-3xl md:text-2xl text-center sm:text-xl xs:text-xl font-serif font-bold mb-2 ">
                Edit Profile
              </h1>

              <h2 class="text-grey text-center text-sm mb-4 dark:text-gray-500">
                Update Details
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              {/* <!-- Cover Image --> */}
              <div class="w-full rounded-sm mt-2 bg-[url('')] bg-cover  rounded-xl bg-center bg-no-repeat items-center">
                {/* <!-- Profile Image --> */}
                <div class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20  p-3 rounded-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJQp8ndvEkIa-u1rMgJxVc7BBsR11uSLHGA&usqp=CAU')] bg-cover bg-center bg-no-repeat ">
                  <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-2"></div>
                </div>
                <div class="flex justify-end">
                  {/* <!--  --> */}
                  <input
                    type="file"
                    name="profile"
                    id="upload_cover"
                    hidden
                    required
                  />

                  <div class="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                    <label
                      for="upload_cover"
                      class="inline-flex items-center gap-1 cursor-pointer "
                    >
                      Image Upload
                      <svg
                        data-slot="icon"
                        class="w-6 h-5 text-blue-700"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <h2 class="text-center mt-1 font-semibold dark:text-gray-500">
                Upload Profile and Image
              </h2>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-4 mt-6">
                  <label htmlFor="name" class="mb-2 text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Name"
                  />
                </div>
                <div class="w-full  mb-4 mt-6">
                  <label htmlFor="rollNumber" class=" mb-2 text-gray-500">
                    Roll No
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={profile.rollNumber}
                    onChange={handleInputChange}
                    class=" mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Roll Number"
                  />
                </div>
              </div>

              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full">
                  <h3 class="text-gray-500 mb-2" htmlFor="gender">
                    Gender
                  </h3>
                  <select
                    class="w-full border-2 rounded-lg p-4 pl-2 pr-2 border-gray-600 bg-white"
                    id="gender"
                    name="gender"
                    value={profile.gender}
                    onChange={handleInputChange}
                  >
                    <option disabled value="">
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="w-full">
                  <h3 class="text-gray-500 mb-2" htmlFor="dateOfBirth">
                    Date Of Birth
                  </h3>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={handleInputChange}
                    class="text-grey p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                  />
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="email" class="mb-2 text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Email"
                  />
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="course" class="mb-2 text-gray-500">
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={profile.course}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg border-gray-600 bg-white"
                    placeholder="Course"
                  />
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="year" class="mb-2 text-gray-500">
                    Year
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={profile.year}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Year"
                  />
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="semester" class=" mb-2 text-gray-500">
                    Semester
                  </label>
                  <input
                    type="text"
                    id="semester"
                    name="semester"
                    value={profile.semester}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg border-gray-600 bg-white"
                    placeholder="Semester"
                  />
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="fatherName" class="mb-2 text-gray-500">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={profile.fatherName}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Father's Name"
                  />
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="motherName" class=" mb-2 text-gray-500">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    value={profile.motherName}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg border-gray-600 bg-white"
                    placeholder="Mother's Name"
                  />
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="phoneNumber" class="mb-2 text-gray-500">
                    Phone No
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Phone No"
                  />
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="phoneNumber" class=" mb-2 text-gray-500">
                    Parent's Phone No
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg border-gray-600 bg-white"
                    placeholder="Parent's Phone No"
                  />
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-4 mt-3">
                  <label htmlFor="country" class="mb-2 text-gray-500">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={profile.country}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg  border-gray-600 bg-white"
                    placeholder="Country"
                  />
                </div>
                <div class="w-full  mb-4 mt-3">
                  <label htmlFor="state" class=" mb-2 text-gray-500">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={profile.state}
                    onChange={handleInputChange}
                    class="mt-2 p-4 w-full border-2 rounded-lg border-gray-600 bg-white"
                    placeholder="State"
                  />
                </div>
              </div>
              <div class="w-full rounded-lg bg-blue-800 mt-4 text-white text-lg font-semibold">
                <button type="submit" class="w-full p-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
