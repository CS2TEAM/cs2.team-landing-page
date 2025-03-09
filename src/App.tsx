import UserProfile from "./pages/UserProfile";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { user, login, logout, loading } = useAuth();

  return (
    <main className="flex flex-col items-center">
      {user ? (
        <UserProfile user={user} logout={logout} />
      ) : (
        <Home user={null} login={login} loading={loading} />
      )}
    </main>
  );
};

export default App;
