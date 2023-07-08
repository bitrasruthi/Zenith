import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const PromoPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "150px 50px",
    "& .title-text": {
      color: theme.palette.primary.main,
      fontSize: 70,
      letterSpacing: "5px",
      fontFamily: "roboto",
      lineHeight: "10vh",
      textAlign: "center",
    },
    "& .card-box": {
      backgroundColor: "#F4F1ED",
      maxHeight: 500,
    },
    "& .card-content": {
      border: `1px solid ${theme.palette.primary.main}`,
      marginTop: "5vh",
    },
    "& .card-main-title": {
      textAlign: "left",
      fontSize: 15,
      fontFamily: "gothic-bold",
      color: theme.palette.primary.main,
    },
    "& .card-title": {
      textAlign: "left",
      fontSize: 12,
      fontFamily: "gothic-bold",
      color: theme.palette.primary.main,
    },
    "& .card-sub-title": {
      textAlign: "left",
      fontSize: 12,
      fontFamily: "gothic-regular",
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
      "& .title-text": {
        fontSize: 30,
        width: "100%",
        letterSpacing: "2px",
      },
    },
  },
}));
