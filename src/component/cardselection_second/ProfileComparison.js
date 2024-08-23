import React, { useState } from "react";
import styled from "styled-components";
import ProfileType from "./ProfileType";
import ResponsiveAppBar from "../RealHeader";
import Footer from "../Footer";
import Header from "../Header";
import { Button as MuiButton } from "@mui/material";

const ProfileComparison = () => {
  const [selectedType1, setSelectedType1] = useState("Type 2");
  const [selectedType2, setSelectedType2] = useState("Type 2");

  // 여러 프로필 이미지 배열
  const profileImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cefa2657ac78df46c9f16ba1a2e1e7387a5adf6257f902137ce595524fdf319e?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1234567890abcdef1234567890abcdef?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/abcdef1234567890abcdef1234567890?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTypeChange1 = (event) => {
    setSelectedType1(event.target.value);
  };

  const handleTypeChange2 = (event) => {
    setSelectedType2(event.target.value);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + profileImages.length) % profileImages.length
    );
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Header title={"카드선택"} />
      <ComparisonContainer>
        <ProfileImage src={profileImages[currentImageIndex]} alt="Profile" />
        <ButtonContainer>
          <NavigationButton onClick={handlePreviousImage}>◀</NavigationButton>
          <NavigationButton onClick={handleNextImage}>▶</NavigationButton>
        </ButtonContainer>
        <MustHaveLabel>TYPE 1. Must Have 가져야만해(Red)</MustHaveLabel>
        <ProfileSection>
          <ProfileTitle>나(본인)</ProfileTitle>
          <TypesContainer>
            {["Type 1", "Type 2", "Type 3"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  value={type}
                  checked={selectedType1 === type}
                  onChange={handleTypeChange1}
                />
                {type}
              </label>
            ))}
          </TypesContainer>
        </ProfileSection>
        <ProfileSection>
          <ProfileTitle>상대방</ProfileTitle>
          <TypesContainer>
            {["Type 1", "Type 2", "Type 3"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  value={type}
                  checked={selectedType2 === type}
                  onChange={handleTypeChange2}
                />
                {type}
              </label>
            ))}
          </TypesContainer>
        </ProfileSection>

        <MuiButton
          variant="contained"
          sx={{
            mt: 10,
            backgroundColor: "rgb(148, 160, 227)",
            "&:hover": {
              backgroundColor: "rgb(120, 140, 200)",
            },
            width: "50%",
            height: "50px",
          }}
        >
          선택하기
        </MuiButton>
      </ComparisonContainer>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const ComparisonContainer = styled.main`
  margin-top: 50px;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  aspect-ratio: 0.63;
  object-fit: contain;
  object-position: center;
  width: 111px;
  max-width: 100%;
`;

const MustHaveLabel = styled.span`
  display: flex;
`;

const ProfileSection = styled.section`
  margin-top: 39px;
`;

const ProfileTitle = styled.h2`
  color: #000;
  text-align: center;
`;

const TypesContainer = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: 18px;
  gap: 27px;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%; /* 버튼을 전체 너비에 맞춤 */
`;

const NavigationButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    background-color: #e0e0e0; /* 호버 시 색상 조정 */
  }
`;

export default ProfileComparison;
