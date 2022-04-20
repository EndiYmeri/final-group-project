import UserFreelancer from "../Components/UserFreelancer/UserFreelancer";
import { User } from "../types";

type Props = {
  user: User;
};

export default function Freelancer({ user }: Props) {
  return <UserFreelancer user={user} />;
}
