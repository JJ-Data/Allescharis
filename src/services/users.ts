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
