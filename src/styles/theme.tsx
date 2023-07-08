import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#623E2A",
      dark: "#3E3224",
      light: "#476561",
    },
    secondary: {
      main: "#9C8F85",
      dark: "#6F5E4B",
      light: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "gothic-regular",
  },
});

export default theme;
