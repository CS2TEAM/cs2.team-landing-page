import "../assets/styles/countryFlag.css";
import { User } from "../types";
import { getCountryFlag } from "../utils/getCountryFlag";

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  const countryCodeClass = getCountryFlag(user.countryCode);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <a
          href={`https://steamcommunity.com/profiles/${user.steamId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-1"
        >
          <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-blue-400">
            <img
              src={user.avatar}
              alt={`${user.displayName}'s Avatar`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-center text-lg font-semibold text-slate-100 transition-all duration-300 group-hover:underline">
              {user.displayName}
            </p>
            {countryCodeClass && (
              <span className={`countryFlag ${countryCodeClass}`} />
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
