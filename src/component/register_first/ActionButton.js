import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

function ActionButtons({ handleNext }) {
  return (
    <ButtonContainer>
      <MuiButton
        variant="contained"
        onClick={handleNext} // 클릭 시 핸들러 호출
        sx={{
          mt: 1,
          backgroundColor: "rgb(148, 160, 227)",
          "&:hover": {
            backgroundColor: "rgb(120, 140, 200)",
          },
          width: "300px",
          fontFamily: '"Gamja Flower", cursive',
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
            backgroundColor: "rgb(169, 169, 169)",
          },
          width: "300px",
          fontFamily: '"Gamja Flower", cursive',
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
