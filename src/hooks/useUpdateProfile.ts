import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApiUrl } from "../utils/env";
import useAuth from "./useAuth";

const API_URL = getApiUrl();

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: async (
      updateData: Partial<{
        displayName: string;
        countryCode: string;
        bio: string;
        referral: string;
      }>,
    ) => {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("User not authenticated");

      if (!user?.steamId) {
        throw new Error("Unable to verify user identity.");
      }

      const response = await fetch(`${API_URL}/profile/update`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      return response.json();
    },
    onSuccess: async () => {
      console.log("✅ Profile updated successfully");
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      await queryClient.refetchQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("❌ Error updating profile:", error);
    },
  });

  return mutation;
};

export default useUpdateProfile;
