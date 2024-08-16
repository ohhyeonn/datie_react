import React, { useEffect, useRef, useState } from "react";
import background from "../../assets/datie_background.webp";
import logo from "../../assets/datie_logo.png"; // 로고 이미지 import
import { Button as MuiButton } from "@mui/material";

function IndexMain() {
  const [showButtons, setShowButtons] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowButtons(true);
          }
        });
      },
      { threshold: 0.1 } // 10% 이상 보여지면 트리거
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div
      className="outer_wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        className="inner_wrapper"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "1024px",
          height: "1792px",
          position: "relative",
        }}
      >
        {/* 로고 이미지 추가 */}
        <div
          style={{
            position: "absolute",
            top: "10px", // 화면 상단에서 약간 아래 위치
            left: "50%",
            transform: "translateX(-50%)", // 가로 중앙 정렬
            zIndex: 1, // 로고가 다른 요소 위에 표시되도록 설정
            paddingTop: "20px", // 상단 여백 추가
          }}
        >
          <img src={logo} alt="Datie Logo" style={{ width: "400px", height: "200px" }} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            transform: "translate(-20%, -20%)",
            width: "100%",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 60px",
            }}
          >
            <h1
              style={{
                color: "black",
                fontFamily: "'Black Han Sans', sans-serif",
                fontWeight: "400",
                fontSize: "64px",
                margin: "0",
                WebkitTextStroke: "1px white",
                animation: "fadeInLeft 1s ease-in-out",
              }}
            >
              당신의 데이트
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "'Black Han Sans', sans-serif",
                fontWeight: "400",
                fontSize: "64px",
                margin: "0",
                WebkitTextStroke: "1px black",
                animation: "fadeInRight 1s ease-in-out",
              }}
            >
              편리한 가계부
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 60px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                color: "black",
                fontFamily: "'Black Han Sans', sans-serif",
                fontWeight: "400",
                fontSize: "64px",
                margin: "0",
                WebkitTextStroke: "1px white",
                animation: "fadeInLeft 1.5s ease-in-out",
              }}
            >
              데이티와 함께하세요
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "'Black Han Sans', sans-serif",
                fontWeight: "400",
                fontSize: "64px",
                margin: "0",
                WebkitTextStroke: "1px black",
                animation: "fadeInRight 1.5s ease-in-out",
              }}
            >
              데이트헬퍼
            </h1>
          </div>
        </div>

        <div
          ref={buttonRef}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: showButtons ? 1 : 0, // 버튼 가시성 제어
            transition: "opacity 1s ease-in-out", // 서서히 나타나는 애니메이션
          }}
        >
          <MuiButton
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)",
              },
              width: "300px",
              height: "70px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            가입하기
          </MuiButton>
          <MuiButton
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)",
              },
              width: "300px",
              height: "70px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            로그인
          </MuiButton>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            0% {
              opacity: 0;
              transform: translateX(100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default IndexMain;
