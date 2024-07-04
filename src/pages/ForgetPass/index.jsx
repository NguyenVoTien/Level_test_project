//*LIB
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LockOpenOutlined } from '@mui/icons-material';

//*IMPORT
import API from "@/common/api/api";

const ForgetPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPass = async (event) => {
    event.preventDefault();
    let data = { email: email };

    try {
      const res = await API.post("/auth/forget", data);
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

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenOutlined sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h4" gutterBottom>
          Forget Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleResetPass}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={handleChangeEmail}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </Button>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="/login" variant="body2">
                Already have an account? Sign In
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ForgetPage;
