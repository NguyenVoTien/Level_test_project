//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

//*IMPORT
import API from "@/common/api/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = { identifier: email, password: password };

    try {
      const res = await API.post("/auth/login-identifier", data);
      if (res.data.status === 200) {
        const newUserId = res.data.metadata.id;
        const newAccessToken = res.data.metadata.accessToken;
        if (res.data.metadata && newUserId) {
          localStorage.setItem("userId", newUserId);
          localStorage.setItem("Token", newAccessToken);
          console.log(newUserId);
          navigate("/home");
        } else {
          console.error("UserId not found in response");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
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
          <LockOutlined sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChangePassword}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
              Sign In
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/forget/password" variant="body2">
                Forgot password?
              </Link>
              <Link href="/register" variant="body2">
                Don't have an account? Register
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
