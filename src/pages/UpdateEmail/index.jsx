//*LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

//*IMPORT
import API from "@/common/api/api";

const UpdateEmailWithOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const dataSendOTP = {
      email: email,
      hidden_emai: email,
      id: Number(localStorage.getItem("userId")),
    };
    try {
      const response = await API.post(
        "/user/send-otp-update-email",
        dataSendOTP
      );

      if (response.dataSendOTP.status === 200) {
        alert("OTP sent successfully. Please check your email.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Failed to send OTP. Please try again.");
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    const dataUpdateEmail = { email: email, otp: otp };
    try {
      // Gọi API để xác thực OTP và cập nhật email
      const response = await API.post("/user/update-email", dataUpdateEmail);
      if (response.dataUpdateEmail.status === 200) {
        alert("Email updated successfully.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error updating email:", error);
      setMessage("Failed to update email. Please try again.");
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
          <EmailIcon sx={{ mr: 1 }} />
          <Typography variant="h4">Update Email</Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSendOtp}
          sx={{ width: "100%", mt: 3 }}
        >
          <TextField
            fullWidth
            label="Enter your new email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Send OTP
          </Button>
        </Box>

        <Box
          component="form"
          onSubmit={handleUpdateEmail}
          sx={{ width: "100%", mt: 4 }}
        >
          <TextField
            fullWidth
            label="Enter OTP"
            variant="outlined"
            type="text"
            value={otp}
            onChange={handleOtpChange}
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Update Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateEmailWithOTP;
