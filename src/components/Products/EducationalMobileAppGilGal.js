import "../../App.css";
import { React, useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";

import ArrowIcon from "@mui/icons-material/Check";

import ChoiceBasedQuestion from "../../images/productPageImages/gilgal_app/featureIcons/ChoiceBasedQuestion.svg";
import ClearDoubts from "../../images/productPageImages/gilgal_app/featureIcons/ClearDoubts.svg";
import DeviceSupports from "../../images/productPageImages/gilgal_app/featureIcons/DeviceSupports.svg";
import LanguageSupport from "../../images/productPageImages/gilgal_app/featureIcons/LanguageSupport.svg";
import LearnFromAnywhere from "../../images/productPageImages/gilgal_app/featureIcons/LearnFromAnywhere.svg";
import LearnVideoClass from "../../images/productPageImages/gilgal_app/featureIcons/LearnVideoClass.svg";
import ModalQuestionPaper from "../../images/productPageImages/gilgal_app/featureIcons/ModalQuestionPaper.svg";
import QuestionAndAnswer from "../../images/productPageImages/gilgal_app/featureIcons/QuestionAndAnswer.svg";
import Footer from "../SubComponents/Footer";

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
  marginTop: 7,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "42%",
  },
}));

const MyCardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 10,
  marginBottom: 10,
  flexWrap: "wrap",
  gap: "25px",

  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

const MyCard = styled("div")(({ theme }) => ({
  width: "400px",
  padding: "3%",
  display: "flex",
  flexDirection: "column",
  boxShadow: `rgba(0, 0, 0, 0.24) 2px 5px 10px`,
  "&:hover": {
    boxShadow: `rgba(21,117,97,0.6) 0px 5px 15px`,
    transition: "0.8s",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  [theme.breakpoints.down("sm")]: {
    "&:hover": {
      boxShadow: `rgba(0, 0, 0, 0.24) 2px 5px 10px`,
    },
  },
}));

export default function EducationalMobileAppGilGal() {
  const ServicesList = [
    {
      icon: LearnVideoClass,
      title: "Learn with Video Classes",
      content: [
        "You can watch each topic and understand concepts together with videos.",
        "Our Video lectures cover all topics & chapters from the CBSE and State Board syllabus.",
        "Each Videos comes with lot of animations helps Students to understand concepts in an attractive manner",
      ],
    },
    {
      icon: QuestionAndAnswer,
      title: "Question and Answers",
      content: [
        "Learn 2 marks Questions with Answers of each and every subject in the Class.",
        "Every Important Concepts will be covered in the 2 marks Questions.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      icon: ModalQuestionPaper,
      title: "Model Question Papers for all Subjects",
      content: [
        "Revised Question Papers of every Subject in the Class will be provided.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      icon: ChoiceBasedQuestion,
      title: "Choice Based Questions",
      content: [
        "You can test your Knowledge of every Subject with the interactive Choice Based 1 mark Questions with solutions.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      icon: ClearDoubts,
      title: "Clear doubts anytime and anywhere",
      content: [
        "Connect with tutors to clear your doubts in real-time and learn better.",
        "Comes with 24*7 chat support and dedicated ask from the expert section.",
        "You can connect with the trainer itself through Q&A in the lecture session. ",
      ],
    },
    {
      icon: LanguageSupport,
      title: "Language Support",
      content: [
        "Learn in both Tamil and English Language.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      icon: LearnFromAnywhere,
      title: "Learn from Anywhere",
      content: [
        "You can learn in your Comfort Zone or wherever you wish.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      icon: DeviceSupports,
      title: "Device Support",
      content: [
        "Gilgal App is available in Mobiles, Tablets and  Desktops.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
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
              <Typography color="text.primary">Products</Typography>
              <Typography color="text.primary">
                Educational Mobile App
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
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              <span style={{ color: "#157561", fontWeight: "bold" }}>
                Gilgal
              </span>{" "}
              - Gilgal is an online learning app personalized for CBSE, ICSE &
              State Board students.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              We cover a very wide range of syllabus from CBSE Board, ICSE, and
              State Boards for Tamil Medium and English Medium.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              <span style={{ color: "#157561", fontWeight: "bold" }}>
                Gilgal
              </span>{" "}
              represents the delivery of educational material and learning
              through digital resources. The initial skepticism surrounding it
              was bound to falter when the results showed that studying online
              can be just as effective as studying in the classroom. Although
              the entire learning process is based on principles of formal
              education, it is provided via an internet connection through
              electronic devices such as computers, tablets, and even
              smartphones. This makes it easy for students to access their
              online classes anywhere and anytime.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "240px" }}
                src={
                  "http://192.168.1.31:3000/static/media/SDApp.f9917eab4968056a400cf6280fdfd69d.svg"
                }
                alt="loading"
              />
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      {/* our features   */}

      <div style={{ width: "100%", margin: "10" }}>
        {/* 67% middle of page */}
        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "nunito",
              fontWeight: "bold",
              color: "#157561",
              display: "flex",
              margin: "20px auto",
              borderBottom: "2px solid #157561",
              paddingBottom: "10px",
            }}
          >
            Our Features
          </Typography>

          <MyCardContainer>
            {ServicesList.map((obj) => (
              <MyCard>
                <img
                  alt="loading"
                  src={obj.icon}
                  height={75}
                  width={75}
                  style={{ margin: 10 }}
                />
                <Typography style={{ margin: 10 }} variant="h5">
                  {obj.title}
                </Typography>
                <div>
                  {obj.content.map((text) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: 7,
                      }}
                    >
                      <ArrowIcon sx={{ color: "#157561", marginTop: 1 }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "nunito",
                          paddingLeft: 1,
                          textAlign: "justify",
                          marginTop: 1,
                        }}
                      >
                        {" "}
                        {text}
                      </Typography>
                    </div>
                  ))}
                </div>
              </MyCard>
            ))}
          </MyCardContainer>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
