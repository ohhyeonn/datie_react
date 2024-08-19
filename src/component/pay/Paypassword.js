import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 전환을 위한 useNavigate 훅

function PasswordInput() {
  const [password, setPassword] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0); // 틀린 횟수 상태 추가
  const [message, setMessage] = useState("비밀번호를 입력해주세요"); // 메시지 상태 추가
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 전환 처리

  // 비밀번호가 변경될 때마다 검사
  useEffect(() => {
    if (currentIndex === 4) {
      // 비밀번호가 모두 입력된 경우
      const enteredPassword = password.join("");
      if (enteredPassword === "1234") {
        navigate("/pay/Payresult"); // 비밀번호가 맞으면 /success 페이지로 이동
      } else {
        // 비밀번호가 틀리면 초기화 및 오류 메시지 설정
        setPassword(["", "", "", ""]);
        setCurrentIndex(0);
        setErrorCount((prevCount) => prevCount + 1); // 틀린 횟수 증가
        setMessage(`비밀번호가 틀렸습니다 (${errorCount + 1}/5)`); // 오류 메시지 업데이트
      }
    }
  }, [currentIndex, navigate, password, errorCount]);

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
        height: "92vh", // 전체 화면 높이
        textAlign: "center",
        paddingTop: "60px",
        backgroundColor: "#f0f0f0", // 배경색
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
            fontSize: "50px",
            color: "#696E77",
            margin: "0",
          }}
        >
          Datie
        </h1>
        <p
          style={{
            fontSize: "30px",
            color: errorCount > 0 ? "red" : "#696E77", // 틀린 경우 빨간색으로 표시
            margin: "0",
            padding: "15px",
          }}
        >
          {message}
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
              fontSize: "100px",
              color: "#C3FBFF",
              textAlign: "center",
              marginRight: index < 3 ? "10px" : "0",
              marginBottom: "55px",
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
              height: "140px",
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
