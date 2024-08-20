import React, { useState } from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import DaumPostcode from "react-daum-postcode";

const AddressInput = ({ setAddress }) => {
  const [detailAddress, setDetailAddress] = useState("");
  const [isOpenPost, setIsOpenPost] = useState(false);

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(fullAddr); // 전체 주소를 부모 컴포넌트로 전달
    setDetailAddress(""); // 상세 주소 초기화
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "100%",
    height: "400px",
    padding: "7px",
  };

  return (
    <StyledAddressWrapper>
      <StyledMiddiv>
        <StyledAddressInputField
          placeholder="주소를 입력하세요"
          aria-label="주소 입력"
          value={detailAddress} // 상세 주소 상태를 여기서 사용
          readOnly
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
          onClick={() => setIsOpenPost(true)}
        >
          주소찾기
        </MuiButton>
      </StyledMiddiv>
      {isOpenPost && (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      )}
      <StyledDetailInput
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
        placeholder="상세 주소를 입력해주세요"
        aria-label="상세 주소"
      />
    </StyledAddressWrapper>
  );
};

const StyledMiddiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const StyledAddressWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledAddressInputField = styled.input`
  border-radius: 3px;
  width: 100%;
  background-color: #fff;
  font-size: 10px;
  color: #757373;
  padding: 12px 13px;
  border: 1px solid #c0bdbd;
`;

const StyledDetailInput = styled.input`
  border-radius: 3px;
  width: 100%;
  background-color: #fff;
  font-size: 10px;
  color: #757373;
  padding: 12px 13px;
  border: 1px solid #c0bdbd;
  margin-top: 8px;
`;

export default AddressInput;
