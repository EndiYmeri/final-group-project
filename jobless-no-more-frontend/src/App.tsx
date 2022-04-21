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
import Freelancer from "./pages/Freelancer";
import Client from "./pages/Client";
import JobComponent from "./Components/JobComponent/JobComponent";
import PostJob from "./pages/PostJob";

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
        });
    } else {
      location.pathname === "/login" || location.pathname === "/signup"
        ? null
        : navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path={"/login"} element={<Login setUser={setUser} />} />
        <Route path={"/signup"} element={<Signup setUser={setUser} />} />
        <Route path={"/client-signup"} element={<ClientSignup />} />
        {user && <Route path={"/home"} element={<Home user={user} />} />}
        {user?.type === "client" && (
          <Route path={"/client"} element={<Client />} />
        )}
        {user?.type === "freelancer" && (
          <Route path={"/freelancer/*"} element={<Freelancer user={user} />} />
        )}
        <Route index element={<LandingPage user={user} />} />
        {user && (
          <Route
            path={"/profile"}
            element={<FreelancerProfile user={user} />}
          />
        )}
        <Route path={"/job/:id"} element={<JobComponent />} />
        {user?.type === "client" && (
          <Route path="/post-job/:step" element={<PostJob />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
