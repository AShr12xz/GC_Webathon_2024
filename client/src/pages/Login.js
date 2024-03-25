import { useState, useEffect, useRef } from "react";
import styles from "../styles/login.module.css";
import logo from "../assets/IITBBSlogo.png";

import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [type, setType] = useState("password");
  const [userForm, setUserForm] = useState({
    uniqueId: "",
    password: "",
  });
  const [, setCookies] = useCookies("token");
  const pgRef = useRef();
  const navigate = useNavigate();
  const control = useAnimationControls();
  const control2 = useAnimationControls();
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  useEffect(() => {
    control2.start({
      width: ["95%", "33.3333%"],
      transition: {
        times: [0, 1],
        duration: 0.4,
      },
    });
  }, [control2]);

  const updateUserFormField = (e) => {
    const { name, value } = e.target;
    const check = { ...userForm, [name]: value };
    if (check[e.target.name] !== "") {
      e.target.classList.add(`${styles.hascontent}`);
    } else {
      e.target.classList.remove(`${styles.hascontent}`);
    }
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const checkLogin = async (e) => {
    e.preventDefault();

    control2.start({
      width: `100vw`,
      transition: {
        duration: 0.4,
      },
    });
    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        userForm
      );
      setTimeout(() => {
        if (res.data.status === "success") {
          setCookies("token", res.data.token, { path: "/" });
          navigate(`/dashboard`);
        } else {
          const usr = document.getElementById("uniqueId");
          const pas = document.getElementById("password");
          usr.classList.remove(`${styles.hascontent}`);
          pas.classList.remove(`${styles.hascontent}`);
        }
      }, 500);
    } catch (error) {
      console.log(error.message);
      toast.error("Incorrect Roll No/ Emp Code or Password");
      control.start({
        scale: [15, 0],
        transition: {
          times: [0, 1],
          ease: "easeInOut",
          duration: 0.5,
        },
      });
    }
    setUserForm({
      uniqueId: "",
      password: "",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <div
        ref={pgRef}
        className="flex justify-center items-center w-screen h-screen bg-mygrey "
      >
        {/* <ToastContainer></ToastContainer> */}
        <div
          className="flex flex-col w-full h-screen p-0 sm:flex-row"
          // style={{ flexDirection: "column-reverse" }} // Reverses flex direction for smaller screens
        >
          <div className="flex justify-end w-full h-full">
            {/* left Side (Logo) */}
            <motion.div
              animate={control2} initial = {{width: "95%"}}
              className="sm:rotate(90deg) hidden absolute h-full sm:flex w-1/3 flex-col justify-center left-0 items-center bg-[#005ab3] z-[5]"
            >
              <div className="w-48 md:w-64 lg:w-72">
                <img className="object-contain" src={logo} alt="IIT BBS" />
              </div>
              <h1 className="md:text-2xl lg:text-4xl text-xl text-center px-2 text-white mt-10">
                Enterprise Resource Planning System
              </h1>
            </motion.div>

            {/* right Side (Login Form) */}
            <div className="flex justify-center items-center w-full sm:w-2/3">
              {/* <!-- component --> */}
              <link
                rel="stylesheet"
                href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
              />

              <div className="min-h-screen flex flex-col items-center justify-center w-full px-4">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md rounded-2xl">
                  <div className="font-medium self-center text-center text-xl sm:text-2xl uppercase text-gray-800">
                    Login To Your Account
                  </div>
                  <div className="relative mt-10 h-px bg-gray-300 px-2 ">
                    <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                      <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                        Login With Roll Number
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <form onSubmit={checkLogin}>
                      <div className="flex flex-col mb-6">
                        <label
                          for="email"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 px-2 md:px-0"
                        >
                          Roll No/ Faculty Code:
                        </label>
                        <div className="relative px-2 md:px-0">
                          <div className="inline-flex items-center justify-center absolute left-1 top-0 h-full w-10">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                          </div>

                          <input
                            type="text"
                            onChange={updateUserFormField}
                            value={userForm.uniqueId}
                            name="uniqueId"
                            id="uniqueId"
                            required
                            autoComplete="off"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Roll Number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mb-6">
                        <label
                          for="password"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 px-2 md:px-0 "
                        >
                          Password:
                        </label>

                        <div className="relative px-2 md:px-0 focus:border-5">
                          <div className="inline-flex items-center justify-center absolute left-1 top-0 h-full w-10 ">
                            <span>
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </span>
                          </div>

                          <input
                            type={type}
                            onChange={updateUserFormField}
                            value={userForm.password}
                            name="password"
                            id="password"
                            required
                            autoComplete="off"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Password"
                          />
                          {type === "text" && (
                            <span
                              className={`fa-solid fa-eye inline-flex items-center justify-center absolute right-1 top-0 h-full w-10`}
                              style={{ color: "#2264a6" }}
                              onClick={handleToggle}
                            ></span>
                          )}
                          {type === "password" && (
                            <span
                              className={`fa-solid fa-eye-slash inline-flex items-center justify-center absolute right-1 top-0 h-full w-10`}
                              style={{ color: "#2264a6" }}
                              onClick={handleToggle}
                            ></span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center mb-6 -mt-4">
                        <div className="flex ml-auto">
                          <Link to="/forgot">
                            <a
                              href="abc"
                              className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700 px-2 md:px-0"
                            >
                              Forgot Your Password?
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className="flex w-full px-2 md:px-0">
                        <button
                          type="submit"
                          id="login"
                          className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#005ab3] hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                        >
                          <span className="mr-2 uppercase">Login</span>

                          <span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex justify-center items-center mt-6">
                    <div className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </span>
                      <button
                        onClick={() => {
                          control2.start({
                            width: `100vw`,
                            transition: {
                              duration: 0.4,
                            },
                          });
                          setTimeout(() => {
                            navigate("/signup");
                          }, 1000);
                        }}
                      >
                        <span className="ml-2">
                          Don't have an account? Signup
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
export default Login;
