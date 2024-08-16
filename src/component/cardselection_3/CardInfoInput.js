import React, { useState } from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material"; // Material-UI Button 임포트
import Headertest from "../component/RealHeader";
import Footer from "../component/Footer";
import Header from "../component/Header";
import InitialInput from "./InitialInput";

function CardInfoInput() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [selectedNameId, setSelectedNameId] = useState(1); // 기본 선택된 이름 ID
  const [initial, setInitial] = useState("");

  const names = [
    { id: 1, name: "카리나" },
    { id: 2, name: "전한주" },
  ];

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    setIsMatch(password === confirmPassword && password.length === 4);
  };

  const handleNameSelect = (id) => {
    setSelectedNameId(id); // 선택된 이름 ID 업데이트
  };

  const handleSave = async (initialValue) => {
    if (!isMatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const selectedName = names.find((name) => name.id === selectedNameId)?.name;

    try {
      const response = await fetch("/api/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, selectedName, initial: initialValue }),
      });

      if (!response.ok) {
        throw new Error("서버 응답이 좋지 않습니다.");
      }

      const result = await response.json();
      alert("데이터가 성공적으로 저장되었습니다!");
      console.log(result);
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
      alert("데이터 저장에 실패했습니다.");
    }
  };

  const handlePreview = () => {
    alert("미리보기 기능이 아직 구현되지 않았습니다.");
  };

  return (
    <div>
      <Headertest />
      <Header title={"카드 정보입력"} />
      <CardInfoContainer>
        <MidContent>
          <section>
            <PasswordTitle>비밀번호 설정</PasswordTitle>
            <PasswordInput
              type="password"
              placeholder="숫자 4글자를 입력하시오."
              value={password}
              onChange={handlePasswordChange}
              maxLength={4} // 4자리로 제한
            />
            <PasswordConfirmTitle>비밀번호 확인</PasswordConfirmTitle>
            <PasswordConfirmInput
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              maxLength={4} // 4자리로 제한
            />
            <PasswordMatchStatus>
              {isMatch ? (
                <>
                  <StatusIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/402fe68a2831d654198b5fc7d809cd8d5ceeb46a91bc4dc4ab77a71692e84708?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744"
                    alt="Password match status"
                  />
                  <StatusText>비밀번호가 일치합니다</StatusText>
                </>
              ) : (
                confirmPassword.length > 0 && (
                  <StatusText style={{ color: "#e74c3c" }}>
                    비밀번호가 일치하지 않습니다
                  </StatusText>
                )
              )}
            </PasswordMatchStatus>
          </section>
          <section>
            <NameSelectionTitle>명의자 선택</NameSelectionTitle>
            <NameList>
              {names.map((item) => (
                <NameItem
                  key={item.id}
                  onClick={() => handleNameSelect(item.id)}
                >
                  <RadioButton selected={selectedNameId === item.id}>
                    {selectedNameId === item.id && <RadioButtonInner />}
                  </RadioButton>
                  <NameText>{item.name}</NameText>
                </NameItem>
              ))}
            </NameList>
          </section>
          <InitialInput onSave={handleSave} /> {/* onSave prop 전달 */}
        </MidContent>

        <ButtonContainer>
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
            onClick={handleSave} // 선택하기 버튼 클릭 시 호출
          >
            선택하기
          </MuiButton>
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
            onClick={handlePreview} // 미리보기 버튼 클릭 시 호출
          >
            미리보기
          </MuiButton>
        </ButtonContainer>
      </CardInfoContainer>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

const MidContent = styled.div`
  width: 100%;
  align-items: center;
  margin-left: 15px;
`;

const CardInfoContainer = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 21px 15px 37px;
  @media (max-width: 640px) {
    margin: 0 auto;
  }
`;

const PasswordTitle = styled.h2`
  color: #000;
  margin-top: 30px;
  margin-left: 20px;
  text-align: left; /* 왼쪽 정렬 */
`;

const InputStyle = `
  border-radius: 5px;
  background-color: #f4f4f4;
  align-self: center;
  width: 90%;
  height: 20px;
  border: none;
  padding: 16px 12px; /* 동일한 패딩 값 */
  color: #bfbfbf;
`;

const PasswordInput = styled.input`
  ${InputStyle}
`;

const PasswordConfirmTitle = styled.h2`
  margin-left: 20px;
  color: #000;
  margin-top: 20px;
  text-align: left; /* 왼쪽 정렬 */
`;

const PasswordConfirmInput = styled.input`
  ${InputStyle}
`;

const PasswordMatchStatus = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 2px; /* 간격을 줄임 */
  color: #35cd2a;
`;

const StatusIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  margin-left: 10px;
  object-position: center; /* 이미지 위치 조정 */
  width: 25px;
`;

const StatusText = styled.span`
  margin-left: 15px; /* 간격을 줄임 */
  flex-basis: auto;
`;

const NameSelectionTitle = styled.h2`
  color: #000;
  margin-top: 45px;
  margin-left: 18px;
  text-align: left; /* 왼쪽 정렬 */
`;

const NameList = styled.div`
  display: flex;
  gap: 40px 46px;
  margin: 30px 0 0 23px;
`;

const NameItem = styled.label`
  font-size: 22px;
  display: flex;
  gap: 9px;
  align-items: center;
  cursor: pointer;
`;

const RadioButton = styled.div`
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  width: 15px;
  height: 15px;
  border: 3px solid #afafaf;
  align-items: center;
  justify-content: center;
`;

const RadioButtonInner = styled.div`
  background-color: #03d63b;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

const NameText = styled.span`
  color: #000;
`;

const ButtonContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 46px;
  width: 189px;
  max-width: 100%;
  gap: 11px;
`;

export default CardInfoInput;
