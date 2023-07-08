import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const WelcomePageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "50px 50px",
    "& .title-text": {
      width: "50vw",
      color: theme.palette.primary.main,
      fontSize: 70,
      letterSpacing: "5px",
      fontFamily: "roboto",
      lineHeight: "1em",
      textAlign: "left",
    },
    "& .side-image-page": {
      width: "100%",
      height: "75vh",
    },
    "& .img-box": {
      width: "100%",
      height: "100%",
      background: `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
    },
    "& .sub-text": {
      textAlign: "left",
      marginTop: 50,
      fontSize: 15,
      fontFamily: "gothic-regular",
    },
    "& .sub-text-mini": {
      textAlign: "left",
      marginTop: 10,
      fontSize: 15,
      fontFamily: "gothic-regular",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
      "& .title-text": {
        fontSize: 40,
        width: "100%",
        letterSpacing: "2px",
      },
      "& .side-image-page": {
        width: "70vw !important",
        height: "55vh",
      },
    },
    [theme.breakpoints.down("lg")]: {
      "& .side-image-page": {
        width: "100%",
        height: "80vh",
      },
    },
  },
}));
