import { SubmitHandler, useForm } from "react-hook-form";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import "./PostJobDetails.css";
import { Job } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  difficulty: "Entry level" | "Intermediate" | "Expert";
};

export default function PostJobDifficulty({ newJob, setNewJob }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setNewJob({
      ...newJob,
      difficulty: data.difficulty,
    });
    navigate("/post-job/last-details");
  };

  return (
    <div className="difficulty">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label
            htmlFor="entry-level"
            className={watch("difficulty") === "Entry level" ? "active" : ""}
          >
            <div className="radio-info">
              <WorkspacesIcon />
              <h2>Entry level</h2>
              <p>Easy tasks in general</p>
            </div>
            <input
              type="radio"
              {...register("difficulty", { required: true })}
              name="difficulty"
              value="Entry level"
              id="entry-level"
            />
          </label>
          <label
            htmlFor="intermediate"
            className={watch("difficulty") === "Intermediate" ? "active" : ""}
          >
            <div className="radio-info">
              <WorkspacesIcon />
              <h2>Intermediate</h2>
              <p>
                Average difficulty tasks, somebody with a little bit of
                experience can solve them easily
              </p>
            </div>
            <input
              type="radio"
              {...register("difficulty", { required: true })}
              name="difficulty"
              value="Intermediate"
              id="intermediate"
            />
          </label>
          <label
            htmlFor="expert"
            className={watch("difficulty") === "Expert" ? "active" : ""}
          >
            <div className="radio-info">
              <WorkspacesIcon />
              <h2>Expert</h2>
              <p>Hard tasks to complish</p>
            </div>
            <input
              type="radio"
              {...register("difficulty", { required: true })}
              name="difficulty"
              value="Expert"
              id="expert"
            />
          </label>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              navigate("/post-job/skills");
            }}
          >
            Back
          </button>
          <button>
            Next: <span>Last Details</span>
          </button>
        </div>
      </form>
    </div>
  );
}
