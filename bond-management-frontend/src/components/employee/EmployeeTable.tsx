import { deleteEmployee } from "../../api/employees";
import type { Employee } from "../../types/employees";

export default function EmployeesTable({
  employees,
  refresh,
}: {
  employees: Employee[];
  refresh: () => void;
}) {
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this employee?")) return;

    await deleteEmployee(id);

    alert("Employee deleted");
    refresh();
  };

  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3">Number</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Department</th>
          <th className="p-3">Position</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="border-t">
            <td className="p-3">{emp.employeeNumber}</td>

            <td className="p-3">
              {emp.firstName} {emp.lastName}
            </td>

            <td className="p-3">{emp.email}</td>

            <td className="p-3">{emp.department}</td>

            <td className="p-3">{emp.position}</td>

            <td className="p-3 space-x-3">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => alert("Edit coming next")}
              >
                Edit
              </button>

              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(emp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
