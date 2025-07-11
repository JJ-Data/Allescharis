import {
  AdminUser,
  createAdmin,
  loginAdmin as localLogin,
  checkAdminSession as localCheckSession,
  getAdmins,
  updateAdmin as localUpdate,
  deleteAdmin as localDelete,
} from "./localAdminUsers";

export const getAdminStats = async (): Promise<AdminAuthResponse> => {
  const admins = await getAdmins();
  return { success: true, userCount: admins.length } as AdminAuthResponse;
};

export const getAdminUsers = async (): Promise<AdminAuthResponse> => {
  const admins = await getAdmins();
  return { success: true, admins } as AdminAuthResponse;
};

export interface AdminAuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: AdminUser;
  admins?: AdminUser[];
  userCount?: number;
}

export const registerAdmin = async (userData: {
  name: string;
  email: string;
  password: string;
  role: string;
}): Promise<AdminAuthResponse> => {
  const user = await createAdmin(userData);
  return { success: true, token: user.id, user };
};

export const loginAdmin = async (credentials: {
  email: string;
  password: string;
}): Promise<AdminAuthResponse> => {
  const data = await localLogin(credentials);
  return data;
};

export const checkAdminSession = async (): Promise<AdminAuthResponse> => {
  const res = await localCheckSession();
  return { success: res.success, user: res.user };
};

export { getAdmins, localUpdate as updateAdmin, localDelete as deleteAdmin };
