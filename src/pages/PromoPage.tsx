import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { PromoPageStyles } from "../styles/PromoPageStyle";
import { PromoData } from "../assets/DummyData";

const PromoPage = () => {
  const classes = PromoPageStyles();

  return (
    <Box className={classes.root}>
      <Typography className="title-text">Promos and Offers</Typography>
      <Grid container spacing={2} mt={2}>
        {PromoData?.map((data: any) => (
          <Grid item sm={12} md={6} lg={4}>
            <Card elevation={0} className="card-box">
              <CardMedia
                component="img"
                height="250vh"
                image={data.imgUrl}
                alt="Accomodation"
              />
              <CardContent className="card-content">
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

export default PromoPage;
