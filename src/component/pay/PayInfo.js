import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/datie_logo.png';
import { TextField as MuiTextField, Button as MuiButton } from '@mui/material';
import axios from 'axios';

function PayInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const [companyName, setCompanyName] = useState('');
    const [amount, setAmount] = useState(0);
    const [perAmount, setPerAmount] = useState(0);
    const [bonus, setBonus] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const companynoFromUrl = parseInt(params.get('companyno'), 10) || 0;
        const amountFromUrl = parseInt(params.get('amount'), 10) || 0;

        // 회사 이름 가져오기
        axios
            .get(`/api/company?companyno=${companynoFromUrl}`)
            .then((response) => {
                setCompanyName(response.data.companyname);
            })
            .catch((error) => {
                console.error('Error fetching company data', error);
            });

        setAmount(amountFromUrl);

        // perAmount와 bonus 계산
        const calculatedBonus = amountFromUrl % 10; // 1의 자리수를 bonus로 설정
        const calculatedPerAmount = (amountFromUrl - calculatedBonus) / 2; // 나머지 금액의 절반을 perAmount로 설정

        setPerAmount(calculatedPerAmount);
        setBonus(calculatedBonus);
    }, [location.search]);

    // 숫자에 쉼표를 붙이는 함수
    const formatNumberWithCommas = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    const handlePayment = () => {
        navigate('/pay/Paypassword');
    };

    return (
        <PayDesign>
            <Logo src={logo} alt="Logo" />
            <Title>결제정보</Title>
            <TextContainer>
                <StyledTextField
                    id="companyname"
                    variant="outlined"
                    value={companyName} // 서버에서 받은 companyName 설정
                    InputProps={{ readOnly: true }} // 입력 필드가 수정되지 않도록 설정
                />
                <StyledTextField
                    id="amount"
                    label="결제금액"
                    variant="outlined"
                    value={`${formatNumberWithCommas(amount)}원`} // 서버에서 받은 amount 설정
                    InputProps={{ readOnly: true }} // 입력 필드가 수정되지 않도록 설정
                />
                <StyledTextField
                    id="peramount"
                    label="각자 낼 금액"
                    variant="outlined"
                    value={`${formatNumberWithCommas(perAmount)}원`} // 계산된 perAmount 설정
                    InputProps={{ readOnly: true }} // 입력 필드가 수정되지 않도록 설정
                />
                <StyledTextField
                    id="bonus"
                    label="데이티가 쏜다!"
                    variant="outlined"
                    value={`${formatNumberWithCommas(bonus)}원`} // 계산된 bonus 설정
                    InputProps={{ readOnly: true }} // 입력 필드가 수정되지 않도록 설정
                />
                <ButtonContainer>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={handlePayment}
                    >
                        결제하기
                    </StyledButton>
                    <StyledButton variant="contained" color="secondary">
                        취소
                    </StyledButton>
                </ButtonContainer>
            </TextContainer>
        </PayDesign>
    );
}

const PayDesign = styled.main`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    text-align: center;
`;

const Logo = styled.img`
    width: 200px;
    height: auto;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 20px;
`;

const StyledButton = styled(MuiButton)`
    width: 250px;
    height: 50px;
    font-family: 'Gamja Flower', cursive;
    font-size: 18px;

    &.MuiButton-containedPrimary {
        background-color: rgb(148, 160, 227);
        &:hover {
            background-color: rgb(120, 140, 200);
        }
    }

    &.MuiButton-containedSecondary {
        background-color: #46484b;
        &:hover {
            background-color: #3a3d40;
        }
    }
`;

const StyledTextField = styled(MuiTextField)`
    margin-bottom: 50px !important;
    width: 90%;

    .MuiInputBase-input {
        font-family: 'Gamja Flower', cursive;
        font-size: 22px;
    }

    .MuiFormLabel-root {
        font-size: 20px;
    }
`;

export default PayInfo;
