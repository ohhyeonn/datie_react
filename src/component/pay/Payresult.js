import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Payresult.css"; // CSS 파일을 임포트
import backgroundImage from "../../assets/datie_background.webp";

const alerts = {
  success: {
    title: "성공!",
    text: "작업이 성공적으로 완료되었습니다.",
    icon: "success",
    confirmButtonText: "확인",
  },
  error: {
    title: "오류!",
    text: "작업 중 오류가 발생했습니다.",
    icon: "error",
    confirmButtonText: "확인",
  },
  warning: {
    title: "경고!",
    text: "작업을 계속하기 전에 확인이 필요합니다.",
    icon: "warning",
    confirmButtonText: "확인",
  },
  info: {
    title: "정보!",
    text: "여기에 중요한 정보를 표시합니다.",
    icon: "info",
    confirmButtonText: "확인",
  },
};

const showAlert = (type, setDarkOverlay) => {
  if (alerts[type]) {
    setDarkOverlay(true); // 특정 div를 어둡게 설정
    Swal.fire(alerts[type]).finally(() => {
      setDarkOverlay(false); // 알림 후 특정 div를 원래대로 복원
    });
  } else {
    console.warn("알림 타입이 잘못되었습니다.");
  }
};

function Payresult() {
  const [darkOverlay, setDarkOverlay] = useState(false);

  useEffect(() => {
    // 예시: 결제 상태에 따라 알림을 표시
    const paymentStatus = "success"; // 이 값은 실제 상황에 따라 변경되어야 함

    // 상황에 맞는 알림을 호출
    showAlert(paymentStatus, setDarkOverlay);

    // 다른 상황에 맞는 알림을 호출할 수도 있습니다.
    // showAlert('error', setDarkOverlay);
    // showAlert('warning', setDarkOverlay);
    // showAlert('info', setDarkOverlay);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 어두운 오버레이를 위한 div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: darkOverlay ? "rgba(0, 0, 0, 0.6)" : "transparent", // 어두운 반투명 배경
          zIndex: 1, // 알림 창 위에 위치하도록 설정
          transition: "background-color 0.3s", // 배경 색상 전환 애니메이션
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2, // 알림 창 아래에 위치하도록 설정
          padding: "20px", // 적당한 여백 추가
          borderRadius: "8px", // 모서리 둥글게
          backgroundColor: darkOverlay
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent", // 어두운 오버레이에 따른 내용 영역 배경색
        }}
      >
        {/* 필요에 따라 추가적인 내용 */}
      </div>
    </div>
  );
}

export default Payresult;