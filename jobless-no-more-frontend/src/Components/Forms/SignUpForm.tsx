import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./SignUpForm.css";
import { CountryDropdown } from "react-country-region-selector";

type Inputs = {
  firstName: string;
  lastName: string;
  location: String;
  email: string;
  password: string;
};

type Props = {
  submitFunc: Function;
};

export default function SignUpForm({ submitFunc }: Props) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.location = selectedCountry;
    submitFunc(data);
    console.log(data);
  };

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            name="firstName"
            id="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            name="lastName"
            id="lastName"
          />
        </div>
        <input
          type={"email"}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type={"password"}
          placeholder="Password"
          {...register("password", { required: true })}
          id="password"
        />
        <CountryDropdown
          value={selectedCountry}
          onChange={(val) => setSelectedCountry(val)}
          // @ts-ignore
          style={{
            padding: "0.5rem",
            outline: "none",
          }}
        />

        <input
          className="submit-button"
          type="submit"
          value={"Sign up with email"}
          id="email"
        />
      </form>
    </>
  );
}
