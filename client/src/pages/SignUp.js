import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import logo from "../assets/IITBBSlogo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  useEffect(() => {
    control.start({
      scale: [15, 0],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.4,
      },
    });
  }, [control]);

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
      const res = await axios.post("http://localhost:3000/users/signup", form);
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
    <div>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
        defer
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>
      <form onSubmit={checkSignUp}>
        <div class="min-w-screen min-h-screen bg-mygrey flex items-center justify-center px-5 py-5">
          <div
            class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div class="md:flex w-full">
              <div class="hidden md:block w-1/2 bg-[#005ab3] py-10 px-10">
                <div className="">
                  <div className="w-3/4">
                    <div className="mt-14 pt-14 ">
                      <img
                        className="object-contain ml-10 pr-1 "
                        src={logo}
                        alt="IIT BBS"
                      />
                    </div>
                    <h2 className="md:text-2xl text-xl px-2 text-white mt-3 ml-0"></h2>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 py-8 px-5 md:px-10">
                <div class="text-center mb-10">
                  <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-3">
                      <label htmlFor="name" class="text-xs font-semibold px-1">
                        Full Name
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={updateFormField}
                          value={form.name}
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div class="w-1/2 px-3 mb-3">
                      <label htmlFor="name" class="text-xs font-semibold px-1">
                        Role
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <select
                          name="role"
                          id="role"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-3">
                      <label htmlFor="email" class="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          onChange={updateFormField}
                          value={form.email}
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="20AG06***@iitbbs.ac.in"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-3">
                      <label
                        htmlFor="number"
                        class="text-xs font-semibold px-1"
                      >
                        Roll No/Faculty Code
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="uniqueId"
                          name="uniqueId"
                          onChange={updateFormField}
                          value={form.uniqueId}
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="AG456788"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-3">
                        <label
                          htmlFor="name"
                          class="text-xs font-semibold px-1"
                        >
                          Date Of Birth
                        </label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="date"
                            id="DOB"
                            name="DOB"
                            onChange={updateFormField}
                            value={form.DOB}
                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            //placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div class="w-1/2 px-3 mb-3">
                        <label
                          htmlFor="number"
                          class="text-xs font-semibold px-1"
                        >
                          Phone No
                        </label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="phone"
                            id="phone"
                            name="phone"
                            onChange={updateFormField}
                            value={form.phone}
                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="91-"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {isfaculty ? (
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-3">
                        <label
                          htmlFor="number"
                          class="text-xs font-semibold px-1"
                        >
                          Code
                        </label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="text"
                            id="code"
                            name="code"
                            onChange={updateFormField}
                            value={form.code}
                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-3">
                      <label htmlFor="name" class="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={updateFormField}
                          value={form.password}
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Link
                      onClick={() => {
                        control.start({
                          scale: 15,
                          transition: {
                            ease: "easeInOut",
                            duration: 0.6,
                          },
                        });
                      }}
                      to="/login"
                    >
                      <span>
                        Already have an account?{" "}
                        <span className="text-[#005ab3]">Login</span>
                      </span>
                    </Link>
                  </div>

                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <button
                        type="submit"
                        class="btn block w-full max-w-xs mx-auto bg-[#005ab3] hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="#"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src={logo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
