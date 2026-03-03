import { useEffect, useState } from "react";
import BondForm from "../components/bonds/BondForm";
import BondsTable from "../components/bonds/BondsTable";
import type { Bond } from "../types/bonds";
import { getBonds } from "../api/bond";

export default function BondsPage() {
  const [bonds, setBonds] = useState<Bond[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBonds = async () => {
    try {
      const data = await getBonds();
      setBonds(data);
    } catch (error) {
      console.error("Error fetching bonds:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBonds();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Bonds Management</h2>

      <BondForm />

      {loading ? <p>Loading bonds...</p> : <BondsTable bonds={bonds} />}
    </div>
  );
}
