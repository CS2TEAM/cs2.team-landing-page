import { FaSignOutAlt } from "react-icons/fa";
import Button from "./Button";

interface UserProfileProps {
  user: {
    displayName: string;
    avatar: string;
  };
  logout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, logout }) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-slate-800 p-6 shadow-lg">
      <h2 className="text-center text-lg font-semibold text-white">
        Thanks for joining <span className="text-[#FF8100]">CS2.TEAM</span>
      </h2>

      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={`${user.displayName}'s Avatar`}
          width={80}
          height={80}
          className="rounded-full border-2 border-blue-400"
        />
        <p className="mt-2 text-center text-lg font-semibold text-white">
          {user.displayName}
        </p>
      </div>

      <div className="flex justify-end">
        <Button onClick={logout} icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
};

export default UserProfile;
