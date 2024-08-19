import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { TextField, Button as MuiButton, Box } from '@mui/material';
import './EditProfile.css';
import './index.css';

const EditProfile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [address, setAddress] = useState('123 Main St, Springfield');
    const [detailedAddress, setDetailedAddress] = useState('Apartment 4B');
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState(30);

    const handleSave = () => {
        console.log('저장된 정보:', { name, email, address, detailedAddress, gender, age});
    };

    const handleAddressSearch = () => {
        // 주소 검색 로직을 여기에 추가합니다.
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

                {/* 주소 입력 필드와 주소 찾기 버튼을 동일한 행에 배치 */}
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
                            backgroundColor: "rgb(148, 160, 227)", // 버튼 배경 색상
                            color: "white", // 버튼 글씨 색상
                            "&:hover": {
                                backgroundColor: "rgb(120, 140, 200)", // 버튼 호버 시 배경 색상
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
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
                <MuiButton
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "rgb(148, 160, 227)",
                        color: "white", // 추가된 버튼 글씨 색상
                        "&:hover": {
                            backgroundColor: "rgb(120, 140, 200)",
                        },
                        width: "150px",
                        alignSelf: "center", // 버튼을 중앙으로 정렬
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
