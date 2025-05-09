// components/AdminLayout.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { AdminSidebar } from "./AdminSidebar";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const { isAdmin, isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && isAdmin) {
    return <Navigate to="/auth/admin/login" />;
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
