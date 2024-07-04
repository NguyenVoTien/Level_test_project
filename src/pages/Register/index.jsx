//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { PersonAddOutlined } from "@mui/icons-material";

//* IMPORT
import API from "@/common/api/api";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: email,
    };
    await API.post("/auth/register", data)
      .then((res) => {
        if (res.data.status === 201) {
          alert("Register successfull. please check mail😍");
          navigate("/login");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("An error occurred. Please try again later.");
      });
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
          <PersonAddOutlined sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h4" gutterBottom>
            Register
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
              Register
            </Button>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
