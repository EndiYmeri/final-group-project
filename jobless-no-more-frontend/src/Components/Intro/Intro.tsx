import React from "react";
import "./Intro.css";
import { Icon } from "@iconify/react";
function Intro() {
  return (
    <div className="intro-container">
      <ul className="intro-ul">
        <li className="intro-list">IT & Networking</li>
        <li className="intro-list">Legal</li>
        <li className="intro-list">Design & Creative</li>
        <li className="intro-list">Sales & Marketing</li>
      </ul>
      <div className="main-section">
        <div className="intro-titles">
          <h1 className="intro-h1">How work should work</h1>
          <h3 className="intro-h3">
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </h3>
          <div className="intro-find">
            <button className="find-talent">Find Talent</button>
            <button className="find-work">Find Work</button>
          </div>
        </div>
        <div>
          <img
            className="intro-img"
            src="https://assets.entrepreneur.com/content/3x2/2000/20150608183942-next-great-territory-push-pins-world-map-connections-networking.jpeg"
            alt="People-connection"
          />
        </div>
      </div>
      <section className="second-section">
        <div className="for-clients-section">
          <h4 className="h4-for-client">For clients</h4>
          <h3 className="h3-for-client">Find talent your way</h3>
          <h6 className="h6-for-client">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </h6>
          <div className="btn-for-client">
            <button className="button-for-job">
              Post a job and hire a pro
            </button>
            <button className="button-for-projects">
              Browse and buy projects
            </button>
            <button className="button-for-talent">
              Let us help you find the right talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
