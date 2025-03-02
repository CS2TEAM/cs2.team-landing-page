import SignIn from "./components/SignIn";
import Spinner from "./components/Spinner";
import UserProfile from "./components/UserProfile";
import useAuth from "./hooks/useAuth";

function App() {
  const { user, login, logout, loading } = useAuth();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
      {loading ? (
        <Spinner />
      ) : user ? (
        <UserProfile user={user} logout={logout} />
      ) : (
        <SignIn login={login} />
      )}
    </div>
  );
}

export default App;
