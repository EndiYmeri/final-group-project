import { Job, User } from "../../types";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = {
  job: Job;
  setUser: Function;
  user: User;
};

function dateFormat(job: Job) {
  const date = Date.parse(job.dateCreated);
  const d = new Date(date).toLocaleDateString();
  return d;
}

export default function JobComponentCustom({ user, job, setUser }: Props) {
  const navigate = useNavigate();
  const [jobSaved, setJobSaved] = useState(false);

  function saveJob(id: number) {
    fetch(`http://localhost:4000/saveJob`, {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId: id }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setUser(data);
          isJobSavedByUser();
        }
      });
  }

  function removeSavedJob(id: number) {
    fetch(`http://localhost:4000/removeSavedJob`, {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId: id }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setUser(data);
          isJobSavedByUser();
        }
      });
  }
  const addSavedPostToServer = (id: number) => {
    jobSaved ? removeSavedJob(id) : saveJob(id);
  };

  function isJobSavedByUser() {
    const savedPostTrue = job?.savedFromUsers?.find((userSaved) => {
      return userSaved.email === user.email;
    });

    setJobSaved(savedPostTrue ? true : false);
  }
  useEffect(() => {
    isJobSavedByUser();
  }, [job]);

  return (
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
        <div
          className="like-button"
          onClick={(e) => {
            e.stopPropagation();
            addSavedPostToServer(job.id);
          }}
        >
          {jobSaved ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </div>
      </div>
      <div className="job-info-details">
        <span className="job-span">{job.paymentType}</span>
        <span className="job-span">{job.difficulty?.name}</span>
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
  );
}
