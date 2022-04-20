import { useState } from "react";
import { useParams } from "react-router-dom";
import PostJobGettingStarted from "../Components/PostJobComponents/PostJobGettingStarted";
import PostJobTitle from "../Components/PostJobComponents/PostJobTitle";
import { Job } from "../types";
import "./PostJob.css";

function PostJob() {
  const { step } = useParams();
  const [newJob, setNewJob] = useState<Job>();

  console.log(step);
  return (
    <div className="post-job-page">
      {step === "getting-started" && (
        <PostJobGettingStarted newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "title" && (
        <PostJobTitle newJob={newJob} setNewJob={setNewJob} />
      )}
    </div>
  );
}
export default PostJob;
