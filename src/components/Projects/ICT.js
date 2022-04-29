import {React, useEffect} from "react";
import { styled } from "@mui/system";

import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from '../SubComponents/Footer';


export default function ICT() {
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

  const aboutSmartCard = [
    "•	Server should act as a Teacher console. This displays the list of students in the teacher console.From this the teacher can select the student to start or stop the class. ",
    "•	Real Time Screen and Audio Broadcast from Teacher console to Student",
    "•	Viewing and absorbing the screens of students from teacher console",
    "•	Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.",
    "•	Sharing files among System this module is used to share the files to other system or students from the teacher console.",
    "•	Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen. ",
    "•	Providing some sample call lessons this provides some sample lessons to student’s screen.",
  ];

  const hardware = [
    "•	Server should act as a Teacher console. This displays the list of students in the teacher console.From this the teacher can select the student to start or stop the class. ",
    "•	Real Time Screen and Audio Broadcast from Teacher console to Student",
    "•	Viewing and absorbing the screens of students from teacher console",
    "•	Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.",
    "•	Sharing files among System this module is used to share the files to other system or students from the teacher console.",
    "•	Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen. ",
    "•	Providing some sample call lessons this provides some sample lessons to student’s screen.",
  ];


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Assessment" }} />
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

              <Typography color="text.primary">ICT/Hi-Tect Lab</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      {/* Full vertical page */}
      <div  style={{ width: "100%", marginTop: 25 }}>
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
              ICT/HITECH Skills are about understanding and applying a range of
              computer programs,software and other applications.The activities
              or equipment involve or result from the use of High Technology.
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              ICT Projects: Implementing & Delivering IT Infrastructure For
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              <span style={{ color: "green", fontWeight: "bolder" }}>
                ComputerEducation
              </span>
              . Experience in Facility Management Facility Management: Netcom
              has supplied and maintained around 1500 systems and Peripherals in
              300 Government schools spread across TamilNadu.Netcom maintains
              the uptime of 97% for the entire IT Infrastructure supplied in
              these schools forComputer Education.
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              Hardware Maintenance Management
            </Typography>

           {hardware.map((text)=>(

<Typography
variant="body1"
style={{
  textAlign: "justify",
  marginTop: 5,
  fontFamily: "nunito",
}}
>
    {text}

</Typography>


           ))}

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >

            </Typography>
          </DivStyle4>
          {/* Ride Side */}
          <DivStyle4>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              An assessment cycle effectively addressing assessment for
              improvement will also provide the necessary evidence for
              accountability.
              <br />
              <br />
              Netcom Assessment methods define the nature of the assessor
              actions and include:
              <br />
              <span style={{ color: "green" }}>Examine method:</span>The process
              of reviewing, inspecting, observing, studying, or analyzing one or
              more assessment objects (i.e., specifications, mechanisms, or
              activities). The purpose of the examine method is to facilitate
              assess or understanding, achieve clarification, or obtain
              evidence.
              <br />
              <span style={{ color: "green" }}>Interview method:</span> The
              process of holding discussions with individuals or groups of
              individuals within an organization to, once again, facilitate
              assessor understanding, achieve clarification, or obtain evidence.
              <br />
              <br />
              <span style={{ fontWeight: "bold", color: "green" }}>
                Test method:
              </span>
              The process of exercising one or more assessment objects (i.e.,
              activities or mechanisms) under specified conditions to compare
              actual with expected behavior
              <br />
              <br />
              Netcom Assessment is the ongoing process of gathering, analysing
              and interpreting evidence, reflecting on findings, making informed
              and consistent judgements to improve student learning.
              <br />
              Assessment for improved student learning and deep understanding
              requires a range of assessment practices to be used with three
              overarching purposes:
              <br />
              <br />
              <span style={{ fontWeight: "bold", color: "green" }}>
                Assessment for learning:
              </span>
              occurs when teachers use inferences about student progress to
              inform their teaching <br />
              Assessment as learning: occurs when students reflect on and
              monitor their progress to inform their future learning goals
              <br />
              Assessment of learning: occurs when teachers use evidence of
              student learning to make judgements on student achievement against
              goals and standards .
            </Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 5%" }}></div>
            {/* React Player Div */}
          </DivStyle4>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          <DivStyle4>
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
                  src={"https://netcomcomputersindia.com/img/lang.jpg"}
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
                      Using the Teacher Computer or Server
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Using the Teacher Computer or Server
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              After installing the teacher setup or server setup in the
              computer, the server or teacher has many features to access. They
              have the ability to control the student’s or client machines.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Using the Student’s Computer or Client
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Language Lab is set up to run in the background on student
              computers. All of the functionality is controlled at the teacher
              computer, which enables you to have control over how it is used.
            </Typography>
          </DivStyle4>

          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Features
            </Typography>

            {aboutSmartCard.map((text) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 10,
                    fontFamily: "nunito",
                  }}
                >
                  {text}
                </Typography>
              </div>
            ))}
          </DivStyle4>
        </DivStyle1>
      </div>

      {/* <div style={{ width: "100%", marginTop: 25 }}> */}
      {/* 67% middle of page */}
      {/* <DivStyle1>
        <DivStyle4>
          <Typography
            variant="h6"
            style={{
              marginBottom: 10,
              fontFamily: "nunito",
              marginTop: "10px",
            }}
          >
            Providing Grammar Tools
          </Typography>

          <Typography
            variant="body1"
            style={{
              textAlign: "justify",
              marginTop: 10,
              fontFamily: "nunito",
            }}
          >
            This Provides Some Grammar Tools Like - ARTICLES, VOICE, TENSE,
            PUNCTUATION, PARTS OF SPEECH CONVERSATION, DICTIONARY
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: "nunito",
              marginTop: "10px",
            }}
          >
            Language Lab System
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "justify",
              marginTop: 10,
              fontFamily: "nunito",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Level I - Grammar </span>
            Grammar through activities language lab and classroom. The teacher
            has to be a vigilant, careful of the performance, behavior,
            interest, and need of the students, the enthusiastic participants
            in the lab. Let’s consider Active Voice and Passive Voice as an
            example:
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
            Level II - Grammar
          </Typography>

          <Typography
            variant="body1"
            style={{
              textAlign: "justify",
              marginTop: 5,
              fontFamily: "nunito",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Skill Generation </span>
            Programs are designed to take into account your existing skills
            and knowledge as well as workplace and other training you may have
            received.Skills Generation will help you whether you are looking
            for new career opportunities, advancement within your current role
            or improving and honing existing skills and knowledge.
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "justify",
              marginTop: 5,
              fontFamily: "nunito",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Art Of Conversation </span>
            <br />
            Art of conversation includes the ability to listen to others as
            well as the ability to speak effectively.
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
        </DivStyle4>
      </DivStyle1> */}
      {/* </div> */}

      {/* <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}> */}
      {/* 67% middle of page */}
      {/* <DivStyle1>
        <DivStyle4>
          <Typography
            variant="h6"
            style={{
              marginBottom: 10,
              fontFamily: "nunito",
              marginTop: "10px",
            }}
          >
            Level III
          </Typography>

          <Typography
            variant="h6"
            style={{
              fontFamily: "nunito",
              marginTop: "10px",
            }}
          >
            Art of writing:
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "justify",
              marginTop: 10,
              fontFamily: "nunito",
            }}
          >
            Writing is the art of expressing our views, ideas, and
            thoughts.Writing is a very important skill anywhere, anytime as
            long as we live. Through writing, we communicate to teachers to
            receive grades in school. Effective writing can be a task as it
            demands much more than correct grammar. It is about to gain
            knowledge about sentence structure, develop your vocabulary, and
            build other basic writing skills.
          </Typography>
        </DivStyle4>

        <DivStyle4>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
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
                src={Lab3}
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
                    Letter Writing
                  </Typography>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </DivStyle4>
      </DivStyle1> */}
      {/* </div> */}


      <Footer />
    </>
  );
}
