import React, { useState } from 'react';
import styled from 'styled-components';
import TermsAgreement from './TermsAgreement';
import IdentityVerification from './IdentityVerification';
import ActionButtons from './ActionButton';
import ResponsiveAppBar from '../RealHeader';
import Footer from '../Footer';
import Header from '../Header';

function SignUpComponent() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const handleNext = () => {
        if (isAgreed) {
            // 데이터베이스 확인 로직 추가
            const isDuplicate = false; // 중복 체크 로직 (예: API 호출)

            if (!isDuplicate) {
                // 다음 페이지로 이동하는 로직
                console.log('다음 페이지로 이동');
            } else {
                alert('이름 또는 주민등록번호가 중복됩니다.');
            }
        } else {
            alert('약관에 동의해야 합니다.');
        }
    };

    return (
        <div>
            <ResponsiveAppBar />
            <Header title={'실명확인'} />
            <StyledContainer>
                <SignUpHeader>
                    {/* <Comtext>①약관동의 / 실명확인</Comtext> */}
                </SignUpHeader>
                <TermsAgreement isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
                <IdentityVerification
                    name={name}
                    setName={setName}
                    idNumber={idNumber}
                />
                <ActionButtons handleNext={handleNext} />
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
