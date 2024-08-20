import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function LoginMain() {
  // 현재 날짜와 과거 날짜를 계산하여 D+일 계산
  const startDate = new Date("2023-01-01");
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "1792px",
        width: "1024px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      {/* 카드 정보 섹션 */}
      <Box
        sx={{
          margin: "0 10px 30px 10px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          display: "flex",
          justifyContent: "center", // 수평 중앙 정렬
          alignItems: "center", // 수직 중앙 정렬
          minHeight: "200px", // 카드 정보 섹션의 최소 높이 설정
        }}
      >
        <Card
          sx={{
            maxWidth: "450px",
            backgroundColor: "#1976d2",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            marginRight: "20px",
            flexGrow: 0,
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div" sx={{ marginBottom: "10px" }}>
              카드 번호: 1234 5678 9012 3456
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginBottom: "10px" }}>
              내 이름: 홍길동
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginBottom: "10px" }}>
              상대 이름: 김철수
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginBottom: "10px" }}>
              유효 기간: 12/24
            </Typography>
            <Typography variant="body2" component="div">
              CVC: 123
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ textAlign: "left", flexShrink: 0 }}>
          <Typography variant="body1" sx={{ fontSize: "18px", marginBottom: "10px" }}>
            2023년 1월 1일부터 D+{diffDays}일이에요!
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "16px", marginTop: "10px" }}>
            와작와작악어 카드 디자인
          </Typography>
        </Box>
      </Box>

      {/* 카드 내역 섹션 */}
      <Box
        sx={{
          flex: "2",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          margin: "0px 10px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          카드 내역
        </Typography>
        {/* 카드 내역 리스트 예시 */}
        {[
          { date: "2024-01-01", place: "스타벅스", amount: 5000 },
          { date: "2024-01-02", place: "맥도날드", amount: 7000 },
          { date: "2024-01-03", place: "아마존", amount: 20000 },
        ].map((item, index) => (
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
            <Typography variant="body1" sx={{ marginBottom: "5px" }}>
              {item.date}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
              {item.place}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {item.amount.toLocaleString()} 원
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LoginMain;
