import React, { useState } from 'react';
import Header from '../Header'; 
import Footer from '../Footer';
import { TextField, Button as MuiButton, Box, Typography } from '@mui/material';
import './CardPasswordChange.css'; // 스타일 시트 필요에 따라 추가

const CardPasswordChange = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handlePasswordChange = () => {
        if (newPassword.length !== 4 || confirmPassword.length !== 4) {
            setError('비밀번호는 정확히 4자리여야 합니다.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
            return;
        }
        setError('');
        // 비밀번호 변경 요청 로직을 여기에 추가합니다.
        // 예: API 호출

        // 성공 메시지
        setSuccess('비밀번호가 성공적으로 변경되었습니다.');
    };

    return (
        <div className="CardPasswordChange">
            <Header /> {/* 헤더를 페이지 상단에 추가 */}
            <div className="content">
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>카드 비밀번호 변경</h2>
                <div className="password_change_container">
                    <TextField
                        id="currentPassword"
                        label="현재 비밀번호"
                        variant="standard"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        inputProps={{ maxLength: 4 }} // 입력 길이 제한
                        sx={{ mt: 2, width: '100%' }}
                    />
                    <TextField
                        id="newPassword"
                        label="새 비밀번호"
                        variant="standard"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        inputProps={{ maxLength: 4 }} // 입력 길이 제한
                        sx={{ mt: 2, width: '100%' }}
                    />
                    <TextField
                        id="confirmPassword"
                        label="새 비밀번호 확인"
                        variant="standard"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        inputProps={{ maxLength: 4 }} // 입력 길이 제한
                        sx={{ mt: 2, width: '100%' }}
                    />

                    {error && (
                        <Typography sx={{ mt: 2, color: 'red', textAlign: 'center' }}>
                            {error}
                        </Typography>
                    )}
                    {success && (
                        <Typography sx={{ mt: 2, color: 'green', textAlign: 'center' }}>
                            {success}
                        </Typography>
                    )}

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
                            onClick={handlePasswordChange}
                        >
                            비밀번호 변경
                        </MuiButton>
                    </Box>
                </div>
            </div>
            <Footer /> {/* 푸터를 페이지 하단에 추가 */}
        </div>
    );
};

export default CardPasswordChange;
