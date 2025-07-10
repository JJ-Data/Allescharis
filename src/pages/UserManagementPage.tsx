import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllUsers, deleteUser, updateUser } from "@/services/users";
import Loader from "@/components/Loader";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

export default function UserManagementPage() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const [editUserId, setEditUserId] = useState<string | null>(null);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [formState, setFormState] = useState({ firstName: "", lastName: "", role: "USER" });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setDeleteUserId(null);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { firstName: string; lastName: string; role: string } }) =>
      updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEditUserId(null);
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const users = data?.data.users || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    className="text-green-600 hover:text-green-900"
                    onClick={() => {
                      setEditUserId(user.id);
                      setFormState({ firstName: user.firstName, lastName: user.lastName, role: user.role });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => setDeleteUserId(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={!!deleteUserId} onClose={() => setDeleteUserId(null)}>
        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
        <p className="mb-4">Are you sure you want to delete this user?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setDeleteUserId(null)}
            className="px-4 py-2 rounded bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteUserId && deleteMutation.mutate(deleteUserId)}
            className="px-4 py-2 rounded bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </Modal>

      <Modal isOpen={!!editUserId} onClose={() => setEditUserId(null)}>
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editUserId) {
              updateMutation.mutate({ id: editUserId, data: formState });
            }
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              className="w-full border rounded p-2"
              value={formState.firstName}
              onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              className="w-full border rounded p-2"
              value={formState.lastName}
              onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              className="w-full border rounded p-2"
              value={formState.role}
              onChange={(e) => setFormState({ ...formState, role: e.target.value })}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div className="text-right space-x-2">
            <button
              type="button"
              onClick={() => setEditUserId(null)}
              className="px-4 py-2 rounded bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
