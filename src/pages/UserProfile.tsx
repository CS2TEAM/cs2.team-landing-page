import { useEffect } from "react";
import { FaSignOutAlt, FaSteam, FaUserEdit } from "react-icons/fa";
import "../assets/styles/countryFlag.css";
import Button from "../components/Button";
import { User } from "../types";
import { getCountryFlag } from "../utils/getCountryFlag";

interface UserProfileProps {
  user: User;
  logout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, logout }) => {
  const countryCodeClass = getCountryFlag(user.countryCode);

  useEffect(() => {
    document.title = `${user.displayName} | CS2.TEAM`;

    return () => {
      document.title = "CS2.TEAM - Esports Team Finder";
    };
  }, [user.displayName]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-blue-400">
          <img
            src={user.avatar}
            alt={`${user.displayName}'s Avatar`}
            className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://steamcommunity.com/profiles/${user.steamId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
          >
            <p className="text-center text-lg font-semibold text-slate-300 transition-all duration-300 group-hover:text-slate-100 group-hover:underline">
              {user.displayName}
            </p>
            <FaSteam
              size={20}
              className="text-slate-300 transition-colors duration-300 group-hover:text-slate-100"
            />
          </a>
          {countryCodeClass && (
            <span className={`countryFlag ${countryCodeClass}`} />
          )}
        </div>
        <div className="flex gap-2">
          <Button
            text="Edit player profile"
            icon={<FaUserEdit />}
            iconPosition="right"
          />
          <Button onClick={logout} icon={<FaSignOutAlt />} alt="Log out" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
