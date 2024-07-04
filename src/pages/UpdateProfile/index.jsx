//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//* IMPORT
import API from "@/common/api/api";

function UpdateProfile() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");

  const handleChangeName = (event) => {
    setusername(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      username: username,
      phone: phone,
      fullname: fullname,
      avatar: avatar,
      gender: parseInt(gender, 10),
    };
    try {
      const res = await API.post("/user/update-profile", formData);
      if (res.formData.status === 200) {
        navigate("/profile");
      } else {
        console.error("UserId not found in response");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography variant="h4">Update Profile</Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%", mt: 3 }}
        >
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            type="text"
            onChange={handleChangeName}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            type="number"
            onChange={handleChangePhone}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Fullname"
            variant="outlined"
            type="text"
            onChange={handleChangeFullname}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Avatar"
            variant="outlined"
            type="text"
            onChange={handleChangeAvatar}
            placeholder="Please insert your avatar URL"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Gender"
            variant="outlined"
            type="number"
            onChange={handleChangeGender}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default UpdateProfile;
