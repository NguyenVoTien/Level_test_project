//* LIB
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

//* IMPORT
import API from "@/common/api/api";

const Verification = () => {
  const { email, timeout, userId, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await API.get(
          `/auth/veri-account?user_id=${userId}&token=${token}&email=${email}`
        );

        if (res.data.status === 200) {
          alert("Register successfull. please check mail😍");
          // Navigate to login page after successful verification
          navigate("/login");
        } else {
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during verification:", error);
        alert("An error occurred. Please try again later.");
      }
    };

    verifyAccount();
  }, [email, userId, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleResendLink = async (event) => {
    event.preventDefault();
    const dataResend = { email: email };
    try {
      const response = await API.post(
        "/auth/resend-link-verification",
        dataResend
      );
      if (response.dataResend.status === 200) {
        alert("Resend Link successfull. please check mail😍");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Container sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h6"
          component="h3"
          fontWeight="bold"
          mb={{ xs: 2, sm: 3, md: 4 }}
        >
          Chúc Mừng Bạn Đã Đăng Ký Thành Công, mật khẩu tôi sẽ gửi qua gmail,
          vui lòng chọn tiếp tục và check gmail để đăng nhập !!!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "blue",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleResendLink}
            sx={{
              backgroundColor: "blue",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Resend Link
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Verification;
