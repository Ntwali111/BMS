import { useState, useEffect } from "react";
import { createBond } from "../../api/bond";
import { getTrainings } from "../../api/training";
import type { Training } from "../../types/trainings";
import { getEmployees } from "../../api/employees";
import type { Employee } from "../../types/employees";
export default function BondForm() {
  const [form, setForm] = useState({
    employeeId: "",
    trainingId: "",
    bondValue: "",
    bondDurationMonths: "",
    startDate: "",
    documentUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    const fetchTrainings = async () => {
      const data = await getTrainings();
      setTrainings(data);
    };

    fetchTrainings();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const trainingsData = await getTrainings();
      const employeesData = await getEmployees();

      setTrainings(trainingsData);
      setEmployees(employeesData);
    };

    fetchData();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createBond({
        employeeId: form.employeeId,
        trainingId: form.trainingId,
        bondValue: form.bondValue,
        bondDurationMonths: Number(form.bondDurationMonths),
        startDate: form.startDate,
        documentUrl: form.documentUrl,
      });

      alert("Bond created successfully ✅");

      setForm({
        employeeId: "",
        trainingId: "",
        bondValue: "",
        bondDurationMonths: "",
        startDate: "",
        documentUrl: "",
      });
    } catch (error: any) {
      console.error(error.response?.data || error);
      console.log(error.response?.data);
      alert(JSON.stringify(error.response?.data));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-lg font-semibold mb-4">Create Bond</h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <select
          name="employeeId"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
          className="border rounded px-3 py-2"
          required
        >
          <option value="">Select Employee</option>

          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.employeeNumber} — {employee.firstName}{" "}
              {employee.lastName} ({employee.department})
            </option>
          ))}
        </select>

        <select
          name="trainingId"
          value={form.trainingId}
          onChange={(e) => setForm({ ...form, trainingId: e.target.value })}
          className="border rounded px-3 py-2"
          required
        >
          <option value="">Select Training</option>

          {trainings.map((training) => (
            <option key={training.id} value={training.id}>
              {training.title} — {training.provider}
            </option>
          ))}
        </select>

        <input
          type="number"
          step="0.01"
          name="bondValue"
          placeholder="Bond Value (e.g. 12000000.00)"
          className="border rounded px-3 py-2"
          value={form.bondValue}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="bondDurationMonths"
          placeholder="Duration (months)"
          className="border rounded px-3 py-2"
          value={form.bondDurationMonths}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="startDate"
          className="border rounded px-3 py-2"
          value={form.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="documentUrl"
          placeholder="Document URL"
          className="border rounded px-3 py-2"
          value={form.documentUrl}
          onChange={handleChange}
          required
        />

        <div className="col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Creating..." : "Create Bond"}
          </button>
        </div>
      </form>
    </div>
  );
}
