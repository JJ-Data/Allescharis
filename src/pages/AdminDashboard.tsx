// pages/AdminDashboard.tsx
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "@/services/blogs";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { BlogTable } from "./BlogTable";

export function AdminDashboard() {
  const { isAdmin } = useAuth();

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-blogs"],
    queryFn: () => getAllBlogs(),
    enabled: isAdmin,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link
          to="/admin/blogs/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create New Blog
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <BlogTable blogs={blogs?.data.blogs || []} />
      </div>
    </div>
  );
}
