import type { Bond } from "../../types/bonds";

interface Props {
  bonds: Bond[];
}

export default function BondsTable({ bonds }: Props) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Employee</th>
            <th className="px-6 py-3">Training</th>
            <th className="px-6 py-3">Bond Value</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">Expiry</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {bonds.map((bond) => (
            <tr key={bond.id} className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium">
                {bond.employee
                  ? `${bond.employee.firstName} ${bond.employee.lastName}`
                  : "N/A"}
              </td>

              <td className="px-6 py-4">{bond.training?.title || "N/A"}</td>

              <td className="px-6 py-4">
                {Number(bond.bondValue).toLocaleString()} RWF
              </td>

              <td className="px-6 py-4">{bond.bondDurationMonths} months</td>

              <td className="px-6 py-4">{bond.startDate}</td>

              <td className="px-6 py-4">{bond.expiryDate}</td>

              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    bond.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {bond.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
