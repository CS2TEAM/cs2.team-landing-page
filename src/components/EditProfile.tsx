import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import ReferralDropdown from "../components/ReferralDropdown";
import { countryMap } from "../utils/getCountryFlag";
import Button from "./common/Button";
import TextArea from "./common/TextArea";
import TextInput from "./common/TextInput";

interface EditProfileProps {
  initialDisplayName: string;
  initialRegion: string;
  initialBio: string;
  initialReferral: string;
  onSave: (
    displayName: string,
    region: string,
    bio: string,
    referral: string,
  ) => void;
  onCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
  initialDisplayName,
  initialRegion,
  initialBio,
  initialReferral,
  onSave,
  onCancel,
}) => {
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [region, setRegion] = useState(initialRegion);
  const [bio, setBio] = useState(initialBio);
  const [referralSource, setReferralSource] = useState(initialReferral);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(displayName, region, bio, referralSource);
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-slate-800 p-4 shadow-md">
      <h3 className="mb-3 text-lg font-semibold text-white">Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextInput
            label="Username"
            value={displayName}
            onChange={setDisplayName}
          />
        </div>

        <label className="mb-1 block text-sm text-white">Region</label>
        <select
          className="mb-3 w-full rounded border border-slate-600 bg-slate-800 p-2 text-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {Object.entries(countryMap).map(([code, { countryName }]) => (
            <option key={code} value={code}>
              {countryName}
            </option>
          ))}
        </select>
        <div className="mb-3">
          <TextArea
            label="Bio"
            value={bio}
            onChange={setBio}
            placeholder="Tell us about you..."
          />
        </div>

        <ReferralDropdown
          initialReferral={referralSource}
          onChange={setReferralSource}
        />

        <div className="mt-4 flex gap-2">
          <Button icon={<MdClose />} type="button" onClick={onCancel} />
          <Button
            icon={<FaCheck />}
            text="Save changes"
            className="w-full"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
