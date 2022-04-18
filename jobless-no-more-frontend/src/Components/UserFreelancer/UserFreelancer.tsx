import React from "react";
import "./UserFreelancer.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CreateIcon from '@mui/icons-material/Create';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";


function UserFreelancer() {
  const navigate = useNavigate()
  const Example = () => {
    return <ProgressBar completed={60} />;
  };

  return (
    <div className="user-container">
      <div className="user-freelancer-container">
        <div className="user-greeting">
          <div className="user-greeting-date">
            <h2>Goodmorning, Desintila Luzi</h2>
            <h3>Wednesday, April 13th</h3>
          </div>
          <div className="user-searchForJob">
            <input
              type="text"
              placeholder="Search for job"
              className="search-area"
            />
            <div className="search-icon">
              <SearchOutlinedIcon />
            </div>
          </div>
          <div className="recent-search">Recent search : CSS</div>

          <div className="jobs-liked-category">
            <div className="job-you-like-details">
              <h4 className="jobs-you-like">Jobs you might like</h4>
              <span className="jobs-three-dots">...</span>
            </div>
            <div className="jobs-filtered">
              <div className="jobs-filtered-category">Best Matches</div>
              <div className="jobs-filtered-category">Most Recent</div>
              <div className="jobs-filtered-category">Saved Jobs</div>
            </div>
            <div className="job-browse-paragraph">
              <div>
                Browse jobs that match your experience to a client's hiring
                preferences. Ordered by most relevant.
              </div>
            </div>
            <div className="job-custom">
              <div className="jobs-theme-development">
                <h4 className="jobs-ghost-h4">
                  Custom Ghost Blog Theme Development
                </h4>
                <div className="dislike-button">
                  <ThumbDownOutlinedIcon />
                </div>
                <div className="like-button">
                  <FavoriteBorderOutlinedIcon />
                </div>
              </div>
              <div className="job-info-details">
                <span className="job-span">Fixed-price</span>
                <span className="job-span">Intermediate - Est.</span>
                <span className="job-span">Budget: $2000</span>
                <span className="job-span">Posted 4 hours ago</span>
              </div>
              <div className="job-paragraph-ghost">
                <p className="job-description">
                  Im looking for someone to create a custom theme for Ghost CMS
                  based on an existing design we have done. Design consist on a
                  Homepage and Article view. Looking to thurn this around pretty
                  quickly, please only bid if you feel can start and finish
                  within th next 24 hours.
                </p>
                <div className="job-span-details">
                  <span className="job-span-plus">PLUS</span>
                  <span className="job-span-payment">
                    <VerifiedOutlinedIcon />
                    Payment verified
                  </span>
                  <span className="job-span-rating">
                    <StarBorderPurple500OutlinedIcon />
                    <StarBorderPurple500OutlinedIcon />
                    <StarBorderPurple500OutlinedIcon />
                    <StarBorderPurple500OutlinedIcon />
                    <StarBorderPurple500OutlinedIcon />
                  </span>
                  <span className="job-span-location">
                    <LocationOnOutlinedIcon />
                    Albania
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-container-info">
          <div className="user-details">
            <img
              className="user-image"
              src="https://avatars.dicebear.com/api/avataaars/desintilaluzi.svg"
              alt="Desintila" onClick={() => navigate('/profile')}
            />
            <h3 className="user-fullname">Desintila L</h3>
            <h5 className="user-job">Web Developer</h5>
          </div>
          <div className="user-profile">
            <div className="profile-completeness">
              <div className="profile-name">Profile Completeness</div>
              <div>{Example()}
              </div>

            </div>
            <div className="user-stand-wrapper">
              <div className="user-stand-out">Ways to stand out to our clients right now... </div>
              <div className="user-more-info">Add your past work so clients know you're a pro(+30%).
                <div className="add-work">Add work</div>
              </div>
              <div className="all-badge">
                <div className="available-connects">70 Available Connects</div>
                <div className="ava-badge">
                  <div>Availability Badge</div>
                  <div className="change-icon"><CreateIcon /></div>
                  <div>Hours Per week</div>
                  <div className="change-icon"><CreateIcon /></div>
                  <div>Profile Visibility</div>
                  <div className="change-icon"><CreateIcon /></div>
                  <div>My Categories</div>
                  <div className="change-icon"><CreateIcon /></div>
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
