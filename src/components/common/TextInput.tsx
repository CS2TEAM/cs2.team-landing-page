interface TextInputProps {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-sm text-white">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded border border-slate-600 bg-slate-800 p-2 text-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
};

export default TextInput;
