import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { PressPageStyles } from "../styles/PressPageStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PressData } from "../assets/DummyData";
import press from "../assets/images/press.jpg";

export const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
      },
    },
  ],
};

const PressPage = () => {
  const classes = PressPageStyles();
  return (
    <Box className={classes.root}>
      <Box className="full-image">
        <img src={press} className="color-mask" />
        <Box className="main-box">
          <Typography className="title-text">In the Press</Typography>
          <Slider {...settings}>
            {PressData?.map((data: any) => (
              <Card className="card-box" elevation={0}>
                <CardContent>
                  <Box display={"flex"} justifyContent={"space-evenly"}>
                    <Avatar src={data.profileImg} className="avatar-style" />
                    <Typography className="name-text">- {data.name}</Typography>
                  </Box>
                  <Typography className="review-box">{data.review}</Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default PressPage;
