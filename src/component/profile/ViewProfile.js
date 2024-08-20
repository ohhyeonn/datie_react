import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header'; 
import Footer from '../Footer';
import { Button as MuiButton, Typography, Box, Avatar } from '@mui/material';
import './ViewProfile.css';
import '../../index.css'; 

const ViewProfile = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const userData = {
        "john@example.com": {
            name: "John Doe",
            email: "john@example.com",
            address: "경기도 마포구 ",
            detailedAddress: "123단지 ",
            gender: "Male",
            age: 30,
            profilePicture: "https://via.placeholder.com/100",
            bankName: "KB국민은행",
            accountNumber: "123-456-7890"
        },
        // 추가 사용자 데이터를 여기에 넣을 수 있습니다.
    };

    const user = userData[email] || {};

    const handleEdit = () => {
        navigate(`/edit-profile/${email}`);
    };

    const handleChangePicture = () => {
        console.log('Change profile picture clicked');
    };

    const handleCardPasswordChange = () => {
        navigate('/change-cardpassword');
    };

    const handleCardLostReport = () => {
        navigate('/card-lost-report');
    };

    const handleCardCancellation = () => {
        navigate('/card-cancellation');
    };

    return (
        <div className="ViewProfile">
            <Header title="My Profile" />
            <div className="view_profile_container">
                <Box sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                    <Avatar
                        alt={user.name}
                        src={user.profilePicture}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                    />
                    <MuiButton
                        variant="outlined"
                        sx={{ mt: 1 }}
                        onClick={handleChangePicture}
                    >
                        이미지 변경
                    </MuiButton>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">이름</Typography>
                    <Typography variant="body1">{user.name}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">이메일</Typography>
                    <Typography variant="body1">{user.email}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">주소</Typography>
                    <Typography variant="body1">{user.address}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">상세주소</Typography>
                    <Typography variant="body1">{user.detailedAddress}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">성별</Typography>
                    <Typography variant="body1">{user.gender}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">나이</Typography>
                    <Typography variant="body1">{user.age}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">은행이름</Typography>
                    <Typography variant="body1">{user.bankName}</Typography>
                </Box>
                <Box sx={{ mt: 2, width: '100%' }}>
                    <Typography variant="h6">계좌번호</Typography>
                    <Typography variant="body1">{user.accountNumber}</Typography>
                </Box>
                <Box sx={{ mt: 3, width: '100%' }}>
                    {/* 2x2 버튼 레이아웃 */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                        <MuiButton
                            variant="contained"
                            sx={{
                                backgroundColor: "rgb(148, 160, 227)",
                                "&:hover": {
                                    backgroundColor: "rgb(120, 140, 200)",
                                },
                                width: "100%",
                            }}
                            onClick={handleCardPasswordChange}
                        >
                            카드 비밀번호 변경
                        </MuiButton>
                        <MuiButton
                            variant="contained"
                            sx={{
                                backgroundColor: "rgb(148, 160, 227)",
                                "&:hover": {
                                    backgroundColor: "rgb(120, 140, 200)",
                                },
                                width: "100%",
                            }}
                            onClick={handleCardLostReport}
                        >
                            카드 분실신청
                        </MuiButton>
                        <MuiButton
                            variant="contained"
                            sx={{
                                backgroundColor: "rgb(148, 160, 227)",
                                "&:hover": {
                                    backgroundColor: "rgb(120, 140, 200)",
                                },
                                width: "100%",
                            }}
                            onClick={handleCardCancellation}
                        >
                            카드 해지 신청
                        </MuiButton>
                        <MuiButton
                            variant="contained"
                            sx={{
                                backgroundColor: "rgb(148, 160, 227)",
                                "&:hover": {
                                    backgroundColor: "rgb(120, 140, 200)",
                                },
                                width: "100%",
                            }}
                            onClick={handleEdit}
                        >
                            내 정보수정
                        </MuiButton>
                    </Box>
                </Box>
            </div>
            <Footer />
        </div>
    );
};

export default ViewProfile;
