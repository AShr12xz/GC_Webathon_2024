import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";
import { baseurl } from "../../App.js";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    DOB: "",
    email: "",
    phone: "",
    role: "",
    uniqueId: "",
    password: "",
    semester: "",
    father: "",
    mother: "",
    address: "",
    country: "",
    Gender: "",
  });
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(baseurl + "/users/seeProfile", {
          rollno: user.uniqueId,
        });
        // console.log(res.data.data.user);
        if (res.data.data.user.name) {
          setProfile(res.data.data.user);
          console.log(profile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setProfile]);

  const { _id, __v, password, ...rest } = profile;
  const { name, DOB, email, phone, role, uniqueId } = rest;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };
  return (
    <section class="py-10 my-auto w-full h-full bg-mygrey rounded-lg overflow-x-hidden lg:overflow-aut shadow-lg p-2 border border-gray-200">
      <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white">
          {/* <!--  --> */}
          <div class="">
            <div>
              <h1 class="lg:text-3xl md:text-2xl text-center sm:text-xl xs:text-xl font-serif font-bold mt-2 mb-2 ">
                Student Profile
              </h1>

              <h2 class="text-grey text-center text-sm mb-4 dark:text-gray-500">
                Check Details
              </h2>
            </div>
            <form>
              {/* <!-- Cover Image --> */}
              <div class="w-full rounded-sm mt-2 bg-[url('')] bg-cover  rounded-xl bg-center bg-no-repeat items-center">
                {/* <!-- Profile Image --> */}
                <div class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20  p-3 rounded-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&usqp=CAU')] bg-cover bg-center bg-no-repeat ">
                  <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-2"></div>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-4 mt-6">
                  <label htmlFor="name" class="mb-2 text-gray-500">
                    Name
                  </label>
                  <h4 className="text-l font-semibold">{user.name}</h4>
                </div>
                <div class="w-full  mb-4 mt-6">
                  <label htmlFor="rollNumber" class=" mb-2 text-gray-500">
                    Roll No
                  </label>
                  <h4 className="text-l font-semibold">{user.uniqueId}</h4>
                </div>
              </div>

              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full">
                  <h3 class="text-gray-500 mb-2" htmlFor="gender">
                    Gender
                  </h3>
                  <h4 className="text-l font-semibold">Female</h4>
                </div>
                <div class="w-full">
                  <h3 class="text-gray-500 mb-2" htmlFor="dateOfBirth">
                    Date Of Birth
                  </h3>
                  <h4 className="text-l font-semibold">
                    {formatDate(user.DOB)}
                  </h4>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="email" class="mb-2 text-gray-500">
                    Email
                  </label>
                  <h4 className="text-l font-semibold">{user.email}</h4>
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="course" class="mb-2 text-gray-500">
                    Course
                  </label>
                  <h4 className="text-l font-semibold">B.Tech</h4>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="year" class="mb-2 text-gray-500">
                    Year
                  </label>
                  <h4 className="text-l font-semibold">2nd Year</h4>
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="semester" class=" mb-2 text-gray-500">
                    Semester
                  </label>
                  <h4 className="text-l font-semibold">4th semester</h4>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="fatherName" class="mb-2 text-gray-500">
                    Father's Name
                  </label>
                  <h4 className="text-l font-semibold">N.C. Sawhney</h4>
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="motherName" class=" mb-2 text-gray-500">
                    Mother's Name
                  </label>
                  <h4 className="text-l font-semibold">Riya Sawhney</h4>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="phoneNumber" class="mb-2 text-gray-500">
                    Phone No
                  </label>
                  <h4 className="text-l font-semibold">{user.phone}</h4>
                </div>
                <div class="w-full  mb-1 mt-3">
                  <label htmlFor="phoneNumber" class=" mb-2 text-gray-500">
                    Parent's Phone No
                  </label>
                  <h4 className="text-l font-semibold">9352433131</h4>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div class="w-full  mb-4 mt-3">
                  <label htmlFor="country" class="mb-2 text-gray-500">
                    Country
                  </label>
                  <h4 className="text-l font-semibold">India</h4>
                </div>
                <div class="w-full  mb-4 mt-3">
                  <label htmlFor="state" class=" mb-2 text-gray-500">
                    State
                  </label>

                  <h4 className="text-l font-semibold">Himachal Pradesh</h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
