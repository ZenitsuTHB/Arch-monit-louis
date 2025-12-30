import React from "react";

function Metric({label, value, color})
{
    return (
      <>
        <div style={{ fontWeight: "bold", textTransform: "capitalize" }}>{label}</div> 
        <div style={{color, fontWeight: "bold"}}>{value}</div>
      </>
    );
};

export default Metric;
