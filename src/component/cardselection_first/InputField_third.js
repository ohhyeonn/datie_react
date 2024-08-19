import React from "react";
import styled from "styled-components";

const InputField = ({ label, placeholder, type = "text" }) => {
  return (
    <InputWrapper>
      <Label htmlFor={`input-${label}`}>{label}</Label>
      <Input
        type={type}
        id={`input-${label}`}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 28px;
`;

const Label = styled.label`
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
  margin-left: 25px;
`;

const Input = styled.input`
  border-radius: 5px;
  background-color: #f4f4f4;
  width: 100%;
  font-size: 10px;
  color: #757373;
  padding: 16px 18px;
  border: none;
  outline: none;
`;

export default InputField;
