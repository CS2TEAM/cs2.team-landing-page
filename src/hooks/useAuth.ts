import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { getApiUrl } from "../utils/env";

const API_URL = getApiUrl();

const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken"),
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newToken = urlParams.get("token");

    if (newToken) {
      localStorage.setItem("authToken", newToken);
      setToken(newToken);
      setTimeout(() => {
        navigate(window.location.pathname, { replace: true });
      }, 500);
    }
  }, [navigate]);

  const {
    data: user,
    isLoading: loading,
    isError,
  } = useQuery<User | null>({
    queryKey: ["user", token],
    queryFn: async () => {
      if (!token) return null;

      const res = await fetch(`${API_URL}/profile/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401) {
        console.warn("⚠️ Token is invalid or expired.");
        throw new Error("Unauthorized");
      }

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      return data.user;
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: async () => {
      if (!API_URL) {
        return;
      }

      window.location.href = `${API_URL}/auth/steam`;
      return Promise.resolve();
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      localStorage.removeItem("authToken");
      setToken(null);
      queryClient.setQueryData(["user"], null);
      navigate("/", { replace: true });
      return Promise.resolve();
    },
  });

  return {
    user,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    loading,
    isError,
  };
};

export default useAuth;
