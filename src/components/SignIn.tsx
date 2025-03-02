import { FaSteam } from "react-icons/fa";
import Button from "./common/Button";

interface SignInProps {
  login: () => void;
}

const SignIn: React.FC<SignInProps> = ({ login }) => {
  return (
    <Button onClick={login} text="Sign in with Steam" icon={<FaSteam />} />
  );
};

export default SignIn;
