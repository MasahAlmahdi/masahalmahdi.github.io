import React from "react";

const Filters = () => {
  return (
    <div
      style={{
        width: "427px",
        height: "670px",
        position: "absolute",
        top: "20px",
        left: "1090px",
        backgroundColor: "#181717",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "20px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Filters
        </h2>
        <p>No filters applied</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Industry
        </h3>
        <input type="text" placeholder="Search industry..." />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Market Cap
        </h3>
        <div>
          <input type="radio" id="micro" name="marketCap" />
          <label htmlFor="micro">Micro</label>
        </div>
        <div>
          <input type="radio" id="small" name="marketCap" />
          <label htmlFor="small">Small</label>
        </div>
        <div>
          <input type="radio" id="large" name="marketCap" />
          <label htmlFor="large">Large</label>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Risk Level
        </h3>
        <div>
          <input type="radio" id="lowRisk" name="riskLevel" />
          <label htmlFor="lowRisk">Low</label>
        </div>
        <div>
          <input type="radio" id="mediumRisk" name="riskLevel" />
          <label htmlFor="mediumRisk">Medium</label>
        </div>
        <div>
          <input type="radio" id="highRisk" name="riskLevel" />
          <label htmlFor="highRisk">High</label>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Strategy
        </h3>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Asset
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            width: "160px",
            height: "40px",
            backgroundColor: "#53ACFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;
