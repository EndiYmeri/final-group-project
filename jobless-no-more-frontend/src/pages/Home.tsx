import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClientDashboard from "../Components/ClientDashboard";
import JobComponent from "../Components/JobComponent/JobComponent";
import UserFreelancer from "../Components/UserFreelancer/UserFreelancer";
import { User } from "../types";
import Client from "./Client";
import Freelancer from "./Freelancer";

type Props = {
  user: User;
};

export default function Home({ user }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    user.type === "freelancer" ? navigate("/freelancer") : navigate("/client");
  });
  return <></>;
}
