import axios from "axios";

const API_URL = "http://127.0.0.1:3000/bonds";

export const createBond = async (data: {
  employeeId: string;
  trainingId: string;
  bondValue: string;
  bondDurationMonths: number;
  startDate: string;
  documentUrl: string;
}) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const getBonds = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};