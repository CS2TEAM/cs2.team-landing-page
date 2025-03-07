import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { user, login, loading } = useAuth();

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
      <Home user={user ?? null} login={login} loading={loading} />
    </div>
  );
};

export default App;
