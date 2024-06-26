import {
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Profile from "./pages/components/Profile.js";
import Attendance from "./pages/components/Attendance.js";
import Result from "./pages/components/Result.js";
import { UserContextProvider } from "./store/UserContext.js";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard.js";
import EditProfile from "./pages/components/EditProfile.js";
import CourseReg from "./pages/components/CourseReg.js";
import CourseView from "./pages/components/CourseView.js";
import FeedbackForm from "./pages/components/Feedback.js";
import Survey from "./pages/components/Survey.js";
import Assignment from "./pages/components/Assigments.js";

import FeedbackBox from "./pages/components/Faculty pages/Feedback.js";
import Material from "./pages/components/Faculty pages/Material.js";
import StudentAttendancePortal from "./pages/components/Faculty pages/Attendance.js";
import GradeUpload from "./pages/components/Faculty pages/Grade.js";

export const baseurl = "https://gc-webathon-2024-l5b7.onrender.com";
// export const baseurl = "http://localhost:3000";

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard props={<Profile />}/>} />

        <Route path="/profile" element={<Dashboard props={<Profile />} />} />
        <Route
          path="/attendance"
          element={<Dashboard props={<Attendance />} />}
        />
        <Route path="/result" element={<Dashboard props={<Result />} />} />
        <Route
          path="/editprofile"
          element={<Dashboard props={<EditProfile />} />}
        />
        <Route
          path="/feedback"
          element={<Dashboard props={<FeedbackForm />} />}
        />
        <Route path="/survey" element={<Dashboard props={<Survey />} />} />
        <Route
          path="/courseregister"
          element={<Dashboard props={<CourseReg />} />}
        />
        <Route
          path="/mycourses"
          element={<Dashboard props={<CourseView />} />}
        />
        <Route
          path="/assignment"
          element={<Dashboard props={<Assignment />} />}
        />

        <Route
          path="/facultyfeedback"
          element={<Dashboard props={<FeedbackBox />} />}
        />
        <Route path="/material" element={<Dashboard props={<Material />} />} />
        <Route
          path="/facultyattendance"
          element={<Dashboard props={<StudentAttendancePortal />} />}
        />
        <Route
          path="/addattendance"
          element={<Dashboard props={<StudentAttendancePortal />} />}
        />
        <Route path="/grade" element={<Dashboard props={<GradeUpload />} />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <RoutesWithAnimation />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
