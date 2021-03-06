import e from "cors";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Category, Job, Skill } from "../../types";
import CategorySelector from "../MaterialComp/CategorySelector";
import LinearProgressWithLabel from "../MaterialComp/LinearProgressLabeled";
import SkillSelector from "../MaterialComp/SkillsSelector";
import Skills from "../MaterialComp/SkillsSelector";
import HelpingInfo from "./HelpingInfo";
import "./PostJobDetails.css";
import PostJobUpperPart from "./PostJobUpperPart";
type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  newSkill: string;
};

export default function PostJobSkills({ newJob, setNewJob }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [skills, setSkills] = useState<Skill[]>();
  const [jobSkills, setJobSkills] = useState<Skill[]>();
  const [category, setCategory] = useState<Category>();
  const [newSkillStatus, setNewSkillStatus] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data.newCategory);
    setNewJob({
      ...newJob,
      skills: jobSkills,
    });
    navigate("/post-job/difficulty");
  };

  useEffect(() => {
    fetch("http://localhost:4000/skills")
      .then((resp) => resp.json())
      .then((data) => setSkills(data));
  }, [newSkillStatus]);

  useEffect(() => {
    setNewSkillStatus("");
    console.log(watch("newSkill"));
  }, [watch("newSkill")]);

  function createNewSkill(skillName: string) {
    fetch("http://localhost:4000/skill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: skillName }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setNewSkillStatus("New skill created");
        } else {
          setNewSkillStatus(data.error);
        }
      });
  }

  return (
    <div className="job-skills">
      {/* <PostJobUpperPart location="skill" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="skill-label" htmlFor="newSkill">
          <p>Select skills from the list below</p>
          {skills && (
            <SkillSelector skills={skills} setJobSkills={setJobSkills} />
          )}
          <p> You can add create new skills here</p>
          <input type="text" {...register("newSkill")} name="newSkill" />
          {watch("newSkill")?.length > 0 &&
            newSkillStatus !== "New skill created" &&
            newSkillStatus !== "Skill already exists" && (
              <span
                className="add-new-skill-btn"
                onClick={() => {
                  createNewSkill(watch("newSkill"));
                }}
              >
                Create Skill
              </span>
            )}
          {newSkillStatus ? <span>{newSkillStatus}</span> : null}

          {/* <CategorySelector setCategory={setCategory} /> */}
        </label>
        <div>
          <div className="buttons">
            <button
              onClick={() => {
                navigate("/post-job/category");
              }}
            >
              Back
            </button>
            <button type="submit">
              Next: <span>Difficulty</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
