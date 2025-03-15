import { useState } from "react";

interface ReferralDropdownProps {
  initialReferral: string;
  onChange: (referral: string) => void;
}

const ReferralDropdown: React.FC<ReferralDropdownProps> = ({
  initialReferral,
  onChange,
}) => {
  const [selectedReferral, setSelectedReferral] = useState(initialReferral);
  const [customReferral, setCustomReferral] = useState("");

  const referralOptions = [
    "Friend",
    "Reddit",
    "X",
    "Discord",
    "Instagram",
    "YouTube",
    "Internet Search",
    "Other",
  ];

  const handleChange = (value: string) => {
    setSelectedReferral(value);
    onChange(value === "Other" ? customReferral.trim() : value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-300">How did you find CS2.TEAM?</label>
      <select
        value={selectedReferral}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded border border-slate-600 bg-slate-800 p-2 text-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {referralOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {selectedReferral === "Other" && (
        <input
          type="text"
          placeholder="How did you find CS2.TEAM?"
          value={customReferral}
          onChange={(e) => {
            setCustomReferral(e.target.value);
            onChange(e.target.value.trim());
          }}
          className="rounded border border-slate-600 bg-slate-800 p-2 text-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      )}
    </div>
  );
};

export default ReferralDropdown;
