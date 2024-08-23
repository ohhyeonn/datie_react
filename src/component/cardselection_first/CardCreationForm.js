import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as MuiButton, TextField } from '@mui/material';
import ResponsiveAppBar from '../RealHeader';
import Footer from '../Footer';
import Header from '../Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 사용
import { Token } from '@mui/icons-material';

const CardCreationForm = () => {
    const [loverId, setLoverId] = useState('');
    const [loverPw, setLoverPw] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleSubmit = async () => {
        const userno1 = 53; // 토큰에서 가져오는 userno

        const requestBody = {
            id: loverId,
            password: loverPw,
        };
        try {
            const response = await axios.post(
                'http://localhost:8090/api/lovercheck',
                requestBody,
            );
            // 성공적으로 요청이 완료되면
            console.log(response.data);
            if (response.data != 'fail') {
                // 서버에서 반환하는 성공 여부에 따라 조건 수정
                navigate(
                    '/card_selection?userno1=' +
                        userno1 +
                        '&userno2=' +
                        response.data,
                );
            } else {
                setErrorMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);
            setErrorMessage('서버와의 연결에 문제가 발생했습니다.');
        }
    };

    return (
        <div>
            <ResponsiveAppBar />
            <Header title={'내 애인 조회'} />
            <FormContainer>
                <CenteredContainer>
                    <CardImage
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd6203791ea3413ef7042de5a3eaac76a4432aaea83ddea035112f4371dd015?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744"
                        alt="Card preview"
                    />
                </CenteredContainer>
                <TextField
                    id="lover-id"
                    label="상대방 아이디"
                    variant="outlined"
                    value={loverId}
                    onChange={(e) => setLoverId(e.target.value)}
                    sx={{ mb: 2, width: '500px' }}
                />

                <TextField
                    id="lover-pw"
                    label="상대방 비밀번호"
                    type="password"
                    variant="outlined"
                    value={loverPw}
                    onChange={(e) => setLoverPw(e.target.value)}
                    sx={{ mb: 4, width: '500px' }}
                />

                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

                <CenteredContainer>
                    <MuiButton
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            mt: 1,
                            backgroundColor: 'rgb(148, 160, 227)',
                            '&:hover': {
                                backgroundColor: 'rgb(120, 140, 200)',
                            },
                            width: '500px',
                            height: '50px',
                        }}
                    >
                        다음으로
                    </MuiButton>
                </CenteredContainer>
            </FormContainer>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

const FormContainer = styled.form`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #000;
    font-weight: 700;
    padding: 34px 20px 34px 10px;
`;

const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
`;

const CardImage = styled.img`
    aspect-ratio: 1.62;
    object-fit: contain;
    object-position: center;
    width: 100%;
    max-width: 307px;
`;

const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 20px;
`;

export default CardCreationForm;
