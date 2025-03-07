import CS2TeamLogo from "../components/CS2TeamLogo";
import SignIn from "../components/SignIn";
import Socials, { Social } from "../components/Socials";
import Spinner from "../components/Spinner";
import UserProfile from "../components/UserProfile";
import { User } from "../types";

interface HomeProps {
  user: User | null;
  login: () => void;
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ user, login, loading }) => {
  const socials: Social[] = [
    { platform: "x", username: "CS2TEAM" },
    { platform: "discord", username: "XfZHVfPr9C" },
    { platform: "instagram", username: "CS2TEAM" },
    { platform: "linkedin", username: "CS2TEAM" },
  ];

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-6 px-6 text-center sm:px-10">
      <CS2TeamLogo className="h-20 sm:h-24" />
      <p className="max-w-xl text-base text-slate-300 sm:text-lg">
        Esports team finding platform and social network for Counter-Strike 2,
        enabling aspiring players to find teams or create their own.
      </p>
      {loading ? (
        <Spinner />
      ) : user ? (
        <UserProfile user={user} />
      ) : (
        <SignIn login={login} />
      )}
      <Socials socials={socials} />
    </section>
  );
};

export default Home;
