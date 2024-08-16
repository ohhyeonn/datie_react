import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

function ActionButtons() {
  return (
    <ButtonContainer>
      <MuiButton
        variant="contained"
        sx={{
          mt: 1,
          backgroundColor: "rgb(148, 160, 227)",
          "&:hover": {
            backgroundColor: "rgb(120, 140, 200)", // 호버 시 색상 조정 (예: 약간 어두운 색)
          },
          width: "300px", // 동일한 너비 설정
          fontFamily: '"Gamja Flower", cursive', // 폰트 변경
        }}
      >
        다음으로
      </MuiButton>

      <MuiButton
        variant="contained"
        sx={{
          mt: 1,
          backgroundColor: "grey",
          "&:hover": {
            backgroundColor: "rgb(169, 169, 169)", // 호버 시 색상 조정 (예: 약간 어두운 색)
          },
          width: "300px", // 동일한 너비 설정
          fontFamily: '"Gamja Flower", cursive', // 폰트 변경
        }}
      >
        취소
      </MuiButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export default ActionButtons;
