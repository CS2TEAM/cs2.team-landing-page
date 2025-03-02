import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export interface Social {
  platform: "x" | "discord" | "instagram" | "linkedin";
  username: string;
}

const socialPlatforms = {
  x: {
    url: "https://x.com/",
    icon: <FaXTwitter />,
  },
  discord: {
    url: "https://discord.com/invite/",
    icon: <FaDiscord />,
  },
  instagram: {
    url: "https://instagram.com/",
    icon: <FaInstagram />,
  },
  linkedin: {
    url: "https://linkedin.com/company/",
    icon: <FaLinkedin />,
  },
};

const Socials: React.FC<{ socials: Social[] }> = ({ socials }) => {
  return (
    <div className="flex gap-4">
      {socials.map(({ platform, username }) => {
        const { url, icon } = socialPlatforms[platform];
        return (
          <a
            key={platform}
            href={`${url}${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-300 transition hover:text-[#FF8100]"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
