import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatarImg from "@/assets/images/profile/avatar.png";

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
        px: 2,
      }}
    >
      <Avatar
        src={avatarImg}
        alt="Profile Picture"
        sx={{ width: 150, height: 150, mb: 2 }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        If you have any questions or would like to get in touch, feel free to
        contact me through any of the methods below.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <EmailIcon sx={{ mr: 1 }} />
        <Typography variant="body1">
          <MuiLink href="mailto:your.email@example.com" color="inherit">
            tienvo28052000@gmail.com
          </MuiLink>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <PhoneIcon sx={{ mr: 1 }} />
        <Typography variant="body1">(+84) 829310012</Typography>
      </Box>
      <IconButton
        color="inherit"
        href="https://github.com/NguyenVoTien"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ContactPage;
