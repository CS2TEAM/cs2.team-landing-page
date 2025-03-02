import { useRef, useState } from "react";
import CountUp from "react-countup";
import {
  FaChevronDown,
  FaComments,
  FaInfoCircle,
  FaSearch,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import CS2TeamLogo from "../components/CS2TeamLogo";
import FeatureCard from "../components/FeatureCard";
import InfoModal from "../components/InfoModal";
import SignIn from "../components/SignIn";
import Socials, { Social } from "../components/Socials";
import Spinner from "../components/Spinner";
import { useUserCount } from "../hooks/useUserCount";
import { User } from "../types";

interface HomeProps {
  user: User | null;
  login: () => void;
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ user, login, loading }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const socials: Social[] = [
    { platform: "x", username: "CS2TEAM" },
    { platform: "discord", username: "XfZHVfPr9C" },
    { platform: "instagram", username: "CS2TEAM" },
    { platform: "linkedin", username: "CS2TEAM" },
  ];

  const featureRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data: userCount, isLoading: userCountLoading } = useUserCount();

  const isLoading = loading || userCountLoading;

  if (user) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <section className="flex h-screen w-full flex-col items-center justify-center gap-6 px-6 text-center sm:px-10">
        <CS2TeamLogo className="h-20 sm:h-24" />
        <p className="max-w-xl font-[Stratum2] text-base text-slate-300 sm:text-lg">
          Esports team-finding platform for Counter-Strike 2,
          enabling aspiring players to find teams or create their own.
        </p>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col gap-2 font-medium text-white">
            {userCount === undefined || userCount === null ? (
              <div className="flex items-start gap-2 text-red-400">
                <FaInfoCircle className="mt-1 text-lg" />
                <div>
                  <p>Unable to connect to CS2.TEAM services.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="relative flex items-center justify-center gap-2">
                  <SignIn login={login} />
                  <button
                    className="absolute right-[-32px] cursor-pointer text-2xl text-slate-400 transition hover:text-slate-300"
                    onClick={() => setShowInfoModal(true)}
                    aria-label="More info about Steam sign-in"
                  >
                    <IoMdInformationCircleOutline />
                  </button>
                </div>
                <InfoModal
                  isOpen={showInfoModal}
                  onClose={() => setShowInfoModal(false)}
                />

                {userCount > 0 && (
                  <p className="font-[Stratum2]">
                    Join{" "}
                    <span className="text-[#FF8100]">
                      <CountUp end={userCount} duration={2} separator="," />
                    </span>{" "}
                    other players
                  </p>
                )}
              </>
            )}
          </div>
        )}

        <Socials socials={socials} />

        <button
          onClick={scrollToFeatures}
          className="absolute bottom-12 flex animate-bounce cursor-pointer flex-col items-center text-slate-300"
        >
          <FaChevronDown className="text-2xl" />
        </button>
      </section>

      <section
        ref={featureRef}
        className="w-full max-w-4xl px-6 py-16 text-center sm:px-10"
      >
        <h2 className="font-[Stratum2] text-2xl font-semibold text-white sm:text-3xl">
          Why Join CS2.TEAM?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<FaUsers />}
            title="Find Your Team"
            description="Connect with players of similar skill levels and join teams suited to your playstyle."
          />
          <FeatureCard
            icon={<FaSearch />}
            title="Advanced Player Search"
            description="Filter players by rank, region, and roles to find the perfect teammates."
          />
          <FeatureCard
            icon={<FaTrophy />}
            title="Compete & Rank Up"
            description="Participate in ranked matches and tournaments to improve your game."
          />
          <FeatureCard
            icon={<FaComments />}
            title="Community & Networking"
            description="Engage in discussions, share strategies, and grow your esports connections."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
