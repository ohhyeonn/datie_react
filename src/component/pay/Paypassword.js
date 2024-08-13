import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeypadClick = (number) => {
    if (currentIndex < 4 && typeof number === "number") {
      const newPass = [...password];
      newPass[currentIndex] = number;
      setPassword(newPass);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDelete = () => {
    if (currentIndex > 0) {
      const newPass = [...password];
      newPass[currentIndex - 1] = "";
      setPassword(newPass);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {password.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            readOnly
            style={{
              width: "50px",
              height: "50px",
              fontSize: "24px",
              textAlign: "center",
              marginRight: index < 3 ? "10px" : "0",
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "180px",
          margin: "0 auto",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((number, index) => (
          <button
            key={index}
            onClick={() =>
              number === "←" ? handleDelete() : handleKeypadClick(number)
            }
            style={{
              width: "70px",
              height: "70px",
              fontSize: "24px",
              margin: "0px",
              cursor: number !== "" ? "pointer" : "default",
              backgroundColor: number === "" ? "transparent" : "#46484B",
              color: "white",
              border: "none",
            }}
            disabled={number === ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PasswordInput;
