import { useEffect, useState } from "react";
import LinearProgressWithLabel from "../MaterialComp/LinearProgressLabeled";

type Props = {
  location: string;
};

export default function PostJobUpperPart({ location }: Props) {
  const [title, setTitle] = useState("");
  const [progressBarValue, setProggressBarValue] = useState(0);

  useEffect(() => {
    if (location === "getting-started") {
      setTitle("Select the title for your job");
      setProggressBarValue(0);
    } else if (location === "title") {
      setTitle("Time to select the title");
      setProggressBarValue(20);
    } else if (location === "category") {
      setTitle("Lets select the category this job this job belongs to");
      setProggressBarValue(40);
    } else if (location === "skills") {
      setTitle("Lets select the skills needed for this job");
      setProggressBarValue(60);
    } else if (location === "difficulty") {
      setTitle("Set the difficulty this job requires");
      setProggressBarValue(80);
    } else if (location === "last-details") {
      setTitle("Set the difficulty this job requires");
      setProggressBarValue(95);
    } else if (location === "job-preview") {
      setTitle("This is what your new job post looks like");
      setProggressBarValue(100);
    }
  }, [location]);
  return (
    <>
      <h1>{title}</h1>
      <LinearProgressWithLabel value={progressBarValue} />
    </>
  );
}
