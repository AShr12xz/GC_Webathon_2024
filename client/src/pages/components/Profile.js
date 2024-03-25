import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../store/UserContext";

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
        const res = await axios.post("http://localhost:3000/users/seeProfile", {
          rollno: user.uniqueId,
        });
        // console.log(res.data.data.user);
        if (res.data.data.user.name) {
          setProfile(res.data.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, setProfile]);

  const { _id, __v, password, ...rest } = profile;

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
            <h1 className="text-xl font-bold">{profile.name}</h1>
            <p className="text-gray-700">{profile.uniqueId}</p>
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
            {Object.entries(rest).map(([key, value], index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 p-4"
              >
                <p className="text-gray-600">{key}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
