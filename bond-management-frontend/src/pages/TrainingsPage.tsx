import { useEffect, useState } from "react";
import { getTrainings } from "../api/training";
import type { Training } from "../types/trainings";

import TrainingForm from "../components/training/TrainingForm";
import TrainingsTable from "../components/training/TrainingTable";

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  const fetchTrainings = async () => {
    const data = await getTrainings();
    setTrainings(data);
  };

  useEffect(() => {
    (async () => {
      const data = await getTrainings();
      setTrainings(data);
    })();
  }, []);

  return (
    <div>
      <TrainingForm onCreated={fetchTrainings} />
      <TrainingsTable trainings={trainings} />
    </div>
  );
}
