import { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../components/Button";
import { countryMap } from "../utils/getCountryFlag";

interface EditProfileProps {
  initialDisplayName: string;
  initialRegion: string;
  initialBio: string;
  onSave: (displayName: string, region: string, bio: string) => void;
  onCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
  initialDisplayName,
  initialRegion,
  initialBio,
  onSave,
  onCancel,
}) => {
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [region, setRegion] = useState(initialRegion);
  const [bio, setBio] = useState(initialBio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(displayName, region, bio);
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-slate-800 p-4 shadow-md">
      <h3 className="mb-3 text-lg font-semibold text-white">Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <label className="mb-1 block text-sm text-white">Username</label>
        <input
          type="text"
          className="mb-3 w-full rounded-md border bg-slate-700 p-2 text-white"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <label className="mb-1 block text-sm text-white">Region</label>
        <select
          className="mb-3 w-full rounded-md border bg-slate-700 p-2 text-white"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {Object.entries(countryMap).map(([code, { countryName }]) => (
            <option key={code} value={code}>
              {countryName}
            </option>
          ))}
        </select>

        <label className="mb-1 block text-sm text-white">Bio</label>
        <textarea
          className="mb-3 w-full rounded-md border bg-slate-700 p-2 text-white"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <div className="flex gap-2">
          <Button text="Save changes" className="w-full" type="submit" />
          <Button icon={<MdClose />} type="button" onClick={onCancel} />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
