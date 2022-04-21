import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Forms/LoginForm";

import "./LoginSignup.css";

type LoginData = {
  email: string;
  password: string;
  userType: "freelancer" | "client";
};

type Props = {
  setUser: Function;
};

function Login({ setUser }: Props) {
  const navigate = useNavigate();

  function login(loginData: LoginData) {
    fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("token", data.token);
          setUser(data.foundUser);
          navigate("/freelancer/best-matches");
        }
      });
  }

  return (
    <main className="login-main">
      <div className="login-container">
        <div className="login-section">
          <h2>Log in to Jobless</h2>
          <LoginForm submitFunc={login} />
          <div>
            <span>or</span>
          </div>
          <button className="google-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              className="google-icon"
              viewBox="0 0 101.33 101.33"
            >
              <path fill="#fff" d="M0 0h101.33v101.33H0z" />
              <path
                d="M50.667 36.167c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85c-4.16-3.87-9.59-6.25-16.06-6.25-9.38 0-17.49 5.38-21.44 13.22l7.98 6.19c1.89-5.69 7.2-9.91 13.46-9.91z"
                fill="#ea4335"
              />
              <path
                d="M73.647 51.217c0-1.57-.15-3.09-.38-4.55h-22.6v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                fill="#4285f4"
              />
              <path
                d="M37.197 55.257c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19c-1.63 3.24-2.55 6.9-2.55 10.78s.92 7.54 2.56 10.78z"
                fill="#fbbc05"
              />
              <path
                d="M50.667 74.667c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19c3.96 7.85 12.07 13.23 21.45 13.23z"
                fill="#34a853"
              />
              <path d="M26.667 26.667h48v48h-48z" fill="none" />
            </svg>
            Continue with Google
          </button>
        </div>
        <div className="dont-have-account-section">
          <span>Don't have an Upwork account?</span>
          <button
            className="sign-up-btn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}
export default Login;
