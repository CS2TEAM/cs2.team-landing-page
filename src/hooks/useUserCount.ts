import { useQuery } from "@tanstack/react-query";

const API_URL =
  import.meta.env.VITE_ENV === "production"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;

export const useUserCount = () => {
  return useQuery<number>({
    queryKey: ["userCount"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/users/count`);
      if (!res.ok) throw new Error("Failed to fetch user count");

      const data = await res.json();
      return data.userCount;
    },
    staleTime: 1000 * 60 * 5,
  });
};
