import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="login-main">
      <div className="login-container">
        <div className="login-section">
          <h2>Log in to Upwork</h2>
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              aria-hidden="true"
              role="img"
              className="user-icon"
            >
              <path d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <input type="email" name="email" placeholder="Username or email" />
          </label>
          <button type="submit" className="email-btn">
            Continue with Email
          </button>
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
