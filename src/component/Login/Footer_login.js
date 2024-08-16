import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <hr className="footer-divider" />
      <nav className="footer-nav">
        <a href="#signup" className="signup-link">
          회원가입
        </a>
        <div className="account-links">
          <a href="#find-id" className="find-id-link">
            아이디 찾기
          </a>
          <a href="#find-password" className="find-password-link">
            비밀번호 찾기
          </a>
        </div>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin-top: 146px;
  padding: 20px 0;
  background-color: #f8f9fa;

  .footer-divider {
    width: 255px;
    max-width: 100%;
    height: 1px;
    border: none;
    border-top: 1px solid #cac8c8;
    margin-bottom: 8px;
  }

  .footer-nav {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #4c4c4c;
    text-align: center;
  }

  .account-links {
    display: flex;
    gap: 8px;
  }

  .signup-link,
  .find-id-link,
  .find-password-link {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #007bff; /* 링크에 마우스를 올렸을 때 색상 변경 */
    }
  }
`;

export default Footer;
