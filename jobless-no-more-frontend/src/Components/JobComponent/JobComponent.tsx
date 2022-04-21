import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Job } from "../../types";
import "./JobComponent.css";

type Props = {
  classname?: "more-info" | "less-info";
  job: Job;
};

function dateFormat(job: Job) {
  const date = Date.parse(job.dateCreated);
  const d = new Date(date).toLocaleDateString();
  return d;
}

function JobComponent({ classname, job }: Props) {
  return (
    <div className={`job-component-container ${classname}`}>
      <div className="job-container">
        <h2 className="job-component-details">Job Details</h2>
        <div className="job-component-titles">
          <div className="job-details-container">
            <div className="job-for-website">
              <h3> {job.title}</h3>
              <div className="job-info">
                <div className="job-website">
                  <div className="website-and-date">
                    <h4 className="website">{job.category.name}</h4>
                    <div className="job-date">Posted at {dateFormat(job)}</div>
                  </div>
                </div>
                <div className="job-paragraph">{job.content}</div>
              </div>
              <div className="job-budget">My budget is 800$</div>
            </div>
          </div>

          <div className="jobs-right-side">
            <div className="jobs-entry">
              🧠{job.difficulty.name}
              <p className="jobs-entry-paragraph">Experience level</p>
            </div>
            <div className="jobs-entry">
              ⏳ ${job.payment}
              <p className="jobs-entry-paragraph">{job.paymentType}</p>
            </div>
            <div className="jobs-entry">
              ⏲{job.duration.name}
              <p className="jobs-entry-paragraph">Duration</p>
            </div>
            <div className="jobs-entry">
              📅 {job.category.name}
              <p className="jobs-entry-paragraph">Category</p>
            </div>
          </div>
        </div>
        <div className="job-last-part">
          <h4>Skills and expertise</h4>
          <div className="job-skill">
            {job.skills.map((skill) => (
              <button className="job-skill-name">{skill.name}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobComponent;
