import { React, useState } from "react";
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
import AppbarHead from "../../components/SubComponents/AppbarHead";
import service from "../../images/services/MobileApplication/service.svg"
import desktopAppImg from "../../images/services/DesktopApplication/Desktop_app.svg"

import Footer from '../../components/SubComponents/Footer'


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

export default function MobileApplicationDevelopment() {

const appProcess=[
{title:"Discovery",text:"We work with clients to understand their business and we merge their initial concept with everything the team knows about mobile. We’ll assess the possible challenges and identify the ways to overcome them."},
{title:"Features & Architecture",text:" We establish what features go into the product and how they will work together. Here, we’re drafting a skeletal framework for the app in the form of wireframes."},
{title:"Design & Development",text:"When it comes to first impressions, it’s all about design. We’ll put our passion for good design to work and based on approved wireframes we’ll design all screens.The development process is broken down into sprints based on feature sets. Our development process will allow you to regularly review and assess what we’re building."},
{title:"Quality Assurance",text:" Our Quality Assurance team will test the app after each development sprint and once all major functionality is implemented."},
{title: "Launch",text:" After passing the Beta Build through a final round of QA and refinements, we’ll have in our hands a Release Candidate Build. We can either submit the app to the App Stores or provide you witheverything you need to do it yourself."},
{title:"Maintenance",text:" We provide our clients with a 3 months bug fixing period, free of charge, and maintenance packages that cover everything from small updates all the way to whole new versions."}]
  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BreadcrumbStyle>
        <Card sx={{ width: 470, height: 50 }}>
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
              <Typography color="text.primary">Services</Typography>
              <Typography color="text.primary">
                Mobile Application Development
              </Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <div style={{ width: "100%", marginTop: "5%" }}>
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
              Mobile App Development is the process of developing and helping to
              implement apps that run on{" "}
              <span style={{ fontWeight: "bold" }}>Android</span> and{" "}
              <span style={{ fontWeight: "bold" }}> iOS</span> Powered Mobile
              devices and a typical mobile application utilizes a network
              connection to work with remote computing resources.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Many of you will think that ―Our business style doesn’t need an
              app to sell products to our clients! And maybe that would have
              been the case in the past. But if you want to prepare for the
              future and start seeing the massive benefits right out the gate,
              you’ll definitely need a mobile app for your business development.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "240px" }}
                src={desktopAppImg}
              ></img>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        <DivStyle1 style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}
          >
            {" "}
            What does a Mobile App actually do?{" "}
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}
          >
            Mobile Applications would permit the users to have functional access
            to any products, information, process or services that they would
            demand in real-time.
            <br />
            It enables the business to send notifications about changes in
            products and services or something new.
          </Typography>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {appProcess.map((obj) => (
            <Card
              sx={{
                width: "25%",
                height: 290,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderTop: "5px solid green",
              }}
            >
              <CardContent>
                <Typography variant="h6">{obj.title}</Typography>
                <Typography variant="body1" style={{ marginTop: 10 , textAlign:'justify' }}>
                  {obj.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        <DivStyle1>
          <img src={service} width="100%" height="400px" />
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle1>
          <DivStyle2>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              {" "}
              What you can achieve by that?{" "}
            </Typography>
            <ul>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                Through that regular contact with your target clients, you’re
                fostering their trust.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                The more your clients trust you, the more likely they’ll be to
                listen to later sales pitches and would commit to your products
                and services.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                Netcom will create you a highly customized, client-friendly
                mobile application for making all your business operations and
                promotions easier.
              </Typography>
            </ul>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              {" "}
              Our Developing Strategies for Brand & Online Presence{" "}
            </Typography>
            <ul>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                Android Mobile & Tablet Application Development
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                iOS Application Development
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                E-commerce Development
              </Typography>
            </ul>
          </DivStyle3>
        </DivStyle1>
      </div>

      <Footer/>
    </>
  );
}
