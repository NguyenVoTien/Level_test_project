import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

import Logo from "@/assets/images/logo/logoProfile.png";

const Navbar = ({ avatarUrl, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                marginRight: 8,
                height: "40px",
                width: "40px",
                borderRadius: "50%", // Hình tròn
              }}
            />
            Logo
          </Link>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            color="inherit"
            sx={{ mx: 2 }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/about"
            color="inherit"
            sx={{ mx: 2 }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/contacts"
            color="inherit"
            sx={{ mx: 2 }}
          >
            Contacts
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" component={Link} to="/profile">
            <Avatar src={avatarUrl} alt="profile" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
