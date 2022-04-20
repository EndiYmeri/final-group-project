import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Job } from "../../types";
import "./JobComponent.css";

type Props = {
  classname?: "more-info" | "less-info";
};

function JobComponent({ classname }: Props) {
  const params = useParams()
  const [job, setJob] = useState<Job | null>(null)

  useEffect(() => {
    fetch(`http://localhost:4000/jobs/${params.id}`)
      .then(resp => resp.json())
      .then(job => setJob(job))
  }, [])

  function dateFormat(job: Job) {
    const date = Date.parse(job.dateCreated)
    const d = new Date(date).toLocaleDateString()
    return d
  }

  console.log(job)
  if (job === null) return <h1>Loading...</h1>

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
                    <h4 className="website">Website</h4>
                    <div className="job-date">Posted at  {dateFormat(job)}</div>
                  </div>
                </div>
                <div className="job-paragraph">
                  {job.content}
                </div>
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
              ⏳ $100-$200
              <p className="jobs-entry-paragraph">Hourly Range</p>
            </div>
            <div className="jobs-entry">
              ⏲{job.duration.name}
              <p className="jobs-entry-paragraph">Hourly</p>
            </div>
            <div className="jobs-entry">
              📅 {job.Category.name}
              <p className="jobs-entry-paragraph">Category</p>
            </div>
          </div>
        </div>
        <div className="job-last-part">
          <h4>Skills and expertise</h4>
          <div className="job-skill">
            {job.skills.map(skill =>
              <button className="job-skill-name">{skill.name}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobComponent;
