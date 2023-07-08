import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const FamilySuitePageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "50px 50px",

    "& .title-text": {
      color: theme.palette.primary.main,
      fontSize: 70,
      letterSpacing: "5px",
      fontFamily: "roboto",
      textAlign: "left",
    },
    "& .side-image-page": {
      height: "50vh",
    },
    "& .img-box": {
      width: "100%",
      height: "100%",
      background: `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
    },
    "& .sub-text": {
      textAlign: "left",
      marginTop: "12vh",
      fontSize: 15,
      fontFamily: "gothic-regular",
    },
    "& .img-content": {
      border: `1px solid ${theme.palette.primary.main}`,
      marginTop: "5vh",
      fontSize: 12,
      fontFamily: "gothic-bold",
    },
    "& .panel-image1": {
      height: "65vh",
    },
    "& .panel-image2": {
      height: "65vh",
    },
    "& .img-content1": {
      border: `1px solid ${theme.palette.primary.main}`,
      marginTop: "5vh",
      fontSize: 12,
      fontFamily: "gothic-bold",
      wordWrap: "break-word",
    },
    "& .img-content2": {
      border: `1px solid ${theme.palette.primary.main}`,
      marginTop: "5vh",
      fontSize: 12,
      fontFamily: "gothic-bold",
      wordWrap: "break-word",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
      "& .title-text": {
        fontSize: 30,
        width: "100%",
        letterSpacing: "2px",
      },
      "& .sub-text": {
        marginTop: "5vh",
      },
    },
  },
}));
