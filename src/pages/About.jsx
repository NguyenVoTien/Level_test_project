import React from "react";
import { Container, Box, Typography, Avatar, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import avatarImg from "@/assets/images/profile/avatar.png";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={avatarImg}
          alt="Profile Picture"
          sx={{ width: 150, height: 150, mb: 2 }}
        />
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! My name is Tien.Fr.Dev. I am a website programmer with a
          passion for programming and learning about programming. I don't have
          much experience in website programming and however, I have worked with
          the website programming team at the Mosav project. A project about web
          sales. I like website programming because it will help me gain a lot
          of experience from both practice and work
        </Typography>
        <Typography variant="body1" paragraph>
          In my free time, I enjoy a cup of coffee, listen to gentle music and
          learn more about website programming. I always eager to learn new
          things and take on new challenges. Comfortable to Connect with me
          through my github.
        </Typography>
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
    </Container>
  );
};

export default About;
