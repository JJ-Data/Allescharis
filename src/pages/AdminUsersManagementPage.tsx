import { useEffect, useState } from "react";
import {
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  AdminUser,
} from "@/services/localAdminUsers";
import { Modal } from "@/components/ui/modal";

export default function AdminUsersManagementPage() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "editor" });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    getAdmins().then(setAdmins);
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createAdmin(form).then((a) => {
      setAdmins((prev) => [...prev, a]);
      setForm({ name: "", email: "", password: "", role: "editor" });
    });
  };

  const handleUpdate = () => {
    if (!editId) return;
    updateAdmin(editId, { name: form.name, email: form.email, password: form.password, role: form.role }).then((a) => {
      setAdmins((prev) => prev.map((ad) => (ad.id === a.id ? a : ad)));
      setEditId(null);
      setForm({ name: "", email: "", password: "", role: "editor" });
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this admin?")) {
      deleteAdmin(id).then(() => setAdmins((prev) => prev.filter((a) => a.id !== id)));
    }
  };

  const startEdit = (admin: AdminUser) => {
    setEditId(admin.id);
    setForm({ name: admin.name, email: admin.email, password: admin.password, role: admin.role });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Users</h1>
      <form onSubmit={handleCreate} className="space-y-2 mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <select
          className="border p-2 rounded w-full"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="super-admin">super-admin</option>
          <option value="editor">editor</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Admin
        </button>
      </form>

      <table className="min-w-full divide-y divide-gray-200 bg-white rounded shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="px-6 py-4 whitespace-nowrap">{admin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.role}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button className="text-green-600" onClick={() => startEdit(admin)}>
                  Edit
                </button>
                <button className="text-red-600" onClick={() => handleDelete(admin.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={!!editId} onClose={() => setEditId(null)}>
        <h2 className="text-lg font-semibold mb-4">Edit Admin</h2>
        <div className="space-y-2">
          <input
            className="border p-2 rounded w-full"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="border p-2 rounded w-full"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="super-admin">super-admin</option>
            <option value="editor">editor</option>
          </select>
          <div className="text-right space-x-2">
            <button className="px-4 py-2 rounded bg-gray-200" onClick={() => setEditId(null)}>
              Cancel
            </button>
            <button className="px-4 py-2 rounded bg-green-600 text-white" onClick={handleUpdate}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
