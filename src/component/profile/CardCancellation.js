import React, { useState } from 'react';
import Header from '../Header'; 
import Footer from '../Footer';
import { Button as MuiButton, Box, Typography, TextField } from '@mui/material';
import './CardCancellation.css'; // 스타일 시트 필요에 따라 추가

const CardCancellation = () => {
    const [isCancelled, setIsCancelled] = useState(false); // 카드 해지 상태 (기본값은 해지되지 않은 상태)
    const [isPasswordPrompt, setIsPasswordPrompt] = useState(false); // 비밀번호 입력 폼 표시 여부
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleCancelCard = () => {
        setIsPasswordPrompt(true); // 비밀번호 입력 폼을 표시
    };

    const handlePasswordSubmit = () => {
        // 비밀번호 확인 로직을 여기에 추가합니다.
        const correctPassword = "yourCorrectPassword"; // 실제 비밀번호를 확인할 로직 추가 필요

        if (password !== correctPassword || confirmPassword !== correctPassword) {
            setError('비밀번호가 틀립니다.');
            setSuccess('');
            return;
        }

        setIsCancelled(true); // 상태 업데이트: 해지됨
        setSuccess('카드가 성공적으로 해지되었습니다.');
        setError('');
        setIsPasswordPrompt(false);
    };

    return (
        <div className="CardCancellation">
            <Header /> {/* 헤더를 페이지 상단에 추가 */}
            <div className="content">
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>카드 해지 신청</h2>
                <div className="cancellation_container">
                    <Typography sx={{ textAlign: 'center', mb: 2 }}>
                        {isCancelled ? '카드가 해지된 상태입니다.' : '카드 해지 신청을 할 수 있습니다.'}
                    </Typography>

                    {!isCancelled && !isPasswordPrompt && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <MuiButton
                                variant="contained"
                                sx={{
                                    backgroundColor: "rgb(148, 160, 227)",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "rgb(120, 140, 200)",
                                    },
                                    width: "150px"
                                }}
                                onClick={handleCancelCard}
                            >
                                카드 해지 신청
                            </MuiButton>
                        </Box>
                    )}

                    {isPasswordPrompt && (
                        <Box sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                            <TextField
                                label="현재 비밀번호"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 2, width: '100%' }}
                            />
                            <TextField
                                label="비밀번호 확인"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                sx={{ mb: 2, width: '100%' }}
                            />
                            <MuiButton
                                variant="contained"
                                sx={{
                                    backgroundColor: "rgb(148, 160, 227)",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "rgb(120, 140, 200)",
                                    },
                                    width: "150px"
                                }}
                                onClick={handlePasswordSubmit}
                            >
                                확인
                            </MuiButton>
                        </Box>
                    )}

                    {success && (
                        <Typography sx={{ mt: 2, color: 'green', textAlign: 'center' }}>
                            {success}
                        </Typography>
                    )}
                    {error && (
                        <Typography sx={{ mt: 2, color: 'red', textAlign: 'center' }}>
                            {error}
                        </Typography>
                    )}
                </div>
            </div>
            <Footer /> {/* 푸터를 페이지 하단에 추가 */}
        </div>
    );
};

export default CardCancellation;
