import type { Training } from "../../types/trainings";

export default function TrainingsTable({
  trainings,
}: {
  trainings: Training[];
}) {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3">Title</th>
          <th className="p-3">Provider</th>
          <th className="p-3">Cost</th>
          <th className="p-3">Start</th>
          <th className="p-3">End</th>
        </tr>
      </thead>

      <tbody>
        {trainings.map((training) => (
          <tr key={training.id} className="border-t">
            <td className="p-3">{training.title}</td>
            <td className="p-3">{training.provider}</td>
            <td className="p-3">{training.cost}</td>
            <td className="p-3">{training.startDate}</td>
            <td className="p-3">{training.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
