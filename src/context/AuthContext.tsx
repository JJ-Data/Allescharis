import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { checkSession } from "@/services/auth";
import { IUser } from "@/lib/types";
import { checkAdminSession } from "@/services/admin";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (userData: IUser, token: string) => void; // Updated to include token
  logout: () => void;
  checkAdmin: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const validateSession = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      const data = await checkSession();
      console.log("Session validation response:", data);

      if (data.success && data.user) {
        setUser(data.user);
        if (data.user.role === "ADMIN") {
          const adminData = await checkAdminSession();
          console.log("Admin session validation:", adminData);
          setIsAdmin(adminData.success && adminData.user?.role === "ADMIN");
        }
      }
    } catch (error) {
      console.error("Session validation error:", error);
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    validateSession();
  }, []);

  const checkAdmin = async () => {
    try {
      const data = await checkAdminSession();
      console.log(data);
      const adminStatus = data.success && data?.user?.role === "ADMIN";
      setIsAdmin(adminStatus);
      return adminStatus;
    } catch (error) {
      console.error("Admin check failed:", error);
      return false;
    }
  };

  const login = async (userData: IUser, token: string) => {
    console.log("user in login: ", user);
    localStorage.setItem("token", token);
    const completeUserData = {
      ...userData,
      createdAt: userData.createdAt || new Date(),
      updatedAt: userData.updatedAt || new Date(),
    };

    // Immediately update state
    setUser(completeUserData);

    // Verify admin status if needed
    if (completeUserData.role === "ADMIN") {
      try {
        const adminData = await checkAdminSession();
        setIsAdmin(adminData.success && adminData.user?.role === "ADMIN");
      } catch (error) {
        console.error("Admin verification failed:", error);
        setIsAdmin(false);
      }
    }

    // Force a session validation to ensure consistency
    await validateSession();
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin,
    isLoading,
    login,
    logout,
    checkAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
