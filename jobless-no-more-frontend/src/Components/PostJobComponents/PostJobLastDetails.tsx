import { SubmitHandler, useForm } from "react-hook-form";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ScheduleIcon from "@mui/icons-material/Schedule";
import "./PostJobDetails.css";
import { Job } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  newJob?: Job;
  setNewJob: Function;
};
type Inputs = {
  content: string;
  location: string;
  payment: number;
  paymentType: "hourly" | "fixed";
};

export default function PostJobLastDetails({ newJob, setNewJob }: Props) {
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
      content: data.content,
      location: data.location,
      payment: data.payment,
      paymentType: data.paymentType,
    });
    navigate("/post-job/job-preview");
  };

  return (
    <div className="last-details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Content"
          {...register("content", { required: true })}
          name="content"
        />
        <input
          type="text"
          placeholder="Location"
          {...register("location", { required: true })}
        />
        <div className="labels">
          <label htmlFor="hourly">
            Hourly
            <input
              type="radio"
              placeholder="Location"
              {...register("paymentType", { required: true })}
              name="paymentType"
              id="hourly"
              value={"hourly"}
            />
          </label>
          <label htmlFor="fixed">
            Fixed Price
            <input
              type="radio"
              placeholder="Location"
              {...register("paymentType", { required: true })}
              name="paymentType"
              id="fixed"
              value={"fixed"}
            />
          </label>
        </div>
        <input
          placeholder="Payment"
          type="number"
          {...register("payment")}
          name="payment"
          id="payment"
        />
        <div className="buttons">
          <button
            onClick={() => {
              navigate("/post-job/difficulty");
            }}
          >
            Back
          </button>
          <button type="submit">Finish</button>
        </div>
      </form>
    </div>
  );
}
