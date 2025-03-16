import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const App: React.FC = () => {
  const { user, login, logout, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/logout") {
      logout();
    }
  }, [location.pathname, logout]);

  return (
    <main className="flex flex-col items-center">
      {user ? (
        <UserProfile />
      ) : (
        <Home user={null} login={login} loading={loading} />
      )}
    </main>
  );
};

export default App;
