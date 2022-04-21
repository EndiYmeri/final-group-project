import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobComponent from "../Components/JobComponent/JobComponent";
import { Job } from "../types";

export default function SingleJobPage() {
  const params = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/jobs/${params.id}`)
      .then((resp) => resp.json())
      .then((job) => setJob(job));
  }, []);

  console.log(job);
  if (job === null) return <h1>Loading...</h1>;

  return <JobComponent job={job} />;
}
