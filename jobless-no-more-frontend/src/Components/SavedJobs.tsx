import { User } from "../types";
import { Job } from "../types";

import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useNavigate } from "react-router-dom";
import JobComponentCustom from "./JobComponent/JobComponentCustom";
type Props = {
  user: User;
  setUser: Function;
};
function SavedJobs({ user, setUser }: Props) {
  return (
    <>
      {user?.savedJobs.map((job) => {
        return <JobComponentCustom job={job} user={user} setUser={setUser} />;
      })}
    </>
  );
}
export default SavedJobs;
