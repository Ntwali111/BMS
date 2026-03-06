import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import type { Employee } from "../types/employees";

import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeesTable from "../components/employee/EmployeeTable";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeForm onCreated={fetchEmployees} />

      <EmployeesTable employees={employees} refresh={fetchEmployees} />
    </div>
  );
}
