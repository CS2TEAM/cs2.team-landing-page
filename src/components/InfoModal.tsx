import { useEffect, useRef } from "react";
import { FaSteam, FaTimes } from "react-icons/fa"; // Added FaSteam

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-2xl bg-slate-300 p-6 shadow-inner shadow-slate-200 transition-all"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FaSteam className="text-2xl text-slate-800" />
            <h2 className="text-xl font-semibold text-slate-900">
              Is Steam Sign-In Safe?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-left text-sm text-slate-700">
          <p>
            Steam sign in allows us to verify your Steam account. When signing
            in with Steam, it uses{" "}
            <strong>Steam's official OAuth system</strong>, meaning your
            password is never shared with us.
          </p>

          <p>
            This method is commonly used by trusted services like FACEIT and
            Dotabuff.
          </p>

          <ul className="list-outside list-disc space-y-1 pl-5">
            <li>
              We only receive basic public information (SteamID, avatar, display
              name)
            </li>
            <li>No access to your private data or password</li>
            <li>Login is fast and convenient, no account creation required</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
