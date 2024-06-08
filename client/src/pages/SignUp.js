import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import logo from "../assets/IITBBSlogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../App.js";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    DOB: "",
    password: "",
    role: "",
    uniqueId: "",
    code: "",
    phone: "",
  });
  const [isfaculty, setIsfaculty] = useState(false);
  const navigate = useNavigate();
  const control = useAnimationControls();
  const control2 = useAnimationControls();
  const [type, setType] = useState("password");

  useEffect(() => {
    control2.start({
      width: ["100%", "33.3333%"],
      transition: {
        times: [0, 1],
        duration: 0.4,
      },
    });
  }, [control2]);
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const checkSignUp = async (e) => {
    e.preventDefault();
    if (isfaculty) {
      form.role = "faculty";
    } else {
      form.role = "student";
    }
    control.start({
      scale: [0, 15],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.4,
      },
    });

    try {
      const res = await axios.post(baseurl + "/users/signup", form);
      if (res.data.status === "success") {
        navigate(`/dashboard`);
      } else {
        control.start({
          scale: [15, 0],
          transition: {
            times: [0, 1],
            ease: "easeInOut",
            duration: 0.4,
          },
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    // <!-- component -->
    <AnimatePresence mode="wait">
      <div className="min-w-screen min-h-screen bg-mygrey flex justify-start">
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
          defer
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

        <style>
          @import
          url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
        </style>
        <div className="w-full sm:w-2/3 flex items-center justify-center">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl max-w-xl overflow-hidden">
            <form onSubmit={checkSignUp} className="w-full p-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">SIGN UP</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-3">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold px-1"
                    >
                      Full Name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={updateFormField}
                        value={form.name}
                        autoComplete="off"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-3">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold px-1"
                    >
                      Role
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <select
                        name="role"
                        id="role"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        onChange={(event) => {
                          if (event.target.value === "faculty") {
                            setIsfaculty(true);
                          } else {
                            setIsfaculty(false);
                          }
                        }}
                      >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={updateFormField}
                        value={form.email}
                        autoComplete="off"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="20AG06***@iitbbs.ac.in"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3">
                    <label
                      htmlFor="number"
                      className="text-xs font-semibold px-1"
                    >
                      Roll No/Faculty Code
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        id="uniqueId"
                        name="uniqueId"
                        onChange={updateFormField}
                        value={form.uniqueId}
                        autoComplete="off"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="AG456788"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-3">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold px-1"
                      >
                        Date Of Birth
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="date"
                          id="DOB"
                          name="DOB"
                          onChange={updateFormField}
                          value={form.DOB}
                          autoComplete="off"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          //placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                      <label
                        htmlFor="number"
                        className="text-xs font-semibold px-1"
                      >
                        Phone No
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="phone"
                          id="phone"
                          name="phone"
                          onChange={updateFormField}
                          value={form.phone}
                          autoComplete="off"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="91-"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {isfaculty ? (
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-3">
                      <label
                        htmlFor="number"
                        className="text-xs font-semibold px-1"
                      >
                        Code
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="code"
                          name="code"
                          onChange={updateFormField}
                          value={form.code}
                          autoComplete="off"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold px-1"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        onChange={updateFormField}
                        value={form.password}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
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
                </div>
                <div className="mb-4">
                  <button
                    onClick={() => {
                      control2.start({
                        width: `100vw`,
                        transition: {
                          duration: 0.4,
                        },
                      });
                      setTimeout(() => {
                        navigate("/login");
                      }, 1000);
                    }}
                  >
                    <span>
                      Already have an account?{" "}
                      <span className="text-[#005ab3]">Login</span>
                    </span>
                  </button>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="btn block w-full max-w-xs mx-auto bg-[#005ab3] hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <motion.div
          animate={control2}
          initial={{ width: "100%" }}
          className="sm:rotate(90deg) hidden h-screen absolute sm:flex w-1/3 flex-col justify-center right-0 top-0 items-center bg-[#005ab3] z-[50]"
        >
          <div className="w-48 md:w-64 lg:w-72">
            <img className="object-contain" src={logo} alt="IIT BBS" />
          </div>
          <h1 className="md:text-2xl lg:text-4xl text-xl text-center px-2 text-white mt-10">
            Enterprise Resource Planning System
          </h1>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SignUp;
