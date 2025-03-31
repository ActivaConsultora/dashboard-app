
import React from "react";
import { DashboardGraficos } from "./DashboardGraficos";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard de Actividades</h1>
      <DashboardGraficos />
    </div>
  );
}
