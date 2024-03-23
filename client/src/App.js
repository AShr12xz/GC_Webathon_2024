import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import {
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/login" />}/>
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
//
export default App;
