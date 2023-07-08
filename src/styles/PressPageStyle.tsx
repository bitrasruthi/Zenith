import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const PressPageStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100vw !important",
    background: theme.palette.primary.main,
    "& .full-image": {
      height: "100vh",
      width: "100vw",
    },
    "& .color-mask": {
      position: "relative",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
      opacity: 0.2,
    },
    "& .main-box": {
      position: "relative",
      bottom: "100vh",
      padding: "100px 50px",
    },

    "& .title-text": {
      color: theme.palette.secondary.light,
      fontSize: 70,
      letterSpacing: "5px",
      fontFamily: "roboto",
      lineHeight: "10vh",
      marginTop: "5vh",
    },
    "& .card-box": {
      marginTop: "5vh",
      background: "transparent",
      maxHeight: 300,
    },
    "& .name-text": {
      fontFamily: "gothic-bold",
      color: theme.palette.secondary.light,
      marginTop: 15,
    },
    "& .review-box": {
      color: theme.palette.secondary.light,
      textAlign: "left",
      marginTop: "5vh",
      fontSize: 12,
    },
    "& li.slick-active button:before": {
      color: "#3E3224 !important",
    },
    "& .slick-dots li button:before": {
      opacity: 1,
      color: "#fff",
      marginTop: 30,
    },
    "& .avatar-style": {
      width: 70,
      height: 70,
    },
    [theme.breakpoints.down("sm")]: {
      "& .title-text": {
        fontSize: 40,
        width: "100%",
        letterSpacing: "2px",
      },
      "& .subtitle-text": {
        fontSize: 30,
        lineHeight: "5vh",
        textAlign: "center",
      },
      "& .contact-box": {
        width: "100%",
        height: "20vh",
      },
      "& .contact-title": {
        fontSize: 20,
      },
      "& .contact-subtitle": {
        width: "100%",
        fontSize: 12,
      },
    },
  },
}));
