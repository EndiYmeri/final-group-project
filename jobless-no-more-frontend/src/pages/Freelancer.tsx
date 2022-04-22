import UserFreelancer from "../Components/UserFreelancer/UserFreelancer";
import { User } from "../types";

type Props = {
  user: User;
  setUser: Function;
};

export default function Freelancer({ user, setUser }: Props) {
  return <UserFreelancer setUser={setUser} user={user} />;
}
