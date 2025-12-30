import React from "react";
import { useServerStatus } from "./hooks/useServerStatus";
import DashboardGrid from "./components/DashboardGrid";

function App() {
  const { serverStatus, loading } = useServerStatus();

  const getColor = (key, value) => {
    switch (key) {
      case "status":
        return value === "OK" ? "green" : "red";
      case "mysql":
        return value === "running" ? "green" : "red";
      case "website":
        return value === "online" ? "green" : "red";
      case "mailqueue":
        return value === 0 ? "green" : "orange";
      case "load":
        if (value > 2) return "red";
        if (value > 1) return "orange";
        return "green";
      case "rootfs":
      case "tmpfs":
        if (value > 80) return "red";
        if (value > 50) return "orange";
        return "green";
      default:
        return "black";
    }
  };

  if (loading) {
    return <div style={{ padding: "20px", fontFamily: "sans-serif" }}>Cargando...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Dashboard del Servidor</h1>
      <DashboardGrid data={serverStatus} getColor={getColor} />
    </div>
  );
}

export default App;

