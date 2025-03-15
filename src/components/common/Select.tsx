interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-sm text-white">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full rounded border border-slate-600 bg-slate-800 p-2 text-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
