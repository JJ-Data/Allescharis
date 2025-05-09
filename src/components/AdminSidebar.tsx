// components/AdminSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export function AdminSidebar() {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard"
              className={`flex items-center p-2 rounded-md ${
                isActive("/admin/dashboard")
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/blogs/create"
              className={`flex items-center p-2 rounded-md ${
                isActive("/admin/blogs") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <span>Create Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className={`flex items-center p-2 rounded-md ${
                isActive("/admin/users") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <span>User Management</span>
            </Link>
          </li>
        </ul>
        <div className="mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full flex items-center p-2 rounded-md hover:bg-gray-700"
          >
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
