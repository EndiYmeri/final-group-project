import { useState } from "react";
import { useParams } from "react-router-dom";
import PostJobCategory from "../Components/PostJobComponents/PostJobCategory";
import PostJobDifficulty from "../Components/PostJobComponents/PostJobDifficulty";
import PostJobGettingStarted from "../Components/PostJobComponents/PostJobGettingStarted";
import PostJobLastDetails from "../Components/PostJobComponents/PostJobLastDetails";
import PostJobPreview from "../Components/PostJobComponents/PostJobPreview";
import PostJobSkills from "../Components/PostJobComponents/PostJobSkills";
import PostJobTitle from "../Components/PostJobComponents/PostJobTitle";
import PostJobUpperPart from "../Components/PostJobComponents/PostJobUpperPart";
import { Job } from "../types";
import "./PostJob.css";

function PostJob() {
  const { step } = useParams();
  const [newJob, setNewJob] = useState<Job>();

  return (
    <div className="post-job-page">
      {step !== "getting-started" && step && (
        <PostJobUpperPart location={step} />
      )}

      {step === "getting-started" && (
        <PostJobGettingStarted newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "title" && (
        <PostJobTitle newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "category" && (
        <PostJobCategory newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "skills" && (
        <PostJobSkills newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "difficulty" && (
        <PostJobDifficulty newJob={newJob} setNewJob={setNewJob} />
      )}
      {step === "last-details" && (
        <PostJobLastDetails newJob={newJob} setNewJob={setNewJob} />
      )}

      {step === "job-preview" && newJob && <PostJobPreview newJob={newJob} />}
    </div>
  );
}
export default PostJob;
