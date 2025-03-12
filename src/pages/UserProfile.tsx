import { useEffect, useState } from "react";
import { FaSteam, FaUserEdit } from "react-icons/fa";
import "../assets/styles/countryFlag.css";
import Button from "../components/Button";
import EditProfile from "../components/EditProfile";
import { User } from "../types";
import { getCountryFlag } from "../utils/getCountryFlag";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [region, setRegion] = useState(user.countryCode);
  const [bio, setBio] = useState("");
  const { countryFlag } = getCountryFlag(region);

  useEffect(() => {
    document.title = `${displayName} | CS2.TEAM`;

    return () => {
      document.title = "CS2.TEAM - Esports Team Finder";
    };
  }, [displayName]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (
    newDisplayName: string,
    newRegion: string,
    newBio: string,
  ) => {
    setDisplayName(newDisplayName);
    setRegion(newRegion);
    setBio(newBio);
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-blue-400">
          <img
            src={user.avatar}
            alt={`${displayName}'s Avatar`}
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
              {displayName}
            </p>
            <FaSteam
              size={20}
              className="text-slate-300 transition-colors duration-300 group-hover:text-slate-100"
            />
          </a>
          {countryFlag && <span className={`countryFlag ${countryFlag}`} />}
        </div>
        <div className="flex gap-2">
          <Button
            text="Edit player profile"
            icon={<FaUserEdit />}
            iconPosition="right"
            onClick={handleEditClick}
          />
        </div>
      </div>

      {isEditing && (
        <EditProfile
          initialDisplayName={displayName}
          initialRegion={region}
          initialBio={bio}
          onSave={handleSaveProfile}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
