import { Box, Button, Grid, Typography } from "@mui/material";
import coverpic from "../assets/images/resort.jpg";
import { HomePageStyles } from "../styles/HomePageStyle";
import ScrollButton from "../components/ScrollButton";

const HomePage = () => {
  const classes = HomePageStyles();
  return (
    <Box className={classes.root}>
      <Box className="full-image">
        <Box className="overlay"></Box>
        <img src={coverpic} className="color-mask" />
        <Box className="main-box">
          <Grid container>
            <Grid item xs={12}>
              <Typography className="welcome-text">WELCOME TO</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="title-text">Zenith</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="sub-title-text">
                Resort & Spa Hotel
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button className="main-btn" size="small">
                <ScrollButton componentId={"welcome-page"} />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
