import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import ClientSignup from "./pages/ClientSignup";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { User } from "./types";
import FreelancerProfile from "./pages/FreelancerProfile";

function App() {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data);
          navigate("/home");
        });
    } else {
      location.pathname === "/login" || location.pathname === "/signup"
        ? null
        : navigate("/landingPage");
    }
  }, []);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path={"/login"} element={<Login setUser={setUser} />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/client-signup"} element={<ClientSignup />} />
        <Route path={"/home"} element={<Home />} />
        <Route index element={<LandingPage user={user} />} />
        <Route path={"/profile"} element={<FreelancerProfile user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
