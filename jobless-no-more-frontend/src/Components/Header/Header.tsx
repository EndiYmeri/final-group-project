import { useEffect, useState } from "react";
import SearchBarMenu from "../MaterialComp/SearchBarMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PlayForWorkIcon from "@mui/icons-material/PlayForWork";
import "./Header.css";
import { User } from "../../types";

type SearchWhere = "talents" | "projects" | "jobs";
type Props = {
  user?: User;
  setUser: Function;
};

export default function Header({ user, setUser }: Props) {
  const [hasUser, setHasUser] = useState(false);
  const [searchWhere, setSearchWhere] = useState("");
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // user ? setHasUser(true) : setHasUser(false);
    setHideHeader(
      location.pathname === "/login" || location.pathname === "/signup"
    );
  }, [location.pathname]);
  console.log(location.pathname);

  function signOut() {
    setUser(undefined);
    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className={user ? "hasUser" : "noUser"}>
      <div className="logo">
        <Link to="/">
          <h1>Jobless</h1>
          <span>no more</span>
        </Link>
      </div>
      {!hideHeader && (
        <>
          <div className="middle">
            <div className="search">
              <div className="searchBar">
                <SearchBarMenu />
                <input type="text" name="" id="" />
              </div>
            </div>
            <nav>
              <ul>
                <Link to="find-work">Find Work</Link>
                <Link to="my-jobs">My jobs</Link>
                <Link to="reports">Reports</Link>
                <Link to="messages">Messages</Link>
              </ul>
            </nav>
          </div>
          <>
            {user ? (
              <div className="account-links">
                <ul>
                  <li>
                    <NotificationsIcon fontSize="large" />
                  </li>
                  <li>
                    <PlayForWorkIcon fontSize="large" />
                  </li>
                </ul>
                <div className="account" onClick={signOut}>
                  <img src={user.image} alt="" />
                </div>
              </div>
            ) : (
              <div className="buttons">
                <button
                  className="login-button"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    navigate("signup");
                  }}
                  className="signup-button"
                >
                  Sign up
                </button>
              </div>
            )}
          </>
        </>
      )}
    </header>
  );
}
