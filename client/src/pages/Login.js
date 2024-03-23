import { useState } from "react";
import styles from "../styles/login.module.css";
import logo from "../assets/IITBBSlogo.png";

const Login = () => {
  const [type, setType] = useState("password");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const updateFormField = (e) => {
    const { name, value } = e.target;
    const check = { ...form, [name]: value };
    if (check[e.target.name] !== "") {
      e.target.classList.add(`${styles.hascontent}`);
    } else {
      e.target.classList.remove(`${styles.hascontent}`);
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const checkLogin = async (e) => {};
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-amber-100">
      <div className="w-[250px] h-[425px] sm:w-[560px] sm:h-[480px] flex justify-start m-auto items-center border-2 border-solid border-black p-5 sm:p-2 rounded-2xl bg-white overflow-hidden gap-0 sm:gap-2">
        <form
          onSubmit={checkLogin}
          className="flex flex-col justify-center items-center w-full sm:w-1/2 h-full p-0 sm:p-5"
        >
          <div className="flex flex-col justify-center items-center w-full ">
            <div
              className={`z-[3] m-5 flex justify-center items-center float-left h-1/5 w-full relative `}
            >
              <input
                className={`${styles.texteffect} focus:border-none focus:outline-none w-full`}
                type="text"
                placeholder=""
                onChange={updateFormField}
                value={form.username}
                name="username"
                id="username"
                required
                autoComplete="off"
              />
              <label>Username</label>
              <span className={styles.focusborder}></span>
            </div>
            <div
              className={`z-[3] m-5 flex justify-center items-center float-left h-1/5 w-full relative`}
            >
              <input
                className={`${styles.texteffect} focus:border-none focus:outline-none w-full`}
                type={type}
                placeholder=""
                onChange={updateFormField}
                value={form.password}
                name="password"
                id="password"
                required
                autoComplete="off"
              />
              <label>Password</label>
              {type === "text" && (
                <span
                  className={`fa-solid fa-eye ${styles.eyeicon}`}
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
            <div className="w-full bg-blue-400 rounded">
              <button type="submit" id="login" className={`w-full text-white`}>
                Sign in
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <a
                href="/signup"
              >
                <span>Sign Up</span>
              </a>
            </div>
            <div>
              <a href="abc">
                <span>Forgot Password?</span>
              </a>
            </div>
          </div>
        </form>
        <div className="h-full border-2 border-solid border-black hidden sm:flex sm:w-1"></div>
        <div className="hidden h-full w-1/2 sm:flex flex-col justify-center items-center gap-5 bg-blue-600 rounded">
          <div className="hidden sm:w-2/3 sm:flex">
            <img className="object-contain" src={logo} alt="IIT BBS" />
          </div>
          <h1 className="text-2xl text-center text-white">
            Enterprise Resource Planning System
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Login;
