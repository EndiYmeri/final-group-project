import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./LoginForm.css";

type Inputs = {
  email: string;
  password: string;
  userType: "client" | "freelancer";
};

type Props = {
  submitFunc: Function;
};

export default function LoginForm({ submitFunc }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submitFunc(data);
    console.log(data, getFieldState("userType"));
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
          <input
            type={"email"}
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        <label htmlFor="password">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 203.096 203.096"
            className="password-icon"
            // style="enable-background:new 0 0 203.096 203.096;"
            // xml:space="preserve"
          >
            <g>
              <path
                d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12
		c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736
		C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15
		c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12
		c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z"
              />
              <path
                d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715
		C109.047,119.666,105.689,116.309,101.547,116.309z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <input
            type={"password"}
            placeholder="Password"
            {...register("password", { required: true })}
            id="password"
          />
        </label>
        <p>
          Login as:
          {errors.userType && (
            <span className="error">This field is required</span>
          )}{" "}
        </p>
        <div className="userTypeRadio">
          <label
            htmlFor="freelancerButton"
            className={watch("userType") === "freelancer" ? "active" : ""}
          >
            Freelancer
            <input
              type="radio"
              id="freelancerButton"
              value="freelancer"
              {...register("userType", { required: true })}
            />
          </label>
          <label
            htmlFor="clientButton"
            className={watch("userType") === "client" ? "active" : ""}
          >
            Client
            <input
              type="radio"
              {...register("userType", { required: true })}
              id="clientButton"
              value="client"
            />
          </label>
        </div>

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
