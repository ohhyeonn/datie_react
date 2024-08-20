import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import ResponsiveAppBar from "../RealHeader";
import Footer from "../Footer";
import Header from "../Header";
import { Height } from "@mui/icons-material";
import { height } from "@mui/system";

function LoginPage() {
  return (
    <div>
      <ResponsiveAppBar />
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
