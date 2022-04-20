import { useEffect, useState } from "react";
import BasicModal from "../Components/MaterialComp/Education";
import LanguageModal from "../Components/MaterialComp/Language";
import { User } from "../types";
import "./Profile.css";

type Props = {
  user: User;
};

function FreelancerProfile({ user }: Props) {
  console.log("user: ", user);
  return (
    <main className="profile-container">
      <section className="profile">
        <div className="freelancer-details">
          <div className="avatar">
            <button className="edit-photo">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width={"14px"}
              >
                <path
                  fillRule="evenodd"
                  d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                ></path>
              </svg>
            </button>
            <img
              className="freelancer-image"
              src={user?.image}
              alt={user?.firstName}
            />
          </div>
          <div className="freelancer-info">
            <h3 className="freelancer-fullname">
              {user?.firstName} {user?.lastName}
            </h3>
            <h4 className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width={"14px"}
              >
                <path
                  fillRule="evenodd"
                  d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"
                ></path>
              </svg>
              {user?.location}{" "}
            </h4>
          </div>
        </div>
        <div className="more-info">
          <div className="education-container">
            <div className="education">
              <div className="education-title">
                <h4>Education</h4>
                <BasicModal />
              </div>
              <div className="school">
                <h5>University of Tirana</h5>
                <p>Bachelor degree in Informatics</p>
                <span>2018-2021</span>
              </div>
            </div>
            <div className="education">
              <div className="education-title">
                <h4>Languages</h4>
                <LanguageModal />
              </div>
              <div className="school">
                <ul>
                  <li>Albanian</li>
                  <li>English</li>
                  <li>French</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="freelancer-bio">
              <div className="title">
                <h3>{user.profession}</h3>
                <button className="edit-title">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    width={"14px"}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="bio">{user?.bio}</p>
            </div>
            <div className="skills-container">
              <div className="skills">
                <h3>Skills </h3>
                <button className="edit-title">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    width={"14px"}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="skills-list">
                {user?.skills &&
                  //@ts-ignore
                  user?.skills?.map((skill) => {
                    console.log(user.skills);
                    return <li className="skills-item">{skill.name}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default FreelancerProfile;
