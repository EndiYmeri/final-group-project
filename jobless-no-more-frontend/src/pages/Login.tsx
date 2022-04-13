import { useNavigate } from "react-router-dom";
import "./LoginSignup.css"

function Login() {

  const navigate = useNavigate()

  return (
    <main className="login-main">
      <div className="login-container">
        <div className="login-section">
          <h2>Log in to Upwork</h2>
          <input type="email" name="email" placeholder="Username or email" />
          <button type="submit" className="email-btn">
            Continue with Email
          </button>
          <div>
            <span>or</span>
          </div>
          <button className="google-btn">Continue with Google</button>
        </div>
        <div className="dont-have-account-section">
          <span>Don't have an Upwork account?</span>
          <button 
            className="sign-up-btn"
            onClick={()=>{navigate('/signup')}}
            >Sign Up</button>
        </div>
      </div>
    </main>
  );
}
export default Login;
