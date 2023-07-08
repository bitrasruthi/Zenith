import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ContactPageStyles } from "../styles/ContactPageStyle";

const ContactPage = () => {
  const classes = ContactPageStyles();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("sm") ?? "600"
  );

  return (
    <Box className={classes.root}>
      <Typography className="subtitle-text">
        Zenith Resort & Spa Hotel
      </Typography>
      <Box
        display={matches ? "block" : "flex"}
        justifyContent={"space-between"}
      >
        <Box mt={5} className="contact-box">
          <Typography className="contact-title">Reservations Office</Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={2}>
            <LocationOnIcon className="icon-color" />
            123 Anywhere St., Any City ST 12345
          </Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={1}>
            <PhoneIphoneIcon className="icon-color" />
            +1 23456 78905
          </Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={1}>
            <EmailIcon className="icon-color" />
            bitrabhagyasruthi@gmail.com
          </Typography>
        </Box>
        <Box mt={5} className="contact-box">
          <Typography className="contact-title">Office Hours</Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={1}>
            Monday to Friday 9:00 am to 6:00 pm
          </Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={3}>
            Saturday 9:00 am to 12:00 noon
          </Typography>
        </Box>
        <Box mt={5} className="contact-box">
          <Typography className="contact-title">Get Social</Typography>
          <Typography className="contact-subtitle" display={"flex"} mt={3}>
            <FacebookIcon className="icon-color" />
            <InstagramIcon className="icon-color" />
            <TwitterIcon className="icon-color" />
          </Typography>
          <Button className="tag-btn">Tag us in your photo</Button>
        </Box>
      </Box>
      <Typography
        className="copyright-text"
        display={matches ? "block" : "flex"}
        mt={5}
        justifyContent={"center"}
      >
        <CopyrightIcon className="icon-color" />
        Copyright 2023 Zenith @bitrabhagyasruthi. All right reserved
      </Typography>
    </Box>
  );
};

export default ContactPage;
