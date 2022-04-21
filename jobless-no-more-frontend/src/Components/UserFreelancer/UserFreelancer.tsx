import React, { useEffect, useState } from "react";
import "./UserFreelancer.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import CreateIcon from "@mui/icons-material/Create";
import ProgressBar from "@ramonak/react-progress-bar";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Job, User } from "../../types";
import MostRecent from "../MostRecent";
import SavedJobs from "../SavedJobs";
import BestMatches from "../BestMatches";

type Props = {
  user: User;
};

function UserFreelancer({ user }: Props) {
  const navigate = useNavigate();
  const Example = () => {
    return <ProgressBar bgColor="#0d47ff" completed={60} />;
  };

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/jobsBasedOnUserSkills", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((jobs) => setJobs(jobs));
    }
  }, []);

  return (
    <div className="user-container">
      <div className="user-freelancer-container">
        <div className="user-greeting">
          <div className="user-greeting-date">
            <div className="user-greeting-info">
              <h3>{new Date().toLocaleString() + ""}</h3>
              <h2>
                Hello, {user.firstName} {user.lastName}
              </h2>
            </div>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 145 130"
              aria-hidden="true"
              role="img"
              className="send-icon"
            >
              <path
                d="M139.661 60.627c-.503-6.974-5.937-12.467-12.562-12.467-5.455 0-10.085 3.704-11.858 8.89a8.694 8.694 0 00-2.783-.455c-4.127 0-7.625 2.868-8.868 6.841a3.906 3.906 0 00-.667-.074 4.789 4.789 0 00-4.662 4.763c0 2.312 1.408 4.391 3.371 4.815h37.638c3.174 0 5.73-2.699 5.73-6.085 0-3.255-2.37-6.011-5.36-6.218"
                fill="var(--illustration-color-12)"
              ></path>
              <path
                d="M96.145 25L46.146 40.663l-12.419-8.858L96.145 25zm0 0L70.979 58.378l-8.435-6.022-10.191-7.265L96.145 25z"
                fill="var(--illustration-color-2)"
              ></path>
              <path
                d="M96.144 25L46.146 40.663v.01l6.741 19.87 9.657-8.187-10.191-7.265L96.144 25z"
                fill="var(--illustration-color-5)"
              ></path>
              <path
                d="M71.518 70.22l-40.15 19.404-11.377-5.857L71.518 70.22zm0 0L54.11 101.34l-7.731-3.979-9.329-4.804L71.518 70.22z"
                fill="var(--illustration-color-4)"
              ></path>
              <path
                d="M71.519 70.22L31.368 89.625l-.006.005 7.832 15.801 7.185-8.07-9.328-4.804L71.519 70.22z"
                fill="var(--illustration-color-1)"
              ></path>
              <path
                d="M37.902 48.398L7.138 55.552 0 49.642l37.902-1.244z"
                fill="var(--illustration-color-13)"
              ></path>
              <path
                d="M37.902 48.398l-16.509 18.97-4.841-4.016-5.853-4.847 27.203-10.107z"
                fill="var(--illustration-color-13)"
              ></path>
              <path
                d="M37.902 48.398L7.138 55.552h-.005l3.27 12.292 6.149-4.492-5.853-4.847 27.203-10.107z"
                fill="var(--illustration-color-14)"
              ></path>
            </svg>
          </div>
          <label className="user-searchForJob">
            <input
              type="text"
              placeholder="Search for job"
              className="search-area"
            />
            <div className="search-icon">
              <SearchOutlinedIcon />
            </div>
          </label>
          <div className="jobs-liked-category">
            <div className="job-you-like-details">
              <h3 className="jobs-you-like">Jobs you might like</h3>
              <span className="jobs-three-dots">...</span>
            </div>
            <div className="jobs-filtered">
              <div className="jobs-filtered-category">
                <NavLink to="/freelancer/best-matches">Best Matches</NavLink>
              </div>
              <div className="jobs-filtered-category">
                <NavLink to="/freelancer/most-recent">Most Recent</NavLink>
              </div>
              <div className="jobs-filtered-category">
                <NavLink to="/freelancer/saved-jobs">Saved Jobs</NavLink>
              </div>
            </div>
            <div className="job-browse-paragraph">
              <div>
                Browse jobs that match your experience to a client's hiring
                preferences. Ordered by most relevant.
              </div>
            </div>
            <div className="jobs-container">
              <Routes>
                <Route
                  path="/best-matches"
                  element={<BestMatches jobs={jobs} />}
                />
                <Route
                  path="/most-recent"
                  element={<MostRecent jobs={jobs} />}
                />
                <Route path="/saved-jobs" element={<SavedJobs />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="user-container-info">
          <div className="user-details">
            <img
              className="user-image"
              src={user.image}
              alt={user.firstName}
              onClick={() => navigate("/profile")}
            />
            <h3 onClick={() => navigate("/profile")} className="user-fullname">
              {user.firstName} {user.lastName}
            </h3>
            <h5 className="user-job">Web Developer</h5>
          </div>
          <div className="user-profile">
            <div className="profile-completeness">
              <div className="profile-name">Profile Completeness</div>
              <div>{Example()}</div>
            </div>
            <div className="user-stand-wrapper">
              <div className="user-stand-out">
                Ways to stand out to our clients right now...{" "}
              </div>
              <div className="user-more-info">
                Add your past work so clients know you're a pro(+30%).
                <div className="add-work">Add work</div>
              </div>
              <div className="all-badge">
                <div className="available-connects">70 Available Connects</div>
                <div className="ava-badge">
                  <div>Availability Badge</div>
                  <div className="change-icon">
                    <CreateIcon />
                  </div>
                  <div>Hours Per week</div>
                  <div className="change-icon">
                    <CreateIcon />
                  </div>
                  <div>Profile Visibility</div>
                  <div className="change-icon">
                    <CreateIcon />
                  </div>
                  <div>My Categories</div>
                  <div className="change-icon">
                    <CreateIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFreelancer;
