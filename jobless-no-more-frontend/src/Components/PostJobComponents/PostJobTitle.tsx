import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Job } from "../../types";
import LinearProgressWithLabel from "../MaterialComp/LinearProgressLabeled";
import HelpingInfo from "./HelpingInfo";
import "./PostJobDetails.css";
type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  title: string;
};

export default function PostJobTitle({ newJob, setNewJob }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setNewJob({
      ...newJob,
      title: data.title,
    });
    navigate("/post-job/category");
  };

  return (
    <div className="title">
      <h1>Lets start with a strong title</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="helping-info">
          <LinearProgressWithLabel value={20} />
          <HelpingInfo />
        </div>
        <div>
          <label htmlFor="title">
            <p> Write a title for your job post </p>
            <input
              type="text"
              {...register("title", { minLength: 20, required: true })}
              name="title"
              id="title"
            />
            {errors.title && (
              <span>Title length is too short - min 20 letters</span>
            )}
            <ul>
              Example Titles:
              <li>
                Build responsive WordPress site with booking/payment
                functionality
              </li>
              <li>
                Graphic designer needed to design ad creative for multiple
                campaigns
              </li>
              <li>Facebook ad specialist needed for product launch</li>
            </ul>
          </label>
          <div className="buttons">
            <button
              onClick={() => {
                navigate("/post-job/getting-started");
              }}
            >
              Cancel
            </button>
            <button type="submit">
              Next: <span>Category</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
