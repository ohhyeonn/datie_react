import React, { useState } from "react";
import styled from "styled-components";
import { Button as MuiButton, TextField } from "@mui/material";
import ResponsiveAppBar from "../RealHeader";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom"; // useNavigate 사용

const CardCreationForm = () => {
  const [loverId, setLoverId] = useState("");
  const [loverPw, setLoverPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = () => {
    const validId = "validId"; // 데이터베이스에 있는 ID
    const validPw = "validPassword"; // 데이터베이스에 있는 비밀번호

    if (loverId === validId && loverPw === validPw) {
      navigate("/특정주소"); // 라우트에 설정한 주소로 이동
    } else {
      setErrorMessage("입력된 아이디, 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <ResponsiveAppBar />
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
          value={loverId}
          onChange={(e) => setLoverId(e.target.value)}
          sx={{ mb: 2, width: "500px" }}
        />

        <TextField
          id="lover-pw"
          label="상대방 비밀번호"
          type="password"
          variant="outlined"
          value={loverPw}
          onChange={(e) => setLoverPw(e.target.value)}
          sx={{ mb: 4, width: "500px" }}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <CenteredContainer>
          <MuiButton
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 1,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)",
              },
              width: "500px",
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
  align-items: center;
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
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
`;

const CardImage = styled.img`
  aspect-ratio: 1.62;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 307px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export default CardCreationForm;
