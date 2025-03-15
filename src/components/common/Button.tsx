interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  alt?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
  className = "",
  icon,
  iconPosition = "left",
  alt,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-none bg-slate-300 px-4 py-2 font-semibold text-slate-800 shadow-inner shadow-slate-200 transition duration-300 hover:bg-slate-200 hover:shadow-slate-100 focus:outline-2 focus:outline-offset-2 focus:outline-slate-400 hover:focus:outline-slate-300 active:scale-95 ${className}`}
      aria-label={text || alt}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="text-lg">{icon}</span>
      )}
      {text && <span className="text-sm">{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="text-lg">{icon}</span>
      )}
    </button>
  );
};

export default Button;
