// hooks/useAdminAuth.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkAdminSession, loginAdmin, registerAdmin } from "@/services/admin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { IUser } from "@/lib/types";

export const useRegisterAdmin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { checkAdmin } = useAuth();

  return useMutation({
    mutationFn: registerAdmin,
    onSuccess: async (data) => {
      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        await checkAdmin();
        queryClient.invalidateQueries({ queryKey: ["admin"] });
        toast.success("Admin account created successfully");
        navigate("/dashboard");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useLoginAdmin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { checkAdmin, login } = useAuth();

  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: async (data) => {
      if (data.success && data.token && data.user) {
        localStorage.setItem("token", data.token);
        const nameParts = data.user.name ? data.user.name.split(" ") : ["", ""];
        const userData: IUser = {
          id: data.user.id,
          firstName: nameParts[0] ?? "",
          lastName: nameParts.slice(1).join(" ") ?? "",
          email: data.user.email,
          role: data.user.role,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        await login(userData, data.token);
        await checkAdmin();
        queryClient.invalidateQueries({ queryKey: ["admin"] });
        toast.success("Logged in successfully");
        navigate("/dashboard", { replace: true });
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useAdminSession = () => {
  return useQuery({
    queryKey: ["admin-session"],
    queryFn: checkAdminSession,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
