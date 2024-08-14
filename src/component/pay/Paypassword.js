import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PasswordInput() {
  const [password, setPassword] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (currentIndex === 4) {
      const enteredPassword = password.join("");
      setTimeout(() => {
        if (enteredPassword === "1234") {
          navigate("/pay/Payresult");
        } else {
          setWrongAttempts(wrongAttempts + 1);
          setErrorMessage(`비밀번호가 틀렸습니다. (${wrongAttempts + 1} / 5)`);
          setPassword(["", "", "", ""]);
          setCurrentIndex(0);
        }
      }, 500); // 0.5초 딜레이
    }
  }, [currentIndex, password, navigate, wrongAttempts]);

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
      >
        <div>
          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                color: "#696E77",
                marginTop: "60px",
              }}
            >
              Datie
            </h1>
            <p
              style={{
                fontSize: "25px",
                color: errorMessage ? "red" : "#696E77",
                marginTop: "0",
                padding: "15px",
              }}
            >
              {errorMessage || "카드 비밀번호를 입력해주세요"}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {password.map((_, index) => (
              <input
                key={index}
                type="text"
                value={password[index] ? "●" : "○"}
                readOnly
                style={{
                  width: "90px",
                  height: "90px",
                  fontSize: "90px",
                  color: "#C3FBFF",
                  textAlign: "center",
                  marginRight: index < 3 ? "10px" : "0",
                  border: "none",
                  background: "transparent",
                  textShadow: `0 0 2px #000, 0 0 3px #000, 0 0 4px #000`,
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "600px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, " ", 0, "←"].map((number, index) => (
            <button
              key={index}
              onClick={() =>
                number === "←" ? handleDelete() : handleKeypadClick(number)
              }
              style={{
                width: "200px",
                height: "120px",
                fontSize: "35px",
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
    </div>
  );
}

export default PasswordInput;
