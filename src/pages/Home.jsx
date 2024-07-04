import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const realEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "A premier conference for tech enthusiasts and professionals.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "Music Festival",
    description:
      "A vibrant music festival featuring top artists from around the world.",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Art Exhibition",
    description:
      "An exhibition showcasing contemporary art from emerging artists.",
    image: "https://picsum.photos/200/300?random=3",
  },
];

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={4}>
        {realEvents.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
