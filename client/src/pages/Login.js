import { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import logo from "../assets/IITBBSlogo.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [type, setType] = useState("password");
  const [userForm, setUserForm] = useState({
    uniqueId: "",
    password: "",
  });
  const [cookies, setCookies] = useCookies("token");
  const navigate = useNavigate();
  const control = useAnimationControls();
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

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

  const routeVariants = {
    initial: {
      y: "0vh",
      opacity: 0,
    },
    show: {
      opacity: [0.8, 1],
      y: "0vh",
      transition: {
        times: [0, 1],
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleX: [1, 1],
      scaleY: [1, 600 / 480],
      opacity: [1, 1],
      transition: {
        delay: 0.2,
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

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
    control.start({
      scale: [0, 15],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    });
    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        userForm
      );
      setTimeout(() => {
        if (res.data.status === "success") {
          // setTimeout(() => {}, 1000);
          setCookies("token", res.data.token, { path: "/" });
          navigate(`/dashboard`);
        } else {
          const usr = document.getElementById("uniqueId");
          const pas = document.getElementById("password");
          usr.classList.remove(`${styles.hascontent}`);
          pas.classList.remove(`${styles.hascontent}`);
        }
      }, 2000);
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
    <div className="flex justify-center items-center w-screen h-screen bg-amber-100">
      <ToastContainer></ToastContainer>
      <motion.div
        variants={routeVariants}
        initial="show"
        exit="exit"
        className="w-[250px] h-[425px] sm:w-[560px] sm:h-[480px] flex justify-start m-auto items-center border-2 border-solid border-black p-5 sm:p-2 rounded-2xl bg-white overflow-hidden gap-0 sm:gap-2"
      >
        <motion.div
          animate={control}
          className={`bg-[#005ab3] absolute top-[-80%] sm:top-[40%] sm:right-[-50%] z-[5] h-[200px] w-[200px]`}
        ></motion.div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 h-full p-0 sm:p-5 overflow-hidden">
          <form
            onSubmit={checkLogin}
            className="flex flex-col justify-center items-center w-full h-full p-0 overflow-hidden"
          >
            <div className="flex flex-col justify-center items-center w-full ">
              <div
                className={`z-[4] m-5 flex justify-center items-center float-left h-1/5 w-full relative `}
              >
                <input
                  className={`${styles.texteffect} focus:border-none focus:outline-none w-full`}
                  type="text"
                  placeholder=""
                  onChange={updateUserFormField}
                  value={userForm.uniqueId}
                  name="uniqueId"
                  id="uniqueId"
                  required
                  autoComplete="off"
                />
                <label>Roll No/ Emp Code</label>
                <span className={styles.focusborder}></span>
              </div>
              <div
                className={`z-[3] m-5 flex justify-center items-center float-left h-1/5 w-full relative`}
              >
                <input
                  className={`${styles.texteffect} focus:border-none focus:outline-none w-full`}
                  type={type}
                  placeholder=""
                  onChange={updateUserFormField}
                  value={userForm.password}
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                />
                <label>Password</label>
                {type === "text" && (
                  <span
                    className={`fa-solid fa-eye absolute right-[0] top-[5]`}
                    style={{ color: "#2264a6" }}
                    onClick={handleToggle}
                  ></span>
                )}
                {type === "password" && (
                  <span
                    className={`fa-solid fa-eye-slash absolute right-[0] top-[5]`}
                    style={{ color: "#2264a6" }}
                    onClick={handleToggle}
                  ></span>
                )}
                <span className={styles.focusborder}></span>
              </div>
            </div>
            <div
              className={`flex justify-center items-center my-5 h-1/10 w-full font-bold text-[140%]`}
            >
              <div className="w-full bg-[#005ab3] rounded">
                <button
                  type="submit"
                  id="login"
                  className={`w-full text-white `}
                >
                  Sign in
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div>
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
                  to="/signup"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
              <div>
                <Link to="/forgot">
                  <span>Forgot Password?</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="h-full border-2 border-solid border-black hidden sm:flex sm:w-1"></div>
        <div className="hidden h-full w-1/2 sm:flex flex-col justify-center items-center gap-5 bg-[#005ab3] rounded">
          <div className="hidden sm:w-2/3 sm:flex">
            <img className="object-contain" src={logo} alt="IIT BBS" />
          </div>
          <h1 className="text-2xl text-center text-white">
            Enterprise Resource Planning System
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
export default Login;
