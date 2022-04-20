import { SubmitHandler, useForm } from "react-hook-form";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ScheduleIcon from "@mui/icons-material/Schedule";
import "./PostJobGettingStarted.css";
import { Job } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  duration: "Short Term / Part Time" | "Long Term / Dedicated";
};

export default function PostJobGettingStarted({ newJob, setNewJob }: Props) {
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
      duration: data.duration,
    });
    navigate("/post-job/title");
  };

  return (
    <div className="getting-started">
      <h1>Getting Started</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label
            htmlFor="short-term"
            className={
              watch("duration") === "Short Term / Part Time" ? "active" : ""
            }
          >
            <div className="radio-info">
              <ScheduleIcon />
              <h2>Short Term / Part Time</h2>
              <p>
                Short term or part time work Less than 30 hrs/week Less than 3
                months
              </p>
            </div>
            <input
              type="radio"
              {...register("duration", { required: true })}
              name="duration"
              value="Short Term / Part Time"
              id="short-term"
            />
          </label>
          <label
            htmlFor="long-term"
            className={
              watch("duration") === "Long Term / Dedicated" ? "active" : ""
            }
          >
            <div className="radio-info">
              <DateRangeIcon />
              <h2>Long Term / Dedicated</h2>
              <p>More than 30 hrs/week 3+ months</p>
            </div>
            <input
              type="radio"
              {...register("duration", { required: true })}
              name="duration"
              value="Long Term / Dedicated"
              id="long-term"
            />
          </label>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              navigate("/client");
            }}
          >
            Cancel
          </button>
          <button>
            Next: <span>Title</span>
          </button>
        </div>
      </form>
    </div>
  );
}
