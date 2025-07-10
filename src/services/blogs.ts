import { ApiResponse } from "@/pages/BlogPage";
import axiosInstance from "./axiosInstance";
import axios from "axios"; // Import axios

// Update the function to accept an optional category parameter
export const getAllBlogs = async (
  page?: number,
  limit: number = 10
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get("/blogs", {
      params: { page, limit },
    });
    console.log("blog api services here: ", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    }
    throw new Error("Failed to fetch blogs");
  }
};

export const getBlogById = async (listingId: string) => {
  try {
    const response = await axiosInstance.get(`/blogs/${listingId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Listing failed!");
    } else {
      throw new Error("Listing failed");
    }
  }
};
export const createBlog = async (blogData: {
  title: string;
  content: string;
  images: string[];
}): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post("/blogs", blogData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Blog creation failed!");
    }
    throw new Error("Blog creation failed");
  }
};

export const updateBlog = async (
  id: string,
  blogData: { title: string; content: string; images: string[] }
): Promise<void> => {
  try {
    await axiosInstance.put(`/blogs/${id}`, blogData);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Blog update failed!");
    }
    throw new Error("Blog update failed");
  }
};

export const deleteBlog = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/blogs/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Blog deletion failed!");
    }
    throw new Error("Blog deletion failed");
  }
};
