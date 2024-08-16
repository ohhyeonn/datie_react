import React from "react";
import styled from "styled-components";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-top: 40px; /* margin-top 추가 */
`;

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        backgroundColor: "rgb(148, 160, 227)",
      }}
    >
      <BottomNavigationAction
        label="최근"
        value="recents"
        icon={<RestoreIcon />}
        sx={{
          color: "white", // 기본 색상
          "&.Mui-selected": {
            color: "white", // 선택된 상태 색상
          },
        }}
      />
      <BottomNavigationAction
        label="즐겨찾기"
        value="favorites"
        icon={<FavoriteIcon />}
        sx={{
          color: "white", // 기본 색상
          "&.Mui-selected": {
            color: "white", // 선택된 상태 색상
          },
        }}
      />
      <BottomNavigationAction
        label="위치"
        value="nearby"
        icon={<LocationOnIcon />}
        sx={{
          color: "white", // 기본 색상
          "&.Mui-selected": {
            color: "white", // 선택된 상태 색상
          },
        }}
      />
    </StyledBottomNavigation>
  );
}

export default Footer;
