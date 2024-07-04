//* LIB
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

//*IMPORT
import API from "@/common/api/api";

const TwoFactorEnabled = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleTwoFactor = async () => {
    setLoading(true);
    try {
      // Giả sử đây là endpoint để kích hoạt/vô hiệu hóa 2FA
      const response = await API.post("/user/enable-tow-factor", {
        enable: !isEnabled,
      });
      if (res.data.status === 200) {
        setIsEnabled(response.data.isEnabled);
        alert("Enabled successfull 😍");
      }
    } catch (error) {
      console.error("Error toggling two-factor authentication", error);
      // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo lỗi
    } finally {
      setLoading(false);
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
        <Typography variant="h4" gutterBottom>
          Two-Factor Authentication
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Status: {isEnabled ? "Enabled" : "Disabled"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleTwoFactor}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? "Processing..." : isEnabled ? "Disable" : "Enable"}{" "}
          Two-Factor Authentication
        </Button>
      </Box>
    </Container>
  );
};

export default TwoFactorEnabled;
