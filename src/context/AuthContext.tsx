import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
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
      const data = await checkAdminSession();
      if (data.success && data.user) {
        const nameParts = data.user.name.split(" ");
        setUser({
          id: data.user.id,
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" "),
          email: data.user.email,
          role: data.user.role as IUser["role"],
        });
        setIsAdmin(data.user.role === "super-admin");
      } else {
        setUser(null);
        setIsAdmin(false);
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
    const status = user?.role === "super-admin";
    setIsAdmin(status);
    return status;
  };

  const login = async (userData: IUser, token: string) => {
    localStorage.setItem("token", token);
    const completeUserData = {
      ...userData,
      createdAt: userData.createdAt || new Date(),
      updatedAt: userData.updatedAt || new Date(),
    };
    setUser(completeUserData);
    setIsAdmin(completeUserData.role === "super-admin");
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
