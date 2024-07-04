//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Link } from "@mui/material";

//*IMPORT
import API from "@/common/api/api";


const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const navigate = useNavigate();

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeReEnterPassword = (e) => {
    setReEnterPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== reEnterPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    let dataChange = { password: password };
    try {
      const response = await API.post("/user/change-pass", dataChange);
      if (response.dataChange.status === 200) {
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
    <Container maxWidth="sm" sx={{ mt: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography variant="h6" component="h2" fontWeight="bold" mb={4}>
        Change Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={handleChangePass}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Re-enter Password"
              onChange={handleChangeReEnterPassword}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Send Reset
            </Button>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Link href="/profile" sx={{ mt: 2 }}>
              Back
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ChangePass;
