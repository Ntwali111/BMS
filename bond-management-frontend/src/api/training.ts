import api from "./axios";

export const createTraining = async (data: {
  title: string;
  provider: string;
  cost: string;
  startDate?: string;
  endDate?: string;
}) => {
  const response = await api.post("/trainings", data);
  return response.data;
};

export const getTrainings = async () => {
  const response = await api.get("/trainings");
  return response.data;
};

export const deleteTraining = async (id: string) => {
  const response = await api.delete(`/trainings/${id}`);
  return response.data;
};
