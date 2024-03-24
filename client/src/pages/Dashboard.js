import logo from "../assets/IITBBSlogo.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ props }) => {
  const [cookies, , removeCookie] = useCookies("token");
  const[user, setUser]= useState("")
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      const verifyCookie = async () => {
        if (!cookies.token) {
          return navigate("/login");
        }
        const res = await axios.post(
          "http://localhost:3000/users/auth",
          { token: cookies.token }
          // { withCredentials: true }
        );
        console.log(res);
        const { status } = res.data;
        return (status)
          ? setUser(res.data.user)
          : (removeCookie("token"), console.log("cookie removed"), navigate("/login"));
      };
      verifyCookie();
    }, [cookies, navigate, removeCookie]);

    

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-blue-200 p-1 gap-1">
      <div className="flex justify-between items-center w-full h-20 bg-black py-2 px-5">
        <div className="flex justify-end items-center gap-2">
          <img className="h-16 w-16 object-contain" src={logo} alt="IIT BBS" />
          <p className="text-white text-2xl">IIT Bhubaneswar</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-white text-l">Welcome to ERP, {user.name} </p>
          <div>
            <button
              className="w-10 h-10 border-2 rounded-full"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="fa fa-user text-l text-white"></span>
            </button>
            {isOpen && (
              <div class="absolute shadow-lg top-16 right-4 w-40 h-max p-2 bg-white rounded-lg flex flex-col gap-2">
                <button
                  onClick={() => {
                    console.log("abcdcd");
                    navigate("/profile");
                  }}
                  className="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black"
                >
                  <div>View Profile</div>
                  <div className="fa fa-badge"></div>
                </button>
                <button
                  onClick={() => {
                    navigate("/editprofile");
                  }}
                  className="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black"
                >
                  <div>Edit Profile</div>
                  <div className="fa fa-edit"></div>
                </button>
                <button
                  onClick={() => {
                    removeCookie("token");
                    navigate("/login");
                  }}
                  className="flex flex-row justify-between items-center hover:bg-zinc-100 p-2 rounded-lg text-black"
                >
                  <div>Logout</div>
                  <div className="fa fa-sign-out"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full h-full gap-1">
        <div className="flex flex-col justify-start items-center w-1/5 h-full bg-blue-900 divide-y-2 px-3 text-xl text-white">
          <button className="flex justify-between items-center h-20 w-full">
            <div>Courses</div>
          </button>
          <button
            onClick={() => {
              navigate("/attendance");
            }}
            className="flex justify-between items-center h-20 w-full"
          >
            <div>Attendance</div>
            <div class="fa-solid fa-clipboard-user"></div>
          </button>
          <button
            onClick={() => {
              navigate("/result");
            }}
            className="flex justify-between items-center h-20 w-full"
          >
            <div>Result</div>
            <div class="fa-solid fa-square-poll-vertical"></div>
          </button>
          <button
            onClick={() => {
              navigate("/feedback");
            }}
            className="flex justify-between items-center h-20 w-full"
          >
            <div>Feedback</div>
            <div class="fa-regular fa-comment-dots"></div>
          </button>
          <button
            onClick={() => {
              navigate("/survey");
            }}
            className="flex justify-between items-center h-20 w-full"
          >
            <div>Survey</div>
            <div class="fa-regular fa-comment-dots"></div>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start w-4/5 h-full bg-blue-900 ">
          {props }
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
