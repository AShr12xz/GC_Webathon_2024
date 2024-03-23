import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Profile from "./pages/components/profile.js";
import Attendance from "./pages/components/attendance.js";
import Result from "./pages/components/result.js";

import {
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard.js";
import Attendance from "./pages/components/attendance.js";
import EditProfile from "./pages/components/EditProfile.js";
import CourseReg from "./pages/components/CourseReg.js";
import CourseView from "./pages/components/CourseView.js";
import Feedback from "./pages/components/Feedback.js";
import Result from "./pages/components/Result.js";
import Survey from "./pages/components/Survey.js";

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Dashboard props={<Profile/>}/>}/>
        <Route path="/attendance" element={<Dashboard props={<Attendance/>}/>}/>
        <Route path="/result" element={<Dashboard props={<Result/>}/>}/>  
        
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <BrowserRouter >
      <RoutesWithAnimation />
    </BrowserRouter>
  );
}

export default App;
