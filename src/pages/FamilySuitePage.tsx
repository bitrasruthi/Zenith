import { FamilySuitePageStyles } from "../styles/FamilySuitePageStyle";
import { Box, Grid, Typography } from "@mui/material";
import familySuitePic from "../assets/images/familysuite.jpg";
import panelImage1 from "../assets/images/panel1.jpg";
import panelImage2 from "../assets/images/panel2.jpg";

const FamilySuitePage = () => {
  const classes = FamilySuitePageStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Typography className="title-text">The Family Suite</Typography>
          <Typography className="sub-text">
            This spacious and beautifully appointed suite offers ample room for
            everyone to unwind and create lasting memories. With separate
            sleeping areas, the children can enjoy their own space while still
            being connected to the main living area. The tastefully furnished
            living room provides the perfect gathering spot for quality family
            time, with plush sofas and a large dining table for shared meals or
            game nights. The private balcony or terrace offers a tranquil
            retreat where you can savor breathtaking views or simply relax in
            the gentle breeze.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box className="side-image-page">
            <img src={familySuitePic} className="img-box" />
          </Box>
          <Typography className="img-content">
            The Family Suite is the ideal sanctuary for families seeking both
            privacy and togetherness, ensuring a memorable stay filled with
            laughter, joy, and cherished moments
          </Typography>
        </Grid>
        <Grid item sm={12} md={4} mt={10}>
          <Box className="panel-image1">
            <img src={panelImage2} className="img-box" />
          </Box>
          <Typography className="img-content1">
            Savor the Finest Culinary Delights in Our <br />
            Exquisite Dining Room
          </Typography>
        </Grid>
        <Grid item sm={12} md={8} mt={10}>
          <Box className="panel-image2">
            <img src={panelImage1} className="img-box" />
          </Box>
          <Typography className="img-content2">
            Escape to ultimate relaxation in our resort bathrooms, where
            serenity and luxury intertwine. Immerse yourself in a haven of
            tranquility as you unwind in the opulent surroundings of our
            beautifully designed and meticulously maintained bathrooms.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FamilySuitePage;
