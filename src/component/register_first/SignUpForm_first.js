import React from "react";
import styled from "styled-components";
import TermsAgreement from "./TermsAgreement";
import IdentityVerification from "./IdentifyVerification";
import ActionButtons from "./ActionButton";
import Headertest from "../component/RealHeader";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SignUpComponent() {
  return (
    <div>
      <Headertest />
      <Header title={"동동초이"} />
      <StyledContainer>
        {/* <Header title={"회원가입"} /> */}

        <SignUpHeader>
          {/* <Comtext>①약관동의 / 실명확인</Comtext> */}
        </SignUpHeader>
        <TermsAgreement />
        <IdentityVerification />
        <ActionButtons />
        <div className="footer">
          <Footer />
        </div>
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  padding-left: 20px;

  padding-right: 20px;
`;

const SignUpHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;

  .title {
    color: #000;
  }

  .divider {
    margin-top: 16px;
    width: 100%;
    height: 1px;
    border: none;
    background-color: #000;
  }
`;

const Comtext = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

export default SignUpComponent;
