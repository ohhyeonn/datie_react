import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ResponsiveAppBar from "../RealHeader";

// 이미지 import
import type1Front from "../../assets/type1-front.png";
import type2Front from "../../assets/type2-front.png";
import type3Front from "../../assets/type3-front.png";
import type1Back from "../../assets/type1-back.png";
import type2Back from "../../assets/type2-back.png";
import type3Back from "../../assets/type3-back.png";

function LoginMain() {
  const [cardInfo, setCardInfo] = useState(null); // 카드 정보를 저장할 상태
  const [paymentRecords, setPaymentRecords] = useState([]); // 결제 기록을 저장할 상태
  const [ownerName, setOwnerName] = useState(""); // 첫 번째 유저 이름 상태
  const [partnerName, setPartnerName] = useState(""); // 두 번째 유저 이름 상태
  const [userno, setUserno] = useState(null); // 디코딩된 userno를 저장할 상태
  const [isFlipped, setIsFlipped] = useState(false); // 카드가 뒤집혔는지 여부
  const cardno = 13; // 실제 cardno로 변경하세요

  const token = localStorage.getItem("jwtToken"); // JWT 토큰을 가져오는 부분

  if (token) {
    const decoded = jwtDecode(token); // JWT 토큰 디코딩
    console.log(decoded); // 디코딩된 정보 출력
    setUserno(decoded.userno); // userno를 상태로 설정
  }

  useEffect(() => {
    if (cardno) {
      // 카드 정보 가져오기
      axios
        .post(`http://localhost:8090/api/card/${cardno}`)
        .then((response) => {
          setCardInfo(response.data); // 가져온 카드 정보를 상태에 저장

          // 첫 번째 유저 이름 가져오기
          if (response.data.userno) {
            axios
              .get(`http://localhost:8090/api/profile?userno=${response.data.userno}`)
              .then((res) => {
                setOwnerName(res.data.name); // 첫 번째 유저 이름 설정
              })
              .catch((error) => {
                console.error("Error fetching owner name:", error);
              });
          }

          // 두 번째 유저 이름 가져오기
          if (response.data.userno2) {
            axios
              .get(`http://localhost:8090/api/profile?userno=${response.data.userno2}`)
              .then((res) => {
                setPartnerName(res.data.name); // 두 번째 유저 이름 설정
              })
              .catch((error) => {
                console.error("Error fetching partner name:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching card info:", error);
        });

      // 결제 기록 가져오기
      axios
        .post(`http://localhost:8090/api/card/${cardno}/payment-records`)
        .then((response) => {
          setPaymentRecords(response.data); // 가져온 결제 기록을 상태에 저장
        })
        .catch((error) => {
          console.error("Error fetching payment records:", error);
        });
    }
  }, [cardno]);

  // 날짜 형식 변환 함수
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  //카드 날짜 변환 함수
  const formatDateTimeCard = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
    return `${formattedDate}`;
  };

  // 카드 타입에 따른 앞면 이미지 설정
  const getFrontBackgroundImage = () => {
    switch (cardInfo.cardtypeno) {
      case 1:
        return type1Front;
      case 2:
        return type2Front;
      case 3:
        return type3Front;
      default:
        return null;
    }
  };

  // 카드 타입에 따른 뒷면 이미지 설정
  const getBackBackgroundImage = () => {
    switch (cardInfo.cardtypeno) {
      case 1:
        return type1Back;
      case 2:
        return type2Back;
      case 3:
        return type3Back;
      default:
        return null;
    }
  };

  // 카드 클릭 핸들러
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // 뷰포트 전체 높이로 설정
        maxWidth: "1024px", // 최대 너비 설정
        width: "100%", // 너비 100%로 설정
        margin: "0 auto", // 가로 방향 중앙 정렬
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        justifyContent: "center", // 세로 방향 중앙 정렬
        alignItems: "center", // 가로 방향 중앙 정렬
      }}
    >
      <ResponsiveAppBar />
      {/* 카드 정보 섹션 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // 가로 방향 중앙 정렬
          alignItems: "center", // 세로 방향 중앙 정렬
          position: "relative",
          width: "600px",
          height: "400px",
          perspective: "1000px", // 3D 효과를 위한 원근
        }}
        onClick={handleCardClick} // 클릭 시 카드 전환
      >
        {cardInfo && (
          <>
            {/* 카드 앞면 */}
            <Card
              sx={{
                maxWidth: "450px",
                width: "100%", // 부모 컨테이너에 맞추기 위해 width를 100%로 설정
                color: "white",
                borderRadius: "12px",
                position: "absolute",
                top: "10%",
                left: "10%",
                backgroundImage: `url(${getFrontBackgroundImage()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9", // 예: 16:9 비율 사용
                backfaceVisibility: "hidden",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 1.5s", // 애니메이션 시간을 1.5초로 설정
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "20px",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ 
                  color: "white",
                  fontFamily: '"Gamja Flower", cursive',
                  fontSize: '22px',
                 }}
              >
                {cardInfo.initials}
              </Typography>
            </Card>

            {/* 카드 뒷면 */}
            <Card
              sx={{
                maxWidth: "450px",
                width: "100%",
                color: "white",
                borderRadius: "12px",
                position: "absolute",
                top: "10%",
                left: "10%",
                backgroundImage: `url(${getBackBackgroundImage()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9",
                backfaceVisibility: "hidden",
                transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
                transition: "transform 1.5s", // 애니메이션 시간을 1.5초로 설정
                transformStyle: "preserve-3d",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Typography variant="body2" component="div" sx={{ 
                marginBottom: "10px", 
                marginTop: "100px",
                fontFamily: '"Gamja Flower", cursive',
                fontSize: '22px',
              }}>
                {ownerName}님과 {partnerName}님의 데이티카드
              </Typography>
              <Typography variant="body2" component="div" sx={{ 
                marginBottom: "10px",
                fontFamily: '"Gamja Flower", cursive',
                fontSize: '22px',
              }}>
                유효 기간: {formatDateTimeCard(cardInfo.date)}
              </Typography>
              <Typography variant="body2" component="div">
                CVC: {cardInfo.cvc}
              </Typography>
            </Card>
          </>
        )}
      </Box>

      {/* 카드 내역 섹션 */}
      <Box
        sx={{
          flex: "2",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          width: "600px",
          margin: "0px 10px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" component="div" gutterBottom
          sx={{
            fontFamily: '"Gamja Flower", cursive',
            fontSize: '22px',
        }}>
          카드 내역
        </Typography>
        {paymentRecords.length > 0 ? (
          paymentRecords.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "400px",
                margin: "20px auto",
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ 
                marginBottom: "5px",
                fontFamily: '"Gamja Flower", cursive',
                fontSize: '22px',
              }}>
                {formatDateTime(item.confirmdate)}
              </Typography>
              <Typography variant="body2" sx={{ 
                marginBottom: "5px",
                fontFamily: '"Gamja Flower", cursive',
                fontSize: '22px',
              }}>
                {item.content ? item.content : "Unknown"}
              </Typography>
              <Typography variant="body2" sx={{ 
                fontWeight: "bold",
                fontFamily: '"Gamja Flower", cursive',
                fontSize: '22px',
                }}>
                {item.amount.toLocaleString()} 원
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>Loading payment records...</Typography>
        )}
      </Box>
    </Box>
  );
}

export default LoginMain;
