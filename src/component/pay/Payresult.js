import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PasswordInput() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "95.5vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "100%",
          backgroundColor: "white",
          padding: "0px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      ></div>
    </div>
  );
}

export default PasswordInput;
