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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // 전체 화면 높이
        textAlign: "center",
        backgroundColor: "#f0f0f0", // 배경색
        padding: "20px",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "27px",
            color: "#696E77",
            margin: "0",
          }}
        >
          Datie
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#696E77",
            margin: "0",
            padding: "15px",
          }}
        >
          비밀번호를 입력해주세요
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
            value={password[index] ? "●" : "○"} // 여기에 password 입력
            readOnly
            style={{
              width: "70px",
              height: "70px",
              fontSize: "70px",
              color: "#C3FBFF",
              textAlign: "center",
              marginRight: index < 3 ? "10px" : "0",
              border: "none", // 테두리 없애기
              background: "transparent", // 배경 투명
              textShadow: `0 0 2px #000, 0 0 3px #000, 0 0 4px #000`, // 검은색 테두리 효과
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "360px",
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
              width: "120px",
              height: "120px",
              fontSize: "38px",
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
