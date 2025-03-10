interface CS2TeamLogoProps {
  className?: string;
}

const CS2TeamLogo: React.FC<CS2TeamLogoProps> = ({ className }) => {
  return (
    <img
      src="/assets/images/cs2team-title-dark.png"
      alt="CS2.TEAM"
      className={`${className}`}
    />
  );
};

export default CS2TeamLogo;
