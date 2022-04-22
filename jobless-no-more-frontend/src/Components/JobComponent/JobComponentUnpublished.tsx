import { Job } from "../../types";
import "./JobComponent.css";
type Props = {
  classname?: "more-info" | "less-info";
  job: Job;
};

function JobComponentUnpublished({ classname, job }: Props) {
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
                    <div className="job-date">Not published yet</div>
                  </div>
                </div>
                <div className="job-paragraph">{job.content}</div>
              </div>
            </div>
          </div>

          <div className="jobs-right-side">
            <div className="jobs-entry">
              <p className="jobs-entry-paragraph">Experience level</p>
              🧠{job.difficulty}
            </div>
            <div className="jobs-entry">
              <p className="jobs-entry-paragraph">Payment</p> 💲$ {job.payment},{" "}
              {job.paymentType}
            </div>
            <div className="jobs-entry">
              <p className="jobs-entry-paragraph">Duration</p>⏲{job.duration}
            </div>
            <div className="jobs-entry">
              <p className="jobs-entry-paragraph">Category</p>
              📅 {job.category.name}
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

export default JobComponentUnpublished;
