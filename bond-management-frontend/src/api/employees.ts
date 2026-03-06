import api from "./axios";

export const createEmployee = async (data: {
  employeeNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  position?: string;
  hireDate?: string;
}) => {
  const response = await api.post("/employees", data);
  return response.data;
};

export const getEmployees = async () => {
  const response = await api.get("/employees");
  return response.data;
};
export const updateEmployee = async (id: string, data: any) => {
  const response = await api.patch(`/employees/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await api.delete(`/employees/${id}`);
  return response.data;
};
