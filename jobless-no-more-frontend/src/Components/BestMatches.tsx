import { Job } from "../types";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useNavigate } from "react-router-dom";
type Props = {
  jobs: Job[];
};
function BestMatches({ jobs }: Props) {
  const navigate = useNavigate();
  function dateFormat(job: Job) {
    const date = Date.parse(job.dateCreated);
    const d = new Date(date).toLocaleDateString();
    return d;
  }
  return (
    <>
      {jobs.map((job) => (
        <div
          className="job-custom"
          key={job.id}
          onClick={() => navigate(`/job/${job.id}`)}
        >
          <div className="jobs-theme-development">
            <h4 className="jobs-ghost-h4">{job.title}</h4>
            <div className="dislike-button">
              <ThumbDownOutlinedIcon />
            </div>
            <div className="like-button">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
          <div className="job-info-details">
            <span className="job-span">{job.paymentType}</span>
            <span className="job-span">{job.difficulty.name}</span>
            <span className="job-span">{job.payment}</span>
            <span className="job-span">Posted {dateFormat(job)}</span>
          </div>
          <div className="job-paragraph-ghost">
            <p className="job-description">{job.content}</p>
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
                {job.location}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default BestMatches;
