import { AccomodationData } from "../assets/DummyData";
import { AccomodationPageStyles } from "../styles/AccomodationPageStyle";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const AccomodationPage = () => {
  const classes = AccomodationPageStyles();
  return (
    <Box className={classes.root}>
      <Typography className="title-text">Accomodations</Typography>
      <Grid container spacing={2} mt={5}>
        {AccomodationData?.map((data: any) => (
          <Grid item sm={12} md={6} lg={4}>
            <Card elevation={0} className="card-box">
              <CardMedia
                component="img"
                height="250vh"
                image={data.imgUrl}
                alt="Accomodation"
              />
              <CardContent className="card-content">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="card-title"
                >
                  {data.name}
                </Typography>
                <Typography className="card-main-title" variant="body2">
                  {data.title}
                </Typography>
                <Typography className="card-sub-title" variant="body2">
                  {data.subTitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AccomodationPage;
