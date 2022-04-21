import { useEffect, useState } from "react";
import SearchBarMenu from "../MaterialComp/SearchBarMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PlayForWorkIcon from "@mui/icons-material/PlayForWork";
import "./Header.css";
import { User } from "../../types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountMenu from "../MaterialComp/AccountMenu";

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
        {user === undefined ? (
          <Link to="/">
            <h1>Jobless</h1>
            <span>no more</span>
          </Link>
        ) : (
          <Link to="/freelancer/best-matches">
            <h1>Jobless</h1>
            <span>no more</span>
          </Link>
        )}
      </div>
      {!hideHeader && (
        <>
          <div className="middle">
            <div className="search">
              <div className="searchBar">
                <SearchBarMenu />
                <input type="text" name="search" placeholder="Search" />
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
                <div className="account">
                  <AccountMenu signOut={signOut} user={user} />
                  {/* {user.image ? (
                    <img src={user.image} alt="" />
                  ) : (
                    <AccountCircleIcon />
                  )} */}
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
