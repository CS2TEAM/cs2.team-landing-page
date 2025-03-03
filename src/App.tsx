import CS2TeamLogo from "./components/CS2TeamLogo";
import SignIn from "./components/SignIn";
import Spinner from "./components/Spinner";
import UserProfile from "./components/UserProfile";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  const { user, login, logout, loading } = useAuth();

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
      <section className="flex h-screen w-full flex-col items-center justify-center gap-6 px-6 text-center sm:px-10">
        <CS2TeamLogo className="h-20 sm:h-24" />
        <p className="max-w-xl text-base text-gray-300 sm:text-lg">
          Esports team finding platform and social network for Counter-Strike 2,
          enabling aspiring players to find teams or create their own.
        </p>
        {loading ? (
          <Spinner />
        ) : user ? (
          <UserProfile user={user} logout={logout} />
        ) : (
          <SignIn login={login} />
        )}
      </section>
    </div>
  );
};

export default App;
