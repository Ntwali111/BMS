import { useState } from "react";
import { createTraining } from "../../api/training";

export default function TrainingForm({ onCreated }: { onCreated: () => void }) {
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [cost, setCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createTraining({
      title,
      provider,
      cost,
      startDate,
      endDate,
    });

    onCreated();

    setTitle("");
    setProvider("");
    setCost("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Create Training</h2>

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Training Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Training
      </button>
    </form>
  );
}
