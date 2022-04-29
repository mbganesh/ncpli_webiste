import { React, useState } from "react";
import { styled } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
// import Snackbar from '@mui/material/Snackbar';
import {
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  SnackbarContent,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

import image1 from "../images/contactPageImages/undrawcontact.svg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { Snackbar } from "@mui/material";

import { Buffer } from "buffer";



import Colors from "../constants/Colors";
import Footer from "./SubComponents/Footer";
window.Buffer = Buffer;

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const Root2 = styled("div")(({ theme }) => ({
  display: "flex",
  width: "70%",
  justifyContent: "space-between",
  [theme.breakpoints.between("md", "lg")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    width: "88%",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const Root3 = styled("div")(({ theme }) => ({
  width: "70%",
  height: "450px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "88%",
  },

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const RootItem1 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  marginRight: "10px",
  [theme.breakpoints.between("md", "lg")]: {
    marginRight: "0px",
    marginBottom: "20px",
  },

  [theme.breakpoints.down("md")]: {
    marginRight: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    marginRight: "0px",
    marginBottom: "20px",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const RootItem2 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  marginLeft: "10px",
  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: "0px",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const RootItem3 = styled("div")(({ theme }) => ({
  padding: "10px",
  display: "flex",
  alignItems: "center",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const dam2 = (theme) => ({
  background: `linear-gradient(135deg, #82B688, #75e671)`,
  width: "49%",
  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
    width: "100%",
  },
});

const dam3 = (theme) => ({
  background: `linear-gradient(135deg, #82B688, #75e671)`,
  width: "49%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
});

const dam = (theme) => ({
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    border: "none",
  },
});

export default function Contact() {
  const S3_BUCKET = "ganesh-bucket-22";
  const REGION = "ap-south-1";
  const ACCESS_KEY = "AKIAUDJT64J22AA4IF5P";
  const SECRET_ACCESS_KEY = "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";

  const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  };

  const [submitBar, setSubmitBar] = useState(false);

  const handleOpen = () => setSubmitBar(true);
  const handleClose = () => setSubmitBar(false);

  const [userData, setUserData] = useState({
    name: { text: "", isValid: false, errorMessage: "" },
    email: { text: "", isValid: false, errorMessage: "" },
    subject: { text: "", isValid: false, errorMessage: "" },
    message: { text: "", isValid: false, errorMessage: "" },
  });

  const HandleName = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      name: { ...prevStyle.name, text: e.target.value },
    }));

    if (userData.name.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        name: { ...prevStyle.name, isValid: false, errorMessage: "" },
      }));
    }
  };

  const HandleEmail = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      email: { ...prevStyle.email, text: e.target.value },
    }));

    if (userData.email.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: { ...prevStyle.email, isValid: false, errorMessage: "" },
      }));
    }
  };

  const HandleSubject = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      subject: { ...prevStyle.subject, text: e.target.value },
    }));

    if (userData.subject.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        subject: {
          ...prevStyle.subject,
          isValid: false,
          errorMessage: "",
        },
      }));
    }
  };

  const HandleMessage = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      message: { ...prevStyle.message, text: e.target.value },
    }));

    if (userData.message.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        message: { ...prevStyle.message, isValid: false, errorMessage: "" },
      }));
    }
  };

  const handleSubmit = () => {
    if (userData.name.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        name: {
          ...prevStyle.name,
          isValid: true,
          errorMessage: "Please Enter Your Name",
        },
      }));
    } else if (userData.email.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: {
          ...prevStyle.email,
          isValid: true,
          errorMessage: "Please Enter Your email",
        },
      }));
    } else if (
      !/\S+@\S+\.\S+/.test(userData.email.text.trim()) &&
      userData.email.text.trim() !== ""
    ) {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: {
          ...prevStyle.email,
          isValid: true,
          errorMessage: "Please Enter valid email",
        },
      }));
    } else if (userData.subject.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        subject: {
          ...prevStyle.subject,
          isValid: true,
          errorMessage: "Please Enter Your title",
        },
      }));
    } else if (userData.message.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        message: {
          ...prevStyle.message,
          isValid: true,
          errorMessage: "Please Enter Your message",
        },
      }));
    } else {
      var finalData = {
        name: userData.name.text,
        email: userData.email.text,
        subject: userData.subject.text,
        message: userData.message.text,
      };
      console.log(finalData);

      console.log("filled data");

      handleOpen();
    }
  };

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Contact" }} />
      <div style={{ backgroundColor: "white " }}>
        <div
          style={{
            marginTop: "2vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.3 }} fontSize="inherit" />
              Home
            </Link>
            <Link style={{ textDecoration: "none" }} color={Colors.MAIN_COLOR}>
              Contact Us
            </Link>
          </Breadcrumbs>
        </div>
        <br />
        <br />

        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Root>
              <div style={{ flex: 2 }}>
                <Card elevation={3} sx={dam}>
                  <CardContent>
                    <form style={{ padding: "10px" }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          variant="h5"
                          gutterBottom
                          style={{ borderBottom: "4px solid green" }}
                        >
                          GET IN TOUCH
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        Send us a message, we will call back later
                      </Typography>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          marginBottom: "20px",
                        }}
                      >
                        <RootItem1>
                          <TextField
                            autoComplete="off"
                            value={userData.name.text}
                            onChange={(e) => HandleName(e)}
                            error={userData.name.isValid}
                            helperText={userData.name.errorMessage}
                            id="outlined-basic"
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                          />
                        </RootItem1>
                        <RootItem2>
                          <TextField
                            autoComplete="off"
                            value={userData.email.text}
                            onChange={(e) => HandleEmail(e)}
                            error={userData.email.isValid}
                            helperText={userData.email.errorMessage}
                            id="outlined-basic"
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                          />
                        </RootItem2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <TextField
                          autoComplete="off"
                          value={userData.subject.text}
                          onChange={(e) => HandleSubject(e)}
                          error={userData.subject.isValid}
                          helperText={userData.subject.errorMessage}
                          id="outlined-basic"
                          fullWidth
                          label="Subject"
                          variant="outlined"
                        />
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <TextField
                          autoComplete="off"
                          maxRows={2}
                          rows={2}
                          value={userData.message.text}
                          onChange={(e) => HandleMessage(e)}
                          error={userData.message.isValid}
                          helperText={userData.message.errorMessage}
                          id="outlined-basic"
                          multiline
                          fullWidth
                          label="Message"
                          variant="outlined"
                        />
                      </div>

                      <Button
                        onClick={() => handleSubmit()}
                        variant="contained"
                        style={{ backgroundColor: "#80BD85" }}
                      >
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <RootItem3>
                <Box
                  component="img"
                  sx={{ height: "250px", width: "100%" }}
                  alt="First Image Place"
                  src={image1}
                />
              </RootItem3>
            </Root>
          </div>

          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Root2>
              <Card sx={dam2}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    Head Office
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <HomeIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle", marginBottom: "5px" }}
                    />{" "}
                    Nathan Street, Adaikalapuram, 1/1, Trivandrum Rd,
                    Palayamkottai, Tirunelveli, Tamil Nadu 627002, India
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <MailIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    info@netcomcomputersindia.com
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <PhoneIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    +919585652538
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={dam3}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    Branch Office
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <HomeIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle", marginBottom: "5px" }}
                    />{" "}
                    No. 5/3, Second Floor, Kush Kumar Road, Nungambakkam,
                    Chennai - 600 034
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <MailIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    info@netcomcomputersindia.com
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    <PhoneIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    +919885652538
                  </Typography>
                </CardContent>
              </Card>
            </Root2>
          </div>
          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Root3>
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1ZpjFzBZqaF_lOgNmYQ9gk3nqTBDJBQAc&ehbc=2E312F"
                frameborder="0"
                border="0"
                width="100%"
                height="600px"
                aria-hidden="false"
                tabindex="0"
                style={{ border: 0, marginTop: "-67px" }}
              ></iframe>
            </Root3>
          </div>
          <br />
        </div>
      </div>

      <Footer />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        severity="success"
        open={submitBar}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#157561",
          }}
          message="Thanks a lot! for contacting us."
        />
      </Snackbar>
    </>
  );
}