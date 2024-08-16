import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

const AddressInput = () => {
  return (
    <AddressWrapper>
      <Middiv>
        <AddressInputField
          placeholder="주소 찾기버튼을 클릭하여 주소를 검색하세요"
          aria-label="주소 입력"
          readOnly // 직접 입력을 막기 위해 readOnly 속성 추가
        />
        <MuiButton
          variant="contained"
          sx={{
            backgroundColor: "rgb(148, 160, 227)",
            "&:hover": {
              backgroundColor: "rgb(120, 140, 200)",
            },
            width: "100px",
            fontFamily: '"Gamja Flower", cursive',
          }}
          onClick={() => {
            // 여기에 주소찾기 API 호출 로직 추가
          }}
        >
          주소찾기
        </MuiButton>
      </Middiv>
      <DetailInput
        placeholder="상세 주소를 입력해주세요"
        aria-label="상세 주소"
      />
    </AddressWrapper>
  );
};

const Middiv = styled.div`
  display: flex; // Flex를 사용하여 가로로 배치
  align-items: center; // 세로 정렬
  width: 100%;
  gap: 12px; // 요소 간 간격
`;

const AddressWrapper = styled.div`
  margin-bottom: 10px;
`;

const AddressInputField = styled.input`
  border-radius: 3px;
  width: 100%; // 너비를 100%로 설정
  background-color: #fff;
  font-size: 10px;
  color: #757373;
  padding: 12px 13px;
  border: 1px solid #c0bdbd;
  readonly: true; // 직접 입력을 막기 위해 추가
`;

const DetailInput = styled.input`
  border-radius: 3px;
  width: 100%; // 너비를 100%로 설정
  background-color: #fff;
  font-size: 10px;
  color: #757373;
  padding: 12px 13px;
  border: 1px solid #c0bdbd;
  margin-top: 8px; // 위쪽 입력창과 간격 조정
`;

export default AddressInput;
