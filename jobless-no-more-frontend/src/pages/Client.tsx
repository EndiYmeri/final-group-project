import ClientDashboard from "../Components/ClientDashboard";
import { User } from "../types";
type Props = {
  user: User;
};
export default function Client({ user }: Props) {
  return <ClientDashboard user={user} />;
}
