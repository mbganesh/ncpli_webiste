import {React, useEffect} from "react";
import { styled } from "@mui/system";
import { Typography, Breadcrumbs, Link, Card, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";

import { AnimationOnScroll } from "react-animation-on-scroll";

import Lab1 from "../../images/projectPageImages/assessment/lab1.svg";
import Lab2 from "../../images/projectPageImages/assessment/lab2.svg";
import Lab3 from "../../images/projectPageImages/assessment/lab3.svg";
import Footer from '../SubComponents/Footer';

export default function LanguageLab() {
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
    "•	Server should act as a Teacher console. This displays the list of students in the teacher console. From this the teacher can select the student to start or stop the class. ",
    "•	Real Time Screen and Audio Broadcast from Teacher console to Student",
    "•	Viewing and absorbing the screens of students from teacher console",
    "•	Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.",
    "•	Sharing files among System this module is used to share the files to other system or students from the teacher console.",
    "•	Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen. ",
    "•	Providing some sample call lessons this provides some sample lessons to student’s screen.",
  ];



  const softwareIclude = [
    "• Coverage of key grammar areas",
    "• Integrated Vocabulary",
    "• Dictionary ",
    "• Synonyms, Antonyms ",
    "• Sentence Making ",
    "• Spell Check ",
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Language Lab" }} />
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
              <Typography color="text.primary">Language Lab</Typography>
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
              Language Lab is a software program designed to help the teachers
              to improve the learning environment in a Computer-based classroom.
              It is to increase the language skill to the students in English.
              In this we can teach the good Pronunciation, Letter writing,
              Grammar, Conversation, Voice and words reorganization tools, and
              Parts of Speech.
              <br />
              <br />
              Without language we cannot communicate with the world. English is
              the common language that is spoken all over the world. So it is
              necessary to speak English fluently with proper pronunciation
              without any grammatical mistakes. we are implementing ―DIGITAL
              MULTIMEDIA LANGUAGE LAB in colleges and schools. We split whole
              subject coverage into three different levels. Level 1, Level 2 &
              Level 3.Language Hall - consists of Hardware -based classroom
              control system. We have established this language lab projects in
              12 colleges based on the UGC norms
              <br />
              <br />
              In this software Call Soft installed on each computer in a
              classroom, a teacher has the ability to, Reduce Student
              Distractions, Demonstrate Skills, Monitor Students, Access
              Students Understanding, and Help Individual Students.
            </Typography>
          </DivStyle4>
          {/* Ride Side */}
          <DivStyle4>
            <Typography
              variant="h6"
              style={{  fontFamily: "nunito",fontWeight:'bold' }}
            >
              Language Lab software include:
            </Typography>
            {softwareIclude.map((text) => (
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 20,
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
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              We have Memorandum of Understanding (MOU) with around 10 great
              institutions for our language lab program.
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
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
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
                marginTop: "10px",
                fontWeight:'bold'
              }}
            >
              How It Works
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              Language Lab works by enabling a teacher to control all student
              computers within a computer- based classroom. The most logical way
              to set up Language Lab is for each classroom or room to have a
              teacher computer. This setup enables all of the computers in the
              same classroom to interact with each other and one teacher to
              control the entire room.
              <br />
              <br />
              After installing the software on each computer in a classroom, one
              system can act as a teacher or server and remaining system can act
              as a student or client. The teacher can monitor students as they
              join and/or leave the class. This makes it easy to see who is
              absent or who has joined the class.
            </Typography>
          </DivStyle4>

          <DivStyle4>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito" }}
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
              style={{ marginBottom: 5, marginTop: 10, fontFamily: "nunito" }}
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
            <Typography
              variant="h6"
              style={{ marginBottom: 5, marginTop: 10, fontFamily: "nunito" }}
            >
              Features
            </Typography>

            {aboutSmartCard.map((text) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 7,
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

      <div style={{ width: "100%", marginTop: 25 }}>
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
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
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
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Art of Conversation
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
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
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Letter Writing
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        </DivStyle1>
      </div>
      <Footer />
    </>
  );
}
