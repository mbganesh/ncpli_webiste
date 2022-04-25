import React from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import Lab1 from "../../images/projectPageImages/assessment/lab1.svg";
import Lab2 from "../../images/projectPageImages/assessment/lab2.svg";
import AppbarHead from "../SubComponents/AppbarHead";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function CallSoft() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      width: "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      width: "82%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("xl")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));

  const DivStyle4 = styled("div")(({ theme }) => ({
    ".container": {
      position: "relative",
      marginTop: 10,
      "&:hover": {
        opacity: 1,
      },
    },

    ".overlay": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
      display: "flex",
      transition: ".5s ease",
      opacity: 0,
      padding: "20px",
      "&:hover": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  }));

  const points = [
    "•	 The teacher can control the nodal computers of the students through his/her computer and correct them then and there during the session. ",
    "•	 The most logical way to set up CALLSOFT is for each classroom or room to have its own teacher channel, as well as just one teacher and a computer. ",
    "•	 This setup enables all the computers in the same classroom to interact with one another and one teacher to control the entire room. ",
    "•	 The teacher can monitor students as they join or leave the class. ",
    "•	 This makes it easy to see who is absent or who has newly joined the class. ",
  ];

  const aboutSmartCard = [
    "•	Server should act as a Teacher console. This displays the list of students in the teacher console. From this the teacher can select the student to start or stop the class. ",
    "•	Real Time Screen and Audio Broadcast from Teacher console to Student",
    "•	Viewing and absorbing the screens of students from teacher console",
    "•	Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.",
    "•	Sharing files among System this module is used to share the files to other system or students from the teacher console.",
    "•	Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen. ",
    "•	Providing some sample call lessons this provides some sample lessons to student’s screen.",
  ];

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Call Soft" }} />
      <BreadcrumbStyle>
        <Card elevation={6}>
          <CardContent>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                href="/"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home{" "}
              </Link>
              <Typography color="text.primary">Projects</Typography>

              <Typography color="text.primary">Call Soft</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>
      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle4>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Computer Based Tutorial is a new medium of imparting education and
              not just an interactive CD ROM equivalent to a book with a
              difference to view on a computer screen. The CBT course material
              should be designed keeping in mind one concept - the package
              should be useful to the end user.
              <br />
              <br />
              The success of a CBT depends on the content of the CBT and how the
              subject is conveyed. We have also developed CBT's for school
              students for all subjects. CALLSOFT is an English Language
              Learning Software specially designed for the development of
              English Language Skills in students which has provision for
              interaction between students and teachers.
            </Typography>
          </DivStyle4>
          {/* Ride Side */}
          <DivStyle4>
            {points.map((text) => (
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  paddingBottom: 10,
                  fontFamily: "nunito",
                }}
              >
                {text}
              </Typography>
            ))}

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 5%" }}></div>
            {/* React Player Div */}
          </DivStyle4>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Features
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              We have strong foothold in a variety of fields like computer
              education, computer-aided education, software solutions, web
              solutions, cartoon animations, etc. We are also doing data entry
              and conversion works and provide sales and servicing of computers
              and computer peripherals.
            </Typography>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <div className="container">
                <img
                  width="100%"
                  style={{
                    top: 0,
                    left: 0,
                    display: "block",
                    width: "100%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  }}
                  height="170%"
                  src={Lab1}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
                      }}
                    >
                      Digital Multimedia Language Lab
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>

          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Call Lab Projects
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              CALL LAB PROJECT - ELCOT 350 SCHOOLS IN TAMILNADU: We have
              implemented CALL LAB Project with ELCOT for 350 Schools in
              Tamilnadu. CALLSOFT works by enabling a teacher to control all
              student computers within a computer-based classroom.
            </Typography>

            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <div className="container">
                <img
                  width="100%"
                  style={{
                    top: 0,
                    left: 0,
                    display: "block",
                    width: "100%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  }}
                  height="170%"
                  src={Lab2}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
                      }}
                    >
                      Art of Conversation
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              The coordination of ELCOT in 1000 Schools in Thoothukudi,
              Tirunelveli, Kanyakumari, Madurai, Virudhunagar, Sivagangai,
              Ramanathapuram, Dindugal, Theni, Thirupur, Namakkal, Karur,
              Coimbatore, Erode, Salem, Dharmpuri, Krishnagiri, Thiruvannamalai,
              Vellore, Cudalore and Villupuram Districts in Tamil Nadu.
            </Typography>
          </DivStyle4>
        </DivStyle1>
      </div>
    </>
  );
}
