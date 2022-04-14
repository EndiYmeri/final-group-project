import React from "react";
import "./JobComponent.css";

type Props = {
  classname?: "more-info" | "less-info";
};

function JobComponent({ classname }: Props) {
  return (
    <div className={`job-component-container ${classname}`}>
      <div className="job-container">
        <h2 className="job-component-details">Job Details</h2>
        <div className="job-component-titles">
          <div className="job-details-container">
            <div className="job-for-website">
              <h3> I Want To Make A Website</h3>
              <div className="job-info">
                <div className="job-website">
                  <div className="website-and-date">
                    <h4 className="website">Website</h4>
                    <div className="job-date">Posted at Apr 12, 2022</div>
                  </div>
                </div>
                <div className="job-paragraph">
                  This is a very simple website. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sapiente enim laudantium, minus
                  ex voluptates velit quia, adipisci quam repudiandae ea
                  quisquam facere distinctio aperiam, quasi commodi amet
                  delectus sint natus.
                </div>
                <div className="job-demo">
                  Demo: https://www.geeksforgeeks.org/
                </div>
              </div>
              <div className="job-budget">My budget is 800$</div>
              <div className="job-posting">View job posting</div>
            </div>
          </div>

          <div className="jobs-right-side">
            <div className="jobs-entry">
              🧠Entry
              <p className="jobs-entry-paragraph">Experience level</p>
            </div>
            <div className="jobs-entry">
              ⏳ $100-$200
              <p className="jobs-entry-paragraph">Hourly Range</p>
            </div>
            <div className="jobs-entry">
              ⏲Less than 30hr/week
              <p className="jobs-entry-paragraph">Hourly</p>
            </div>
            <div className="jobs-entry">
              📅 $100-$200
              <p className="jobs-entry-paragraph">Hourly Range</p>
            </div>
          </div>
        </div>
        <div className="job-last-part">
          <h4>Skills and expertise</h4>
          <div className="job-skill">
            <button className="job-skill-name">Web design</button>
            <button className="job-skill-name">HTML</button>
            <button className="job-skill-name">WordPress</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobComponent;
