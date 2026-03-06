import api from "./axios";

/* CREATE BOND */
export const createBond = async (data: {
  employeeId: string;
  trainingId: string;
  bondValue: string;
  bondDurationMonths: number;
  startDate: string;
  documentUrl: string;
}) => {
  const response = await api.post("/bonds", data);
  return response.data;
};

/* GET ALL BONDS */
export const getBonds = async () => {
  const response = await api.get("/bonds");
  return response.data;
};
