// ViewProfile.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button as MuiButton, Typography, Box, Avatar } from '@mui/material';
import './ViewProfile.css';
import './index.css';

const ViewProfile = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    // 여기서는 임시 데이터로서 이메일에 따라 사용자 데이터를 설정할 수 있습니다.
    // 실제 데이터는 서버에서 가져오거나, 로컬 상태 또는 컨텍스트에서 가져올 수 있습니다.
    const userData = {
        "john@example.com": {
            name: "John Doe",
            email: "john@example.com",
            address: "경기도 마포구 ",
            detailedAddress: "123단지 ",
            gender: "Male",
            age: 30,
            profilePicture: "https://via.placeholder.com/100"
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
                <MuiButton
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "rgb(148, 160, 227)",
                        "&:hover": {
                            backgroundColor: "rgb(120, 140, 200)",
                        },
                        width: "300px",
                        alignSelf: "center",
                    }}
                    onClick={handleEdit}
                >
                    Edit Profile
                </MuiButton>
            </div>
            <Footer />
        </div>
    );
};

export default ViewProfile;
