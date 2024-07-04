//* LIB
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Button,
  Typography,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//* IMPORT
import API from "@/common/api/api";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const classes = useStyles();

  localStorage.getItem("Token");
  const userId = localStorage.getItem("userId");

  const redirectToUpdateProfile = () => navigate("/update/profile");
  const redirectToUpdateEmail = () => navigate("/update/email");
  const redirectToChangePassword = () => navigate("/change/password");
  const redirectToTwoFactorEnabled = () => navigate("/enable/twofactor");

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await API.get("/user/logout");
      if (response.status === 200) {
        // Assuming response structure is corrected
        alert("Logout successful.");
        navigate("/login");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("userId:", userId);
      if (!userId) {
        console.log("userId is not valid:", userId);
        setIsLoading(true);
        return;
      }
      try {
        setIsLoading(false);
        const res = await API.get(`/user/profile/${userId}`);
        if (res.data.status === 200) {
          setUser(res.data.metadata);
        } else {
          console.error("User not found in response");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId, Token]);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center p-4">No user data found.</div>;
  }

  // Adjusted rendering logic for a single user object
  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box display="flex" justifyContent="center" mb={3}>
        <Avatar
          alt="User Avatar"
          src={user.avatar || "/broken-image.jpg"}
          className={classes.avatar}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Short Name"
            variant="outlined"
            defaultValue={user.name || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full name"
            variant="outlined"
            defaultValue={user.fullName || Null}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            defaultValue={user.email || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone number"
            variant="outlined"
            defaultValue={user.phone || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel>Country</InputLabel>
            <Select defaultValue={user.country || Null} label="Country">
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State/region"
            variant="outlined"
            defaultValue={user.state || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            defaultValue={user.city || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            defaultValue={user.address || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Zip/code"
            variant="outlined"
            defaultValue={user.zipCode || Null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            defaultValue={user.company || Null}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Banned</Typography>
            <Switch defaultChecked={user.banned} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Email verified</Typography>
            <Switch defaultChecked={user.emailVerified} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="secondary"
              onClick={redirectToUpdateProfile}
            >
              Update Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={redirectToUpdateEmail}
            >
              Update Email
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={redirectToChangePassword}
            >
              Change Password
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={redirectToTwoFactorEnabled}
            >
              Two Factor Enabled
            </Button>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
