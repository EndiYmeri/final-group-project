import { Job, User } from "../types";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useNavigate } from "react-router-dom";
import JobComponentCustom from "./JobComponent/JobComponentCustom";
type Props = {
  jobs: Job[];
  setUser: Function;
  user: User;
};
function mostRecent({ jobs, setUser, user }: Props) {
  let mostRecentJobs = jobs.slice(jobs.length - 2, jobs.length);
  return (
    <>
      {mostRecentJobs.map((job) => {
        return <JobComponentCustom user={user} job={job} setUser={setUser} />;
      })}
    </>
  );
}
export default mostRecent;
