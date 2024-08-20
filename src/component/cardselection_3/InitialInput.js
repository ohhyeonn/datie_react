import React, { useState } from "react";
import styled from "styled-components";

function InitialInput({ onSave }) {
  const [initial, setInitial] = useState("");

  const handleInputChange = (event) => {
    setInitial(event.target.value);
  };

  // 입력값 검증 및 저장 호출
  const validateAndSave = () => {
    if (initial.length > 9 || /[^a-zA-Z0-9]/.test(initial)) {
      alert(
        "이니셜은 최대 9자까지 입력 가능하며, 특수문자는 사용할 수 없습니다."
      );
      return;
    }
    onSave(initial); // 부모 컴포넌트의 onSave 호출
  };

  return (
    <section>
      <InitialTitle>이니셜 작성하기</InitialTitle>
      <InitialInputField
        aria-label="이니셜 입력"
        value={initial}
        onChange={handleInputChange}
      />
      <InitialGuideline>
        (이니셜은 최대 9자까지 특수문자를 제외하고 입력 가능합니다.)
      </InitialGuideline>
    </section>
  );
}

const InitialTitle = styled.h2`
  text-align: left;
  margin-left: 17px;
  color: #000;
  margin-top: 50px;
`;

const InitialInputField = styled.input`
  border-radius: 5px;
  background-color: #f4f4f4;
  align-self: center;
  width: 90%;
  height: 20px;
  border: none;
  padding: 16px 12px;
  color: #bfbfbf;
`;

const InitialGuideline = styled.p`
  color: #bfbfbf;
  align-self: center;
  margin-top: 5px;
`;

export default InitialInput;
