import axiosInstance from "./axiosInstance";
import axios from "axios"; // Import axios to detect Axios-specific errors

// ✅ Admin/User Registration Function
export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    const response = await axiosInstance.post("/auth/register-admin", {
      ...userData,
      role: "ADMIN", // Force role to ADMIN
    });

    // ✅ Handle 204 No Content from backend (success but no response body)
    if (response.status === 204) {
      return {
        success: true,
        message: "Admin registered successfully (no content returned)",
        token: "", // fallback token
        user: {
          id: "", // fallback id (optional)
          name: `${userData.firstName} ${userData.lastName}`,
          email: userData.email,
          role: "ADMIN",
        },
      };
    }

    // ✅ Normal 200 OK response with expected data
    return response.data;
  } catch (error) {
    // ❌ Error handling
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Registration failed!");
    } else {
      throw new Error("Registration failed");
    }
  }
};

// ✅ Login Function
export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/auth/login", userData);
    console.log("response from login:", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed!");
    } else {
      throw new Error("Login failed");
    }
  }
};

// ✅ Session Check Function
export const checkSession = async () => {
  try {
    const response = await axiosInstance.get("/auth/check-session");
    return response.data;
  } catch (error) {
    throw new Error("Failed to check session");
  }
};
