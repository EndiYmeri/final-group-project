import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import ClientSignup from "./pages/ClientSignup";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { User } from "./types";

function App() {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

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
      navigate("/landingPage");
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
