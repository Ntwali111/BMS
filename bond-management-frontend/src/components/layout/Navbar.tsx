import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          Bond Management System
        </h1>

        <div className="space-x-6 text-sm">
          <Link to="/trainings" className="hover:text-blue-400 transition">
            Trainings
          </Link>

          <Link to="/bonds" className="hover:text-blue-400 transition">
            Bonds
          </Link>
        </div>
      </div>
    </nav>
  );
}
