import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import logo from "../assets/IITBBSlogo.png";
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    emailid: "",
    DOB: "",
    number: "",
  });
  const control = useAnimationControls();
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
      scaleX: [1, 0.7],
      scaleY: [1, 1],
      opacity: [1, 1],
      transition: {
        delay: 0.2,
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.6,
      },
    },
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

  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-amber-100">
      <motion.div
        variants={routeVariants}
        initial="show"
        exit="exit"
        className="w-[280px] sm:w-[560px] h-[450px] sm:h-[600px] flex flex-col justify-start m-auto items-center border-2 border-solid border-black p-5 sm:p-2 rounded-2xl bg-white overflow-hidden gap-0 sm:gap-2 z-[5]"
      >
        <motion.div
          animate={control}
          className={`bg-[#005ab3] absolute top-[-80%] sm:top-[40%] sm:right-[-50%] z-[5] h-[200px] w-[200px]`}
        ></motion.div>

        <h1 className="text-2xl font-bold">Sign Up</h1>
        
        <div className="h-2/5 w-full bg-blue-700 rounded-lg mt-2 mb-4  flex items-center justify-center">
          <div
            className="bg-cover bg-center bg-no-repeat h-[105px] w-[118px] md:h-[219px] md:w-[237px]"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>

        <form className="grid grid-cols-2 gap-4 justify-items-center w-full ">
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                onChange={updateFormField}
                value={form.name}
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="emailid" className="text-sm font-medium mb-2">
              Email-ID
            </label>
            <div className="relative">
              <input
                type="text"
                id="emailid"
                name="emailid"
                onChange={updateFormField}
                value={form.emailid}
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="20AG06***@iitbbs.ac.in"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="date"
                id="DOB"
                name="DOB"
                onChange={updateFormField}
                value={form.DOB}
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="number" className="text-sm font-medium mb-2">
              Phone
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={updateFormField}
                value={form.number}
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                // placeholder="91-"  
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Role
            </label>
            <div className="relative">
              <select
                name="role"
                id="role"
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                onChange={updateFormField}
                value={form.password}
                className="p-2 w-full border-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default SignUp;