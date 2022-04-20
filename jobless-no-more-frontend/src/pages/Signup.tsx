import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../Components/Forms/SignUpForm";
import SignUpUserType from "../Components/SignUpUserType";
import "./LoginSignup.css";

type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
};
type Props = {
  setUser: Function;
};

function Signup({ setUser }: Props) {
  const [userType, setUserType] = useState("");

  const navigate = useNavigate();

  function signUp(signUpData: SignUpData) {
    fetch(`http://localhost:4000/signup/${userType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("token", data.token);
          setUser(data.createdUser);
          navigate("/home");
        }
      });
  }

  return (
    <main className="signup-main">
      <div className="signup-container"></div>
      {userType ? (
        <SignUpForm submitFunc={signUp} />
      ) : (
        <SignUpUserType setUserType={setUserType} />
      )}
    </main>
  );
}
export default Signup;
