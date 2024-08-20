import React, { useState } from 'react';
import Header from '../Header'; 
import Footer from '../Footer';
import { Button as MuiButton, Box, Typography } from '@mui/material';
import './CardLostReportCancellation.css'; // 스타일 시트 필요에 따라 추가

const CardLostReportCancellation = () => {
    const [isReported, setIsReported] = useState(true); // 카드 분실 신고 상태 (기본값은 신고된 상태)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleCancelReport = () => {
        if (!isReported) {
            setError('카드가 이미 분실 신고 해지되었습니다.');
            return;
        }

        // 카드 분실 신고 해지 요청 로직을 여기에 추가합니다.
        // 예: API 호출

        setIsReported(false); // 상태 업데이트: 신고 해지
        setSuccess('카드 분실 신고가 성공적으로 해지되었습니다.');
        setError('');
    };

    return (
        <div className="CardLostReportCancellation">
            <Header /> {/* 헤더를 페이지 상단에 추가 */}
            <div className="content">
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>카드 분실 신고 해지</h2>
                <div className="cancellation_container">
                    <Typography sx={{ textAlign: 'center', mb: 2 }}>
                        {isReported ? '현재 카드가 분실 신고된 상태입니다.' : '카드 분실 신고가 해지된 상태입니다.'}
                    </Typography>

                    {isReported && (
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
                                onClick={handleCancelReport}
                            >
                                분실 신고 해지
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

export default CardLostReportCancellation;
