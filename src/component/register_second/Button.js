import React from "react";
import styled from "styled-components";

const Button = ({ children, variant = "primary" }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === "primary" ? "#94a0e3" : "#b8b6b6"};
  color: #fffcfc;
  font-size: 14px;
  padding: 8px 18px;
  border: none;
  cursor: pointer;
`;

export default Button;
