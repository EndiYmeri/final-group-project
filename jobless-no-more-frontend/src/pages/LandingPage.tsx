import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Intro from "../Components/Intro/Intro";
import { User } from "../types";

type Props = {
  user?: User;
};

export default function LandingPage({ user }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  return <Intro />;
}
