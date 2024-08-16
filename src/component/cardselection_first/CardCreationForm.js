import React from "react";
import styled from "styled-components";
import InputField from "./InputField_third";
import { Button as MuiButton } from "@mui/material";
import { TextField } from "@mui/material";
import Headertest from "../component/RealHeader";
import Footer from "../component/Footer";
import Header from "../component/Header";

const CardCreationForm = () => {
  return (
    <div>
      <Headertest />
      <Header title={"내 애인 조회"} />
      <FormContainer>
        <CenteredContainer>
          <CardImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd6203791ea3413ef7042de5a3eaac76a4432aaea83ddea035112f4371dd015?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744"
            alt="Card preview"
          />
        </CenteredContainer>
        <TextField
          id="lover-id"
          label="상대방 아이디"
          variant="outlined"
          sx={{
            mb: 2,
          }}
        />
        {/* <InputField label="아이디" placeholder="상대방 아이디를 입력해주세요" /> */}
        {/* <InputField
        label="비밀번호"
        placeholder="상대방 비밀번호를 입력해주세요"
        type="password"
      /> */}

        <TextField
          id="lover-pw"
          label="상대방 비밀번호"
          variant="outlined"
          sx={{
            mb: 2,
          }}
        />
        <CenteredContainer>
          <MuiButton
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)", // 호버 시 색상 조정 (예: 약간 어두운 색)
              },
              width: "100%",
              height: "50px",
            }}
          >
            다음으로
          </MuiButton>
        </CenteredContainer>
      </FormContainer>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const FormContainer = styled.form`
  aligh-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #000;
  font-weight: 700;
  padding: 34px 20px 34px 10px;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  margin-bottom: 36px; /* 이미지와 버튼 사이의 여백 */
`;

const CardImage = styled.img`
  aspect-ratio: 1.62;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 307px;
`;

export default CardCreationForm;
