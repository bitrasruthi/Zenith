import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { WelcomePageStyles } from "../styles/WelcomePageStyle";
import drinkPic from "../assets/images/drink.jpg";

const WelcomePage = () => {
  const classes = WelcomePageStyles();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.up("xl") ?? "1280"
  );

  return (
    <Box className={classes.root} id="welcome-page">
      <Grid container spacing={10}>
        <Grid item sm={12} md={6} lg={8}>
          <Typography className="title-text">
            Welcome to our luxurious home away from home
          </Typography>
          <Typography className="sub-text">
            Where our resort and hotel spa invites you to indulge in a world of
            relaxation and pampering. From the moment you arrive, we are
            dedicated to providing you with an unforgettable experience filled
            with serenity and comfort. Immerse yourself in our exquisite spa
            treatments, savor delectable culinary delights, and surrender to the
            tranquility of our elegant accommodations. Whether you seek a
            peaceful retreat or an adventurous escape, our resort and hotel spa
            offers the perfect sanctuary for your well-being. Welcome to a haven
            of luxury and rejuvenation that will exceed your every expectation.
          </Typography>

          {matches && (
            <>
              <Typography className="sub-text-mini">
                Indulge in the opulence of our well-appointed rooms and suites,
                designed with your utmost comfort in mind. Each room features
                plush furnishings, tasteful decor, and state-of-the-art
                amenities to ensure a relaxing and restful stay. Our spa
                facilities are a haven for relaxation and rejuvenation. Pamper
                yourself with a wide range of therapeutic treatments and
                massages, expertly delivered by our skilled therapists. Unwind
                in our tranquil spa environment, designed to melt away your
                stress and revitalize your body and mind.
              </Typography>
              <Typography className="sub-text-mini">
                For the culinary enthusiasts, our onsite restaurants offer a
                delightful gastronomic experience. Enjoy a delectable selection
                of international and local cuisines, prepared by our talented
                chefs using fresh and locally sourced ingredients. The dining
                venues provide a warm and inviting ambiance, perfect for a
                romantic dinner or a gathering with loved ones.
              </Typography>
            </>
          )}
          <Typography className="sub-text-mini">
            Welcome to Zenith Resort and Spa, where your well-being and
            satisfaction are our top priorities.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Box className="side-image-page">
            <img src={drinkPic} className="img-box" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
