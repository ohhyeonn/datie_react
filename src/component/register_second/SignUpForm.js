import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import EmailInput from "./EmailInput";
import AddressInput from "./AddressInput";
import ResponsiveAppBar from "../RealHeader";
import Footer from "../Footer";
import Header from "../Header";
import { Button as MuiButton } from "@mui/material";

const SignUpForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [account, setAccount] = useState(""); // 계좌 상태 추가
  const [accountMessage, setAccountMessage] = useState(""); // 계좌 인증 메시지 상태 추가

  // 예시 데이터베이스 계좌 번호
  const validAccountNumber = "1234567890"; // 실제 데이터베이스에서 가져올 계좌 번호

  const handleAccountCheck = () => {
    if (account.trim() === "") {
      alert("계좌 번호를 입력해주세요.");
      return;
    }
    if (account === validAccountNumber) {
      setAccountMessage("인증되었습니다.");
    } else {
      setAccountMessage("입력된 숫자가 다릅니다.");
    }
  };

  const handleIdCheck = () => {
    if (userId.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (checkIdExists(userId)) {
      alert("사용할 수 없는 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다.");
    }
  };

  const checkIdExists = (id) => {
    const existingIds = ["testId1", "testId2"]; // 예시로 존재하는 아이디 목록
    return existingIds.includes(id);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePasswords(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePasswords(password, value);
  };

  const validatePasswords = (pass1, pass2) => {
    if (pass1 && pass2) {
      if (pass1 === pass2) {
        setPasswordMessage("비밀번호가 일치합니다.");
      } else {
        setPasswordMessage("비밀번호가 일치하지 않습니다.");
      }
    } else {
      setPasswordMessage(""); // 비밀번호가 입력되지 않은 경우 메시지 초기화
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직
    console.log("주소:", address);
    console.log("상세 주소:", detailAddress);
    alert("회원가입 완료");
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Header title={"회원가입"} />
      <FormContainer onSubmit={handleSubmit}>
        <FormSection>
          <MemberInfo>②회원정보 입력</MemberInfo>
          <Component>아이디</Component>
          <Middiv>
            <InputField
              placeholder="아이디 입력(6~20자)"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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
              onClick={handleIdCheck}
            >
              중복확인
            </MuiButton>
          </Middiv>
          <Component>비밀번호</Component>
          <InputField
            placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
            type="password"
            onChange={handlePasswordChange}
          />
          <Component>비밀번호 확인</Component>
          <InputField
            placeholder="비밀번호 재입력"
            type="password"
            onChange={handleConfirmPasswordChange}
            error={passwordMessage}
            style={{ color: password === confirmPassword ? "blue" : "red" }}
            isMatching={password === confirmPassword}
          />
          <Component>이름</Component>
          <InputField placeholder="이름을 입력해주세요" />
          <Component>전화번호</Component>
          <InputField placeholder="휴대폰 번호 입력('-'제외 11자리 입력)" />
          <Component>이메일 주소</Component>
          <EmailInput />
          <Component>주소</Component>
          <AddressInput setAddress={setAddress} />
          <StyledDetailInput
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
            placeholder="상세 주소를 입력해주세요"
            aria-label="상세 주소"
          />
          <Component>계좌</Component>
          <Middiv>
            <InputField
              placeholder="계좌를 입력해주세요"
              value={account}
              onChange={(e) => setAccount(e.target.value)} // 계좌 상태 업데이트
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
              onClick={handleAccountCheck} // 계좌 인증 버튼 클릭 시 인증 로직 실행
            >
              계좌인증
            </MuiButton>
          </Middiv>
          {/* 계좌 인증 메시지 표시 */}
          {accountMessage && <AccountMessage>{accountMessage}</AccountMessage>}
        </FormSection>

        <ButtonGroup>
          <MuiButton
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)",
              },
              width: "100px",
              fontFamily: '"Gamja Flower", cursive',
            }}
            type="submit"
          >
            가입하기
          </MuiButton>
          <MuiButton
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "rgb(148, 160, 227)",
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)",
              },
              width: "100px",
              fontFamily: '"Gamja Flower", cursive',
            }}
            onClick={() => alert("회원가입 취소")}
          >
            취소
          </MuiButton>
        </ButtonGroup>
      </FormContainer>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

// 스타일 컴포넌트
const AccountMessage = styled.div`
  margin-top: 10px;
  color: ${(props) => (props.isSuccess ? "blue" : "red")};
`;

// 스타일 컴포넌트
const FormContainer = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  padding: 12px 8px 0;
`;

const MemberInfo = styled.div`
  text-align: left;
  margin-bottom: 20px;
  font-size: 25px;
`;

const FormSection = styled.section`
  width: 80%;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 12px;
  width: 190px;
  max-width: 100%;
  gap: 12px;
`;

const Component = styled.div`
  margin-top: 15px;
  text-align: left;
  font-size: 16px;
`;

const Middiv = styled.div`
  display: flex; // Flex를 사용하여 가로로 배치
  align-items: center; // 세로 정렬
  width: 100%;
  gap: 12px; // 요소 간 간격
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

export default SignUpForm;
