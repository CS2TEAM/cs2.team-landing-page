import { FaSteam } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
      <Button text="Sign In" icon={<FaSteam />} />
    </div>
  );
}

export default App;
