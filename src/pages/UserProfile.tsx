import { useEffect, useState } from "react";
import { FaCheckCircle, FaSteam, FaUserEdit } from "react-icons/fa";
import "../assets/styles/countryFlag.css";
import Button from "../components/common/Button";
import EditProfile from "../components/EditProfile";
import useAuth from "../hooks/useAuth";
import { getCountryFlag } from "../utils/getCountryFlag";

const UserProfile = () => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [region, setRegion] = useState(user.countryCode);
  const [bio, setBio] = useState(user.bio ?? "");
  const [referralSource, setReferralSource] = useState(user.referral ?? "");

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
    newBio?: string,
    newReferral?: string,
  ) => {
    setDisplayName(newDisplayName);
    setRegion(newRegion);
    setBio(newBio ?? "");
    setReferralSource(newReferral ?? "");
    setIsEditing(false);
  };

  const formattedJoinDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(user.createdAt));

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
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <a
              href={`https://steamcommunity.com/profiles/${user.steamId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <p className="text-center text-lg font-semibold text-slate-300 transition-all duration-300 group-hover:text-slate-100 group-hover:underline">
                {displayName}
              </p>
              <FaSteam className="text-xl text-slate-300 transition-colors duration-300 group-hover:text-slate-100" />
            </a>
            {user.isVerified && (
              <FaCheckCircle
                className="text-xl text-[#FF8100]"
                title="Verified"
              />
            )}
            {countryFlag && <span className={`countryFlag ${countryFlag}`} />}
          </div>

          <p className="text-sm text-slate-400">
            Member since {formattedJoinDate}
          </p>
        </div>

        <div className="w-full text-center">
          {bio ? (
            <div className="rounded-lg bg-slate-800 px-4 py-3 shadow-inner shadow-slate-900">
              <p className="text-sm whitespace-pre-wrap text-slate-200 italic">
                {bio}
              </p>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="w-full cursor-pointer rounded-lg border border-dashed border-slate-500 px-4 py-2 text-sm text-slate-400 transition hover:border-slate-400 hover:text-slate-200"
            >
              + Add a bio
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            text="Edit player profile"
            icon={<FaUserEdit />}
            onClick={handleEditClick}
          />
        </div>
      </div>

      {isEditing && (
        <EditProfile
          initialDisplayName={displayName}
          initialRegion={region}
          initialBio={bio}
          initialReferral={referralSource}
          onSave={handleSaveProfile}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
