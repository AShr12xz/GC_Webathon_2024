import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
const SignUp = () => {
  const [form, setForm] = useState({
    name:"",
    emailid:""
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
        <form className="flex flex-col justify-start items-center w-full h-full p-0 overflow-hidden">
          <div className="w-full flex justify-between gap-2">
            <div className="w-1/2">
              <label htmlFor="name" className="text-sm font-medium mb-2">
                Full Name
              </label>
              <div class="relative">
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
            <div className="w-1/2">
              <label htmlFor="emailid" className="text-sm font-medium mb-2">
                Email-ID
              </label>
              <div class="relative">
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
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default SignUp;
