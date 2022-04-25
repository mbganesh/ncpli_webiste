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
import AppbarHead from "../SubComponents/AppbarHead";

import ReactPlayer from "react-player";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Style } from "@mui/icons-material";

export default function SkillDevelopmentAndTraining() {
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
  const DivStyle2 = styled("div")(({ theme }) => ({
    ".container": {
      position: "relative",
      marginTop: 10,
      "&:hover": {
        opacity: 1,
      },
    },
       
       ".image":{        
          top: 0,
          left: 0,
          display: "block",                    
          width: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",                  
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
      width: "50%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "42%",
    },
  }));


  
  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />
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
              <Typography color="text.primary">
                Skill Development & Training
              </Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",                
                fontFamily: "nunito",
              }}
            >
              Soft skills are those personal values and interpersonal skills
              that determine a person’s ability to work in a collaborative
              environment. Soft skill development must be carried out as they
              are vital to one’s professional life as they help individuals to
              excel in the workplace.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              <span style={{ color: "green", fontWeight: "bolder" }}>
                Netcom
              </span>{" "}
              goal is to help you understand these important dynamics of group
              communication and learn how to put them into practice to improve
              your overall teamwork.
              <br />
              <br />
              The Importance of soft skill are distinct from hard skills or
              domain knowledge.it is increasingly being recogonized as a
              prerequisite in several sectors of job Market.
              <br />
              <br />
              Reasearch in many fields such as sales and marketing,software
              development, Engineering and Law has shown that to be successful
              in the workplace, knowledge alone is not enough instead soft
              skills are needed to deal with the external world and to work in a
              collaborative manner.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Communication Skills video
            </Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 56.25%" }}>
              <ReactPlayer
                width="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                height="100%"
                config={{
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                url={"https://gdurl.com/DSy3"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          <DivStyle2>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <div className="container">
                
                <img
                  width="100%"
                  
                  className="image"
                  height="170%"
                  
                  src={smartClassImg2}
                />
                
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={location} style={{ width: "27px" }} />
                    <Typography
                      variant="h6"
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        textShadow:
                          "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                      }}
                    >
                      Govt Hr Sec School, Sitheri, Dharmapuri,TN
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Communication Skills
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Netcom considered this as the crucial one, written and verbal
              communication is essential to build stronger professional as well
              as personal relationships. Effective communication skills comprise
              of good cognitive, auditory and visual processing skills. While
              workingon soft skill development, beginning with improving your
              communication is an essential step as it can help bring the rest
              of the abilities in place.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Presentation and Business communication Skill:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
              It is to communicate effectively in the workplace, you need to be
              able to present your information clearly. Presentation skills
              doesn't just mean knowing how to put a good set of powerpoint
              slides together, it means engaging and connecting with an audience
              to get your message across.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Personal Effectiveness Skills:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Personal Effectiveness Skills are abilities in this area that vary
              from individual to individual, from discipline to discipline and
              from situation to situation.
            </Typography>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Interpersonal and Team skills:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Interpersonal and team skills are the behaviors and tactics that a
              person uses to interact with stakeholders in a project
              effectively. The ability to establish a relationship with others
              and maintain that relationship is a key to the success of your
              project.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Presentation and Business communication Skill:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
              It is to communicate effectively in the workplace, you need to be
              able to present your information clearly. Presentation skills
              doesn't just mean knowing how to put a good set of powerpoint
              slides together, it means engaging and connecting with an audience
              to get your message across.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Personal Effectiveness Skills:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Personal Effectiveness Skills are abilities in this area that vary
              from individual to individual, from discipline to discipline and
              from situation to situation.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              OUR PROJECTS:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Netcom have ventured in various fields with different
              institutions.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Anna University Coimbatore:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
              We have provided training for the students of ANNA
              UNIVERSITY,COIMBATORE during 2008-2009 and were instrumental in
              preparing training packages with animation as Computer Aided
              Learning for Soft Skill Programme. We have supported the students
              with INTERVIEW SKILLS & GROUP DISCUSSION DVDs for 5000 students.
            </Typography>            
          </DivStyle3>
        </DivStyle1>
      </div>
    </>
  );
}
