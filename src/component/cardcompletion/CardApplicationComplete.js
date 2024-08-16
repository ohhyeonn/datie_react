import React from "react";
import styled from "styled-components";
import Headertest from "../RealHeader";
import Footer from "../Footer";
import Header from "../Header";
import { Button as MuiButton } from "@mui/material"; // Material-UI Button 임포트

const CardApplicationComplete = () => {
  return (
    <div>
      <Headertest />
      <Header title={"카드생성 완료"} />

      <WholePage className="application-complete">
        <CompletionImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd6203791ea3413ef7042de5a3eaac76a4432aaea83ddea035112f4371dd015?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744"
          alt="Card application complete"
        />
        <SubHeader>신청 완료 !</SubHeader>
        <Description>
          (카드는 발급 후 전달까지 3-4일 정도가 소요됩니다.)
        </Description>
        <MuiButton
          variant="contained"
          sx={{
            backgroundColor: "rgb(148, 160, 227)",
            "&:hover": {
              backgroundColor: "rgb(120, 140, 200)",
            },
            width: "30%",
            fontFamily: '"Gamja Flower", cursive',
            fontSize: "20px",
          }} // 미리보기 버튼 클릭 시 호출
        >
          홈으로
        </MuiButton>
      </WholePage>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const WholePage = styled.main`
  margin-top: 50px;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
`;

const CompletionImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
  width: 300px;
  margin-top: 20px;
`;

const SubHeader = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 10px 10px 5px 0;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0 0 50px 0;
  align-items: center;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  margin-top: 200px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export default CardApplicationComplete;
