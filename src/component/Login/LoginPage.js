import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Headertest from "../component/RealHeader";
import Footer from "../component/Footer";
import Header from "../component/Header";

function LoginPage() {
  return (
    <div>
      <Headertest />
      <Header title={"로그인"} />
      <StyledLoginPage>
        <LoginForm />
      </StyledLoginPage>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

const StyledLoginPage = styled.main`
  background-color: #fff;
  flex-direction: column;
  padding: 16px;
  text-align: center;
`;

export default LoginPage;
