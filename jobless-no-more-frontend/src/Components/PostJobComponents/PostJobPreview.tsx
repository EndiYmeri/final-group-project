import { Navigate, useNavigate } from "react-router-dom";
import { Job } from "../../types";
import JobComponent from "../JobComponent/JobComponent";

type Props = {
  newJob: Job;
};
export default function PostJobPreview({ newJob }: Props) {
  const navigate = useNavigate();

  function createNewJobPost(newJobData: Job) {
    fetch("http://localhost:4000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify({
        duration: newJobData.duration,
        title: newJobData.title,
        location: newJobData.location,
        content: newJobData.content,
        skills: newJobData.skills.map((skill) => skill.name),
        difficulty: newJobData.difficulty,
        // @ts-ignore
        category: newJobData.category,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // navigate("/home");
      });
  }
  console.log(newJob);

  return (
    <>
      <JobComponent job={newJob} />
      <button
        onClick={() => {
          createNewJobPost(newJob);
          navigate("/home");
        }}
      >
        Publish
      </button>
    </>
  );
}
