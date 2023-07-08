import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const HomePageStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .full-image": {
      width: "99vw",
      height: "99vh",
    },
    "& .color-mask": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
      opacity: 0.6,
    },
    "& .overlay": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(139, 69, 19, 0.9)",
    },
    "& .main-box": {
      position: "relative",
      top: "20%",
    },
    "& .title-text": {
      color: theme.palette.secondary.light,
      fontSize: 120,
      letterSpacing: "10px",
      fontFamily: "roboto",
    },
    "& .welcome-text": {
      color: theme.palette.secondary.light,
      fontSize: 20,
      letterSpacing: "5px",
      fontFamily: "gothic-bold",
    },
    "& .sub-title-text": {
      color: theme.palette.secondary.light,
      fontSize: 50,
      letterSpacing: "10px",
      fontFamily: "roboto",
    },
    "& .main-btn": {
      marginTop: 20,
      fontSize: 15,
      fontFamily: "gothic-bold",
      background: theme.palette.secondary.light,
      letterSpacing: "2px",
      borderRadius: 0,
      width: 160,
      "&:hover": {
        background: theme.palette.secondary.light,
      },
    },
  },
}));
