import { useState } from "react";
import { createEmployee } from "../../api/employees";

export default function EmployeeForm({ onCreated }: { onCreated: () => void }) {
  const [form, setForm] = useState({
    employeeNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    hireDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createEmployee(form);

    alert("Employee created successfully");

    setForm({
      employeeNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      position: "",
      hireDate: "",
    });

    onCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mb-6 grid grid-cols-2 gap-4"
    >
      <input
        name="employeeNumber"
        placeholder="Employee Number"
        className="border px-3 py-2 rounded"
        value={form.employeeNumber}
        onChange={handleChange}
        required
      />

      <input
        name="firstName"
        placeholder="First Name"
        className="border px-3 py-2 rounded"
        value={form.firstName}
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        className="border px-3 py-2 rounded"
        value={form.lastName}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border px-3 py-2 rounded"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        className="border px-3 py-2 rounded"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        className="border px-3 py-2 rounded"
        value={form.department}
        onChange={handleChange}
        required
      />

      <input
        name="position"
        placeholder="Position"
        className="border px-3 py-2 rounded"
        value={form.position}
        onChange={handleChange}
      />

      <input
        name="hireDate"
        type="date"
        className="border px-3 py-2 rounded"
        value={form.hireDate}
        onChange={handleChange}
      />

      <div className="col-span-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Employee
        </button>
      </div>
    </form>
  );
}
