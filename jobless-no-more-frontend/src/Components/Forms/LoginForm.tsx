import { SubmitHandler, useForm } from "react-hook-form";
import "./LoginForm.css";

type Inputs = {
  email: string;
  password: string;
};

type Props = {
  submitFunc: Function;
};

export default function LoginForm({ submitFunc }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submitFunc(data);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            aria-hidden="true"
            role="img"
            className="user-icon"
          >
            <path d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <input type={"email"} {...register("email", { required: true })} />
        </label>
        <label htmlFor="password">
          <input
            type={"password"}
            {...register("password", { required: true })}
            id="password"
          />
        </label>

        <input
          className="submit-button"
          type="submit"
          value={"Log in with email"}
          id="email"
        />
      </form>
    </>
  );
}
