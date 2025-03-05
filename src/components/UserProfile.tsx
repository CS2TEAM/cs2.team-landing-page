interface UserProfileProps {
  user: {
    steamId: string;
    displayName: string;
    avatar: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <a
          href={`https://steamcommunity.com/profiles/${user.steamId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-blue-400">
            <img
              src={user.avatar}
              alt={`${user.displayName}'s Avatar`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="mt-1 text-center text-lg font-semibold text-slate-100 transition-all duration-300 group-hover:underline">
            {user.displayName}
          </p>
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
