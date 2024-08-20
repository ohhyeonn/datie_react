import React, { useState } from 'react';
import Header from '../Header'; 
import Footer from '../Footer';
import { Button as MuiButton, Box, Typography } from '@mui/material';
import './CardLostReport.css'; // 스타일 시트 필요에 따라 추가

const CardLostReport = () => {
    const [isReported, setIsReported] = useState(false); // 카드 분실 신고 상태 (기본값은 신고되지 않은 상태)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleReport = () => {
        if (isReported) {
            setError('카드가 이미 분실 신고된 상태입니다.');
            return;
        }

        // 카드 분실 신고 요청 로직을 여기에 추가합니다.
        // 예: API 호출

        setIsReported(true); // 상태 업데이트: 신고됨
        setSuccess('카드 분실 신고가 성공적으로 접수되었습니다.');
        setError('');
    };

    return (
        <div className="CardLostReport">
            <Header /> {/* 헤더를 페이지 상단에 추가 */}
            <div className="content">
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>카드 분실 신고</h2>
                <div className="report_container">
                    <Typography sx={{ textAlign: 'center', mb: 2 }}>
                        {isReported ? '카드가 분실 신고된 상태입니다.' : '카드 분실 신고를 접수할 수 있습니다.'}
                    </Typography>

                    {!isReported && (
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
                                onClick={handleReport}
                            >
                                분실 신고
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

export default CardLostReport;
