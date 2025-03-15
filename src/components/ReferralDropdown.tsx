import { useState } from "react";
import Select from "./common/Select";
import TextInput from "./common/TextInput";

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
    { value: "Friend", label: "Friend" },
    { value: "Reddit", label: "Reddit" },
    { value: "X", label: "X" },
    { value: "Discord", label: "Discord" },
    { value: "Instagram", label: "Instagram" },
    { value: "YouTube", label: "YouTube" },
    { value: "Internet Search", label: "Internet Search" },
    { value: "Other", label: "Other" },
  ];

  const handleChange = (value: string) => {
    setSelectedReferral(value);
    onChange(value === "Other" ? customReferral.trim() : value);
  };

  return (
    <div className="flex flex-col gap-2">
      <Select
        label="How did you find CS2.TEAM?"
        value={selectedReferral}
        onChange={handleChange}
        options={referralOptions}
      />

      {selectedReferral === "Other" && (
        <TextInput
          placeholder="How did you find CS2.TEAM?"
          value={customReferral}
          onChange={(value) => {
            setCustomReferral(value);
            onChange(value.trim());
          }}
        />
      )}
    </div>
  );
};

export default ReferralDropdown;
