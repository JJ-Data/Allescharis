export interface AdminUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const STORAGE_KEY = 'admin_users';
const SESSION_KEY = 'current_admin_id';

function loadAdmins(): AdminUser[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAdmins(admins: AdminUser[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(admins));
}

export async function getAdmins(): Promise<AdminUser[]> {
  return loadAdmins();
}

export async function createAdmin(data: Omit<AdminUser, 'id'>): Promise<AdminUser> {
  const admins = loadAdmins();
  if (admins.some(a => a.email === data.email)) {
    throw new Error('Email already exists');
  }
  const admin: AdminUser = {
    ...data,
    id: Math.random().toString(36).slice(2),
  };
  admins.push(admin);
  saveAdmins(admins);
  return admin;
}

export async function updateAdmin(id: string, updates: Partial<Omit<AdminUser, 'id'>>): Promise<AdminUser> {
  const admins = loadAdmins();
  const index = admins.findIndex(a => a.id === id);
  if (index === -1) throw new Error('Admin not found');
  admins[index] = { ...admins[index], ...updates };
  saveAdmins(admins);
  return admins[index];
}

export async function deleteAdmin(id: string): Promise<void> {
  const admins = loadAdmins().filter(a => a.id !== id);
  saveAdmins(admins);
}

export async function loginAdmin(credentials: { email: string; password: string }): Promise<{ success: boolean; token?: string; user?: AdminUser }> {
  const admins = loadAdmins();
  const admin = admins.find(a => a.email === credentials.email && a.password === credentials.password);
  if (!admin) {
    throw new Error('Invalid credentials');
  }
  localStorage.setItem(SESSION_KEY, admin.id);
  return { success: true, token: admin.id, user: admin };
}

export async function checkAdminSession(): Promise<{ success: boolean; user?: AdminUser }> {
  const id = localStorage.getItem(SESSION_KEY);
  if (!id) return { success: false };
  const admins = loadAdmins();
  const admin = admins.find(a => a.id === id);
  if (!admin) return { success: false };
  return { success: true, user: admin };
}

export function logoutAdmin() {
  localStorage.removeItem(SESSION_KEY);
}
