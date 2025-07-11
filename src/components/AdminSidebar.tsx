// components/AdminSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export function AdminSidebar() {
  const { pathname } = useLocation();
  const { logout, user } = useAuth();

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
              to="/dashboard"
              className={`flex items-center p-2 rounded-md ${
                isActive("/dashboard")
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
          {user?.role === "super-admin" && (
            <>
              <li>
                <Link
                  to="/dashboard/users"
                  className={`flex items-center p-2 rounded-md ${
                    isActive("/dashboard/users")
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <span>User Management</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admins"
                  className={`flex items-center p-2 rounded-md ${
                    isActive("/dashboard/admins")
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <span>Admin Users</span>
                </Link>
              </li>
            </>
          )}
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
