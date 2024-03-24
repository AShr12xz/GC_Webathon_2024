import logo from "../assets/IITBBSlogo.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../store/UserContext";
import styles from "../styles/dashboard.module.css";

const Dashboard = ({ props }) => {
  const [cookies, , removeCookie] = useCookies("token");
  const { user, setUser } = useUserContext();
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
      const { status } = res.data;
      return status
        ? setUser(res.data.user)
        : (removeCookie("token"),
          console.log("cookie removed"),
          navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie, setUser]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-blue-200 p-1 gap-1">
      <div className="flex justify-between items-center w-full min-h-[11%] bg-black py-2 px-5 rounded">
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
              <div className="absolute shadow-lg top-16 right-4 w-40 h-max p-2 bg-white rounded-lg flex flex-col gap-2">
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
      <div className="flex w-full min-h-[88%] gap-1">
        <div className="flex flex-col justify-start items-center w-1/6 bg-blue-950 px-2 text-xl text-white gap-2 py-3 rounded">
          <button className="flex justify-between items-center h-12 w-full hover:bg-gray-300 hover:rounded-xl hover:text-black px-2">
            <div>Courses</div>
            <div className="fa-solid fa-book-open-reader text-2xl"></div>
          </button>
          <hr className="border-1 w-full" />
          <button
            onClick={() => {
              navigate("/attendance");
            }}
            className="flex justify-between items-center h-12 w-full hover:bg-gray-300 hover:rounded-xl hover:text-black px-2"
          >
            <div>Attendance</div>
            <div className="fa-solid fa-clipboard-user text-2xl"></div>
          </button>
          <hr className="border-1 w-full" />
          <button
            onClick={() => {
              navigate("/result");
            }}
            className="flex justify-between items-center h-12 w-full hover:bg-gray-300 hover:rounded-xl hover:text-black px-2"
          >
            <div>Result</div>
            <div className="fa-solid fa-square-poll-vertical text-2xl"></div>
          </button>
          <hr className="border-1 w-full" />
          <button
            onClick={() => {
              navigate("/feedback");
            }}
            className="flex justify-between items-center h-12 w-full hover:bg-gray-300 hover:rounded-xl hover:text-black px-2"
          >
            <div>Feedback</div>
            <div className="fa-regular fa-comment-dots text-2xl"></div>
          </button>
          <hr className="border-1 w-full" />
          <button
            onClick={() => {
              navigate("/survey");
            }}
            className="flex justify-between items-center h-12 w-full hover:bg-gray-300 hover:rounded-xl hover:text-black px-2"
          >
            <div>Survey</div>
            <div className="fa-solid fa-square-poll-vertical text-2xl"></div>
          </button>
          <hr className="border-1 w-full" />
        </div>
        <div
          className={`flex flex-col justify-start items-start w-5/6 bg-blue-950 overflow-y-scroll ${styles.content} rounded`}
        >
          {props}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
