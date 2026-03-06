import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-100">
      {token && <Navbar />}
      <main className="p-8">{children}</main>
    </div>
  );
}
