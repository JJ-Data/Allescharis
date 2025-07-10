import axiosInstance from "./axiosInstance";
import axios from "axios";

export interface UsersResponse {
  success: boolean;
  data: {
    users: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    }[];
  };
}

export const getAllUsers = async (): Promise<UsersResponse> => {
  try {
    const response = await axiosInstance.get("/api/users");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch users");
    }
    throw new Error("Failed to fetch users");
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/api/users/${userId}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to delete user");
    }
    throw new Error("Failed to delete user");
  }
};

export const updateUser = async (
  userId: string,
  data: Partial<{ firstName: string; lastName: string; role: string }>
): Promise<void> => {
  try {
    await axiosInstance.put(`/api/users/${userId}`, data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to update user");
    }
    throw new Error("Failed to update user");
  }
};
