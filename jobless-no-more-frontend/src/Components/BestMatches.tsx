import { Job, User } from "../types";

import { useNavigate } from "react-router-dom";
import JobComponentCustom from "./JobComponent/JobComponentCustom";

type Props = {
  setUser: Function;
  jobs: Job[];
  user: User;
};
function BestMatches({ jobs, setUser, user }: Props) {
  return (
    <>
      {jobs.map((job) => (
        <JobComponentCustom user={user} job={job} setUser={setUser} />
      ))}
    </>
  );
}
export default BestMatches;
