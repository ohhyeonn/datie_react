// ViewProfile.js
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./AdminMember.css";
import RealHeader from "../RealHeader";
const columns = [
  { field: "id", headerName: "번호", width: 50 },
  { field: "idName", headerName: "아이디", width: 130 },
  { field: "name", headerName: "이름", width: 130 },
  { field: "memberStatus", headerName: "멤버상태", width: 130 },
  { field: "cardStatus", headerName: "카드상태", width: 130 },
  { field: "regDate", headerName: "가입일", width: 130 },
];

const rows = [
  {
    id: 1,
    idName: "Snow",
    name: "존윅",
    regDate: "2024-09-01",
    memberStatus: "탈퇴",
    cardStatus: "미사용",
  },
  {
    id: 2,
    idName: "Lannister",
    name: "라니스타",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "사용중",
  },
  {
    id: 3,
    idName: "Lannister",
    name: "제이미",
    regDate: "2024-09-01",
    memberStatus: "관리자",
    cardStatus: "정지",
  },
  {
    id: 4,
    idName: "Stark",
    name: "스타크",
    regDate: "2024-09-01",
    memberStatus: "탈퇴",
    cardStatus: "해지",
  },
  {
    id: 5,
    idName: "Targaryen",
    name: "디저니",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "정지신청",
  },
  {
    id: 6,
    idName: "Melisandre",
    name: "메리산드래",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "사용중",
  },
  {
    id: 7,
    idName: "Clifford",
    name: "클리포드",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "사용중",
  },
  {
    id: 8,
    idName: "Frances",
    name: "프랜시스",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "사용중",
  },
  {
    id: 9,
    idName: "Roxie",
    name: "록시",
    regDate: "2024-09-01",
    memberStatus: "이용중",
    cardStatus: "사용중",
  },
];
const Admin = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <RealHeader className="adminHeader" />

      <div className="admin">
        <div className="admin_container">
          <Button
            variant="contained"
            sx={{
              ml: 2,
              mt: 2,
              backgroundColor: "rgb(148, 160, 227)", // 버튼 배경 색상
              color: "white", // 버튼 글씨 색상
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)", // 버튼 호버 시 배경 색상
              },
              width: "100px",
            }}
          >
            일괄 정지
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              mt: 2,
              backgroundColor: "rgb(148, 160, 227)", // 버튼 배경 색상
              color: "white", // 버튼 글씨 색상
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)", // 버튼 호버 시 배경 색상
              },
              width: "100px",
            }}
          >
            일괄 해지
          </Button>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="sort">검색</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value={"전체"}>모두</MenuItem>
              <MenuItem value={"id"}>번호</MenuItem>
              <MenuItem value={"idName"}>아이디</MenuItem>
              <MenuItem value={"name"}>이름</MenuItem>
              <MenuItem value={"memberStatus"}>멤버상태</MenuItem>
              <MenuItem value={"cardStatus"}>카드상태</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ margin: "7px", width: "190px" }}
            id="outlined-basic"
            label="검색어"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "rgb(148, 160, 227)", // 버튼 배경 색상
              color: "white", // 버튼 글씨 색상
              "&:hover": {
                backgroundColor: "rgb(120, 140, 200)", // 버튼 호버 시 배경 색상
              },
              width: "50px",
            }}
          >
            검색
          </Button>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 15 },
              },
            }}
            pageSizeOptions={[5, 10, 15]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
