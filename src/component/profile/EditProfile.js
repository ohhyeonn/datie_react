import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅
import Header from '../Header'; 
import Footer from '../Footer';
import { TextField, Button as MuiButton, Box, MenuItem, Typography } from '@mui/material';
import './EditProfile.css';
import '../../index.css';

const EditProfile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [address, setAddress] = useState('123 Main St, Springfield');
    const [detailedAddress, setDetailedAddress] = useState('Apartment 4B');
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState(30);
    const [bankName, setBankName] = useState('KB국민은행');
    const [accountNumber, setAccountNumber] = useState('123-456-7890');
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerificationRequested, setIsVerificationRequested] = useState(false);
    const [timer, setTimer] = useState(180); // 3분 = 180초

    const navigate = useNavigate(); // useNavigate 훅 초기화

    // 인증 요청 버튼을 누를 때 실행되는 함수
    const handleVerificationRequest = () => {
        setIsVerificationRequested(true);
        setVerificationCode('');
        setTimer(180); // 3분 타이머 시작

        // 타이머 감소 로직
        const countdown = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
    };

    const handleSave = () => {
        console.log('저장된 정보:', { name, email, address, detailedAddress, gender, age, bankName, accountNumber, verificationCode });
        
        // 수정 완료 알림 팝업
        alert('수정완료 되었습니다.');

        // 이메일을 URL 파라미터로 포함시켜 view-profile 페이지로 이동
        navigate(`/view-profile/${email}`);
    };

    const handleAddressSearch = () => {
        console.log('주소 찾기 클릭됨');
    };

    return (
        <div className="EditProfile">
            <Header title="Edit Profile" />
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>내 정보 수정</h2>
            <div className="edit_profile_container">
                <TextField
                    id="name"
                    label="이름"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mt: 2, width: '100%' }}
                />
                <TextField
                    id="email"
                    label="이메일"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mt: 2, width: '100%' }}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <TextField
                        id="address"
                        label="주소"
                        variant="standard"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{ width: '80%' }}
                    />
                    <MuiButton
                        variant="contained"
                        sx={{
                            ml: 2,
                            backgroundColor: "rgb(148, 160, 227)",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "rgb(120, 140, 200)",
                            },
                            width: "125px"
                        }}
                        onClick={handleAddressSearch}
                    >
                        주소찾기
                    </MuiButton>
                </Box>

                <TextField
                    id="detailedAddress"
                    label="상세주소"
                    variant="standard"
                    value={detailedAddress}
                    onChange={(e) => setDetailedAddress(e.target.value)}
                    sx={{ mt: 2, width: '100%' }}
                />
                <TextField
                    id="gender"
                    label="성별"
                    variant="standard"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    select
                    sx={{ mt: 2, width: '100%' }}
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <TextField
                    id="age"
                    label="나이"
                    variant="standard"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    sx={{ mt: 2, width: '100%' }}
                />

                <TextField
                    id="bankName"
                    label="은행 이름"
                    variant="standard"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    select
                    sx={{ mt: 2, width: '100%' }}
                >
                    <MenuItem value="KB국민은행">KB국민은행</MenuItem>
                    <MenuItem value="신한은행">신한은행</MenuItem>
                    <MenuItem value="우리은행">우리은행</MenuItem>
                    <MenuItem value="하나은행">하나은행</MenuItem>
                    <MenuItem value="IBK기업은행">IBK기업은행</MenuItem>
                    <MenuItem value="NH농협은행">NH농협은행</MenuItem>
                    <MenuItem value="카카오뱅크">카카오뱅크</MenuItem>
                    <MenuItem value="케이뱅크">케이뱅크</MenuItem>
                </TextField>

                {/* 계좌 번호 필드와 인증 요청 버튼 */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <TextField
                        id="accountNumber"
                        label="계좌 번호"
                        variant="standard"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        sx={{ width: '80%' }}
                    />
                    <MuiButton
                        variant="contained"
                        sx={{
                            ml: 2,
                            backgroundColor: "rgb(148, 160, 227)",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "rgb(120, 140, 200)",
                            },
                            width: "150px"
                        }}
                        onClick={handleVerificationRequest}
                    >
                        인증 요청
                    </MuiButton>
                </Box>

                {/* 인증번호 입력 필드 (인증 요청 후 나타남) */}
                {isVerificationRequested && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <TextField
                            id="verificationCode"
                            label="인증번호 입력"
                            variant="standard"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            sx={{ width: '70%' }}
                        />
                        <Typography sx={{ ml: 2, color: 'red' }}>
                            {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`}
                        </Typography>
                    </Box>
                )}

                <MuiButton
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "rgb(148, 160, 227)",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "rgb(120, 140, 200)",
                        },
                        width: "150px",
                        alignSelf: "center",
                    }}
                    onClick={handleSave}
                >
                    수정
                </MuiButton>
            </div>
            <Footer />
        </div>
    );
};

export default EditProfile;
