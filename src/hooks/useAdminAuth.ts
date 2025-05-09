// hooks/useAdminAuth.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkAdminSession, loginAdmin, registerAdmin } from "@/services/admin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

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
        navigate("/admin/dashboard");
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
  const { checkAdmin } = useAuth();

  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: async (data) => {
      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        await checkAdmin();
        queryClient.invalidateQueries({ queryKey: ["admin"] });
        toast.success("Logged in successfully");
        navigate("/admin/dashboard");
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
