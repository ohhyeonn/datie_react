import React, { useEffect } from "react";
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

const showAlert = (type) => {
  if (alerts[type]) {
    Swal.fire(alerts[type]);
  } else {
    console.warn("알림 타입이 잘못되었습니다.");
  }
};

function Payresult() {
  useEffect(() => {
    // 예시: 결제 상태에 따라 알림을 표시
    const paymentStatus = "success"; // 이 값은 실제 상황에 따라 변경되어야 함

    // 상황에 맞는 알림을 호출
    showAlert(paymentStatus);

    // 다른 상황에 맞는 알림을 호출할 수도 있습니다.
    // showAlert('error');
    // showAlert('warning');
    // showAlert('info');
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
      }}
    >
      {/* 필요에 따라 추가적인 내용 */}
    </div>
  );
}

export default Payresult;
