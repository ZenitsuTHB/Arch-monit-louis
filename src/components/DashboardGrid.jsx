// src/components/DashboardGrid.jsx
import React from "react";
import Metric from "./Metric";

function DashboardGrid({ data, getColor }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 100px", gap: "10px", marginTop: "20px" }}>
      {Object.entries(data).map(([key, value]) => (
        <Metric key={key} label={key} value={value} color={getColor(key, value)} />
      ))}
    </div>
  );
}

export default DashboardGrid;

