import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

type Props = {
  user?: User;
};

export default function LandingPage({ user }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, []);

  return <h1>LANDING PAGE</h1>;
}
