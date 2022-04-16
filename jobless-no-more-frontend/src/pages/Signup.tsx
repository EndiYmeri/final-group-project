import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import SignUpUserType from "../Components/SignUpUserType";
import "./LoginSignup.css";

function Signup() {
  const [userType, setUserType] = useState("");

  return (
    <main className="signup-main">
      <div className="signup-container"></div>
      {userType ? <SignUpForm /> : <SignUpUserType setUserType={setUserType} />}
    </main>
  );
}
export default Signup;
