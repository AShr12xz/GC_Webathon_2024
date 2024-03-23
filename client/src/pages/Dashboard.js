import logo from "../assets/IITBBSlogo.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({props}) => {
  const [cookies, , removeCookie] = useCookies("token");
    const nav = useNavigate();
//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         return nav("/login");
//       }
//       const { data } = await axios.post(
//         "http://localhost:3000/user/login",
//         { token: cookies.token }
//         // { withCredentials: true }
//       );
//       // console.log(data);
//       const { status } = data;
//       return (status==="success")
//         ? {}
//         : (removeCookie("token"), console.log("cookie removed"), nav("/login"));
//     };
//     verifyCookie();
//   }, [cookies, nav, removeCookie]);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-blue-200 p-1 gap-1">
      <div className="flex justify-between items-center w-full h-20 bg-black p-2">
        <div className="flex justify-end items-center gap-2">
          <img className="h-16 w-16 object-contain" src={logo} alt="IIT BBS" />
          <p className="text-white text-2xl">IIT Bhubaneswar</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-xl">Welcome to ERP, Akkad Bakkad </p>
          <div>
            <button class="relative group transition-all duration-200 text-white focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center gap-2 rounded-lg">
              <span className={`fa fa-user`}></span>
              <div class="absolute shadow-lg -bottom-40 right-0 w-40 h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
                <span class="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
                  <p>View Profile</p>
                  <p className="fa fa-badge"></p>
                </span>
                <span class="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
                  <p>Edit Profile</p>
                  <p className="fa fa-edit"></p>
                </span>
                <span class="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
                  <p>Logout</p>
                  <p className="fa fa-sign-out"></p>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full gap-1">
        <div className="flex flex-col justify-start items-center w-1/5 h-full bg-blue-900 divide-y-2 px-3 text-xl text-white">
          <button className="flex justify-between items-center h-20 w-full">
            <div>Courses</div>
          </button>
          <button className="flex justify-between items-center h-20 w-full">
            <div>Attendance</div>
            <div class="fa-solid fa-clipboard-user"></div>
          </button>
          <button className="flex justify-between items-center h-20 w-full">
            <div>Result</div>
            <div class="fa-solid fa-square-poll-vertical"></div>
          </button>
          <button className="flex justify-between items-center h-20 w-full">
            <div>Feedback</div>
            <div class="fa-regular fa-comment-dots"></div>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start w-4/5 h-full bg-blue-900 ">
          {props}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
