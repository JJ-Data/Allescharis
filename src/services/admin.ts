import axiosInstance from "./axiosInstance";
import axios from "axios";

export const getAdminStats = async (): Promise<AdminAuthResponse> => {
  try {
    const response = await axiosInstance.get("/admin/stats");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch stats");
    }
    throw new Error("Failed to fetch stats");
  }
};

export const getAdminUsers = async (): Promise<AdminAuthResponse> => {
  try {
    const response = await axiosInstance.get("/admin/users");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch users");
    }
    throw new Error("Failed to fetch users");
  }
};

export interface AdminAuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: "USER" | "ADMIN";
  };
}

export const registerAdmin = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<AdminAuthResponse> => {
  try {
    const response = await axiosInstance.post("/auth/register-admin", {
      ...userData,
      role: "ADMIN",
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Admin registration failed!"
      );
    }
    throw new Error("Admin registration failed");
  }
};

export const loginAdmin = async (credentials: {
  email: string;
  password: string;
}): Promise<AdminAuthResponse> => {
  try {
    const response = await axiosInstance.post("/auth/login-admin", credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Admin login failed!");
    }
    throw new Error("Admin login failed");
  }
};

export const checkAdminSession = async (): Promise<AdminAuthResponse> => {
  try {
    const response = await axiosInstance.get("/auth/check-admin-session");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Session check failed");
    }
    throw new Error("Session check failed");
  }
};
