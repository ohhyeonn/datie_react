import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import styled from "styled-components";
import logo from "../../assets/datie_logo.png";
import { TextField as MuiTextField, Button as MuiButton } from "@mui/material";

function PayInfo() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlePayment = () => {
    navigate("/pay/Paypassword"); // 버튼 클릭 시 페이지 이동
  };

  return (
    <PayDesign>
      <Logo src={logo} alt="Logo" />
      <TextContainer>
        <StyledTextField
          id="companyname"
          variant="outlined"
          defaultValue="제스티살룬" // 기본값 설정
        />
        <StyledTextField
          id="amount"
          label="결제금액"
          variant="outlined"
          defaultValue="45000원" // 기본값 설정
        />
        <StyledTextField
          id="peramount"
          label="각자 낼 금액"
          variant="outlined"
          defaultValue="22500원" // 기본값 설정
        />
        <StyledTextField
          id="bonus"
          label="데이티가 쏜다!"
          variant="outlined"
          defaultValue="0원" // 기본값 설정
        />
        <ButtonContainer>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handlePayment} // 클릭 시 handlePayment 함수 호출
          >
            결제하기
          </StyledButton>
          <StyledButton variant="contained" color="secondary">
            취소
          </StyledButton>
        </ButtonContainer>
      </TextContainer>
    </PayDesign>
  );
}

const PayDesign = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center; /* 아이템을 중앙 정렬 */
  padding: 16px;
  text-align: center;
`;

const Logo = styled.img`
  width: 200px; /* 로고의 너비를 조정 */
  height: auto; /* 높이는 자동 조절 */
  margin-top: 50px;
  margin-bottom: 50px; /* 로고와 다른 요소 사이에 여백 추가 */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%; /* 컨테이너가 부모 요소의 너비를 가득 차도록 설정 */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px; /* 버튼 사이의 간격 설정 */
  margin-top: 20px; /* 버튼과 텍스트 필드 사이의 여백 설정 */
`;

const StyledButton = styled(MuiButton)`
  width: 250px; /* 버튼 너비 조정 */
  height: 50px; /* 버튼 높이 조정 */
  font-family: "Gamja Flower", cursive;
  font-size: 18px; /* 버튼 텍스트 크기 조정 */

  &.MuiButton-containedPrimary {
    background-color: rgb(148, 160, 227);
    &:hover {
      background-color: rgb(120, 140, 200);
    }
  }

  &.MuiButton-containedSecondary {
    background-color: #46484b;
    &:hover {
      background-color: #3a3d40; /* 약간 더 어두운 색상 */
    }
  }
`;

const StyledTextField = styled(MuiTextField)`
  margin-bottom: 50px !important; /* input 사이의 거리 조정 */
  width: 90%; /* input의 너비 조정 */

  .MuiInputBase-input {
    font-family: "Gamja Flower", cursive;
    font-size: 22px; /* 입력 텍스트 크기 조정 */
  }

  .MuiFormLabel-root {
    font-size: 20px; /* 레이블 텍스트 크기 조정 */
  }
`;

export default PayInfo;
