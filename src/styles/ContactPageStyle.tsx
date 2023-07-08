import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ContactPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 50px",
    background: theme.palette.primary.main,
    "& .subtitle-text": {
      color: theme.palette.secondary.light,
      fontSize: 50,
      letterSpacing: "5px",
      fontFamily: "roboto",
      lineHeight: "10vh",
      marginTop: "5vh",
      textAlign: "left",
    },
    "& .contact-box": {
      border: "1.5px solid #fff",
      width: "25vw",
      height: 170,
      padding: 10,
    },
    "& .contact-title": {
      fontSize: 20,
      color: theme.palette.secondary.light,
      fontFamily: "gothic-regular",
      textAlign: "center",
    },
    "& .contact-subtitle": {
      width: "15vw",
      color: theme.palette.secondary.light,
      fontFamily: "gothic-regular",
      textAlign: "left",
      fontSize: 12,
    },
    "& .icon-color": {
      color: theme.palette.secondary.light,
      width: 20,
      height: 20,
      marginRight: 10,
    },
    "& .tag-btn": {
      marginTop: 20,
      border: "1px solid #fff",
      borderRadius: "55px",
      color: theme.palette.secondary.light,
      fontSize: 12,
      textTransform: "none",
    },
    "& .copyright-text": {
      opacity: 0.5,
      color: theme.palette.secondary.light,
      fontSize: 12,
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
