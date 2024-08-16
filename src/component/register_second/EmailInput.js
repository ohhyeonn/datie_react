import React, { useState } from "react";
import styled from "styled-components";

const EmailInput = () => {
  const [isDirectInput, setIsDirectInput] = useState(false);
  const [emailUsername, setEmailUsername] = useState("");
  const [emailDomain, setEmailDomain] = useState("");

  const handleDomainChange = (e) => {
    const value = e.target.value;
    setIsDirectInput(value === "direct");
    setEmailDomain(""); // 직접 입력 시 도메인 초기화
  };

  return (
    <EmailWrapper>
      <EmailContainer>
        <EmailPart
          type="text"
          aria-label="Email username"
          value={emailUsername}
          onChange={(e) => setEmailUsername(e.target.value)}
        />
        <Separator>@</Separator>
        {isDirectInput ? (
          <EmailPart
            type="text"
            placeholder=""
            value={emailDomain}
            onChange={(e) => setEmailDomain(e.target.value)}
          />
        ) : (
          <DomainSelect onChange={handleDomainChange}>
            <option value="">이메일 입력하기</option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="google.com">google.com</option>
            <option value="direct">직접입력</option>
          </DomainSelect>
        )}
      </EmailContainer>
    </EmailWrapper>
  );
};

const EmailWrapper = styled.div`
  margin-bottom: 10px;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%; // 전체 너비 설정
`;

const EmailPart = styled.input`
  border-radius: 3px;
  background-color: #fff;
  width: 100%; // 전체 너비 설정
  height: 32px;
  border: 1px solid #c0bdbd;
  padding: 0 10px;
`;

const Separator = styled.span`
  color: #757373;
  font-size: 15px;
`;

const DomainSelect = styled.select`
  width: 100%; // 전체 너비 설정
  border-radius: 3px;
  background-color: #fff;
  font-size: 11px;
  color: #7e7e7e;
  padding: 11px 15px;
  border: 1px solid #c0bdbd;
`;

export default EmailInput;
