import logo from "../assets/IITBBSlogo.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../store/UserContext";
import styles from "../styles/dashboard.module.css";
import { motion, useAnimationControls } from "framer-motion";

const Dashboard = ({ props }) => {
  const [cookies, , removeCookie] = useCookies("token");
  const { user, setUser } = useUserContext();
  const control = useAnimationControls();
  const pgRef = useRef();
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
  const handleToggle = () => {
    const sidebar = document.getElementById("sidebar");

    if (sidebar.classList.contains(styles.hide)) {
      control.start({
        x: ["-300px", "0px"],
        opacity: [0, 1],
        transition: {
          times: [0, 1],
          duration: 0.4,
        },
      });
      sidebar.classList.remove(`${styles.hide}`);
    } else {
      control.start({
        x: ["0px", "-300px"],
        opacity: [1, 0],
        transition: {
          times: [0, 1],
          duration: 0.4,
        },
      });
      sidebar.classList.add(`${styles.hide}`);
    }
  };

  return (
    <div
      ref={pgRef}
      className={`flex flex-col justify-center items-center bg-gray-400 p-1 gap-1 ${styles.pg}`}
    >
      <div className="flex justify-between items-center w-full min-h-[11%] bg-gradient-to-r from-black via-black to-blue-950 py-2 px-5 rounded font-serif">
        <div className="flex justify-end items-center gap-2">
          <button onClick={handleToggle}>
            <span
              className={`fa-solid fa-bars text-white ${styles.toggle}`}
            ></span>
          </button>
          <img
            className={`h-16 w-16 object-contain ${styles.gayab}`}
            src={logo}
            alt="IIT BBS"
          />
          <p className={`text-white sm:text-xl ${styles.gayab}`}>
            IIT Bhubaneswar
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-white sm:text-xl flex">
            <span className={` ${styles.gayab}`}>Welcome to ERP, &nbsp;</span>
            {user.name}
          </p>
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
              <div className="absolute shadow-lg top-16 right-4 w-40 h-max p-2 bg-white rounded-lg flex flex-col gap-2 z-[6]">
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
      <div className="flex w-full min-h-[88%] gap-1 ">
        {user.role === "student" && (
          <motion.div
            id="sidebar"
            animate={control}
            className={`flex flex-col justify-start items-center w-1/5 bg-gradient-to-r from-black via-black to-blue-950 px-2 text-white text-xl gap-2 py-3 rounded font-mono font-black ${styles.sidebar} origin-left ${styles.hide}`}
          >
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className="flex flex-col w-full"
            >
              <div id="accordion-collapse-heading-1">
                <button
                  type="button"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-1"
                  className="flex justify-between items-center !text-white h-10 w-full hover:bg-gray-100 hover:!text-black hover:rounded-xl px-1 sm: px-3"
                >
                  <span className={`${styles.sidefont}`}>Courses</span>
                  <span
                    className={`fa-solid fa-book-open-reader ${styles.sideicon}`}
                  ></span>
                </button>
              </div>
              <div
                id="accordion-collapse-body-1"
                className="hidden text-white flex flex-col w-full text-base"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <button
                  onClick={() => {
                    navigate("/courseregister");
                  }}
                  className="flex justify-between items-center px-3 ml-5 h-10 hover:bg-gray-100 hover:text-black hover:rounded-xl "
                >
                  <div>Registration</div>
                  <div className="fa-regular fa-address-card text-xl"></div>
                </button>
                <button
                  onClick={() => {
                    navigate("/mycourses");
                  }}
                  className="flex justify-between items-center px-3 ml-5 h-10 hover:bg-gray-100 hover:text-black hover:rounded-xl "
                >
                  <div>My Courses</div>
                  <div className="fa-solid fa-book-open-reader text-2xl"></div>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                navigate("/attendance");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Attendance</div>
              <div
                className={`fa-solid fa-clipboard-user ${styles.sideicon}`}
              ></div>
            </button>

            <button
              onClick={() => {
                navigate("/result");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Result</div>
              <div
                className={`fa-solid fa-square-poll-vertical ${styles.sideicon}`}
              ></div>
            </button>

            <button
              onClick={() => {
                navigate("/feedback");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Feedback</div>
              <div
                className={`fa-regular fa-comment-dots ${styles.sideicon}`}
              ></div>
            </button>

            <button
              onClick={() => {
                navigate("/survey");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}> Survey</div>
              <div
                className={`fa-solid fa-square-poll-vertical ${styles.sideicon}`}
              ></div>
            </button>
            <button
              onClick={() => {
                navigate("/survey");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Assignment</div>
              <div
                className={`fa-solid fa-list-check ${styles.sideicon}`}
              ></div>
            </button>
          </motion.div>
        )}
        {user.role === "faculty" && (
          <motion.div
            id="sidebar"
            animate={control}
            className={`flex flex-col justify-start items-center w-1/5 bg-gradient-to-r from-black via-black to-blue-950 px-2 text-white text-xl gap-2 py-3 rounded font-mono font-black ${styles.sidebar} origin-left ${styles.hide}`}
          >

            <button
              onClick={() => {
                navigate("/material");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Material</div>
              <div
                className={`fa-solid fa-clipboard-user ${styles.sideicon}`}
              ></div>
            </button>

            <button
              onClick={() => {
                navigate("/facultyfeedback");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}>Feedback</div>
              <div
                className={`fa-regular fa-comment-dots ${styles.sideicon}`}
              ></div>
            </button>

            <button
              onClick={() => {
                navigate("/survey");
              }}
              className="flex justify-between items-center h-10 w-full hover:bg-gray-100 hover:text-black hover:rounded-xl px-3"
            >
              <div className={`${styles.sidefont}`}> Survey</div>
              <div
                className={`fa-solid fa-square-poll-vertical ${styles.sideicon}`}
              ></div>
            </button>
          </motion.div>
        )}
        <div
          onClick={() => {
            setIsOpen(false);
            if (pgRef.current.clientWidth < 600) {
              if (
                !document
                  .getElementById("sidebar")
                  .classList.contains(styles.hide)
              ) {
                control.start({
                  x: ["0px", "-400px"],
                  opacity: [1, 0],
                  transition: {
                    times: [0, 1],
                    duration: 0.4,
                  },
                });
                document
                  .getElementById("sidebar")
                  .classList.add(`${styles.hide}`);
              }
            }
          }}
          id="content"
          className={`flex flex-col justify-start items-start bg-blue-950 p-2 ${styles.content} rounded`}
        >
          {props}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
