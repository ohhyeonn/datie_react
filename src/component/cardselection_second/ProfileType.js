import React from "react";
import styled from "styled-components";

const ProfileType = ({ label, isSelected }) => {
  return (
    <TypeContainer>
      <TypeIndicator isSelected={isSelected} />
      <TypeLabel>{label}</TypeLabel>
    </TypeContainer>
  );
};

const TypeContainer = styled.div`
  display: flex;
  gap: 3px;
  color: #534c4c;
  text-align: center;
`;

const TypeIndicator = styled.div`
  background-color: #fff;
  border-radius: 50%;
  align-self: flex-start;
  display: flex;
  width: 15px;
  height: 15px;
  border: 3px solid #afafaf;
  ${(props) =>
    props.isSelected &&
    `
    justify-content: center;
    align-items: center;
    &::after {
      content: '';
      background-color: #03d63b;
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }
  `}
`;

const TypeLabel = styled.span`
  @media (max-width: 640px) {
    margin-right: 40px;
  }
`;

export default ProfileType;
