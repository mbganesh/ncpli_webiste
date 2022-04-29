import '../App.css'
import AppbarHead from "./SubComponents/AppbarHead";
import React, { useEffect } from "react";
import background from "../images/aboutUsImages/banner2.jpg";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import Footer from "./SubComponents/Footer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import mission from "../images/aboutUsImages/mission.svg";
import vision from "../images/aboutUsImages/vision.svg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ScrollToTop } from "react-simple-scroll-up";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Colors } from "../constants";
import aboutContents from "./StaticTextContents/aboutContents";

export default function About() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const FirstSection = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const SecondSection = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 60,
    marginBottom: 60,
    justifyContent: "space-between",
    gap: 5,
    flexWrap: "wrap",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "87%",
      gap: 35,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const cardstyles = (theme) => ({
    padding: "5px",
    width: "40%",
    margin: "2px",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "justify",
    backgroundColor: "white",
    border: `2px solid`,
    borderColor: Colors.LIGHT_COLOR,

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("lg")]: {
      height: 400,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "About Us" }} />

      <BreadcrumbStyle>
        <Card sx={{ width: 200, height: 50 }}>
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
              <Typography color="text.primary">About Us</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <div style={{ marginTop: "2%", textAlign: "center" }}>
        <Typography variant="h3" style={{ color: Colors.MAIN_COLOR }}>
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ color: "grey", marginTop: "1%" }}
        >
          Know about us
        </Typography>
      </div>

     <div>

    
 <div class="custom-shape-divider-bottom-1651132178" > <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path> </svg> </div>
       
     <FirstSection>
        {" "}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <Typography
            variant="subtitle1"
            style={{ marginTop: 15, textAlign: "justify" }}
          >
            {" "}
            <br />
            <span style={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}>
              Netcom Computers Pvt Ltd
            </span>{" "}
            , an information technology based company since 2004, in Education
            and Training, is offering wide range of that include creating
            educational and training content of global relevance,designing and
            executing large learning initiatives and setting up the requisite
            infrastructure. <br /> <br /> Netcom is to build a quality and
            comprehensive technology infrastructure, establish and maintain an
            effective operational environment ,deliver Quality,prompt cost
            effective and reliable technology.Netcom to provide
            innovative,Quality and sustainable ICT solutions and services that
            meet the aspiration of the educational sector institutions like
            School boards and universities in the learning, teaching,research
            and management. <br /> <br /> Over these years, the company has
            earned a reputation that has a unique combination of value,trust and
            reliability.We have a formidable track record and are illustrious
            for the expertise of our team{" "}
          </Typography>{" "}
          <Typography
            variant="h4"
            style={{
              marginTop: 40,
              marginBottom: 30,
              color: Colors.MAIN_COLOR,
              fontWeight: "bold",
            }}
          >
            {" "}
            What we do?{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
            {" "}
            {} {aboutContents.whatWeDo}{" "}
          </Typography>{" "}
        </div>{" "}
      </FirstSection>
     </div>

      <SecondSection>
        <Card square elevation={4} sx={cardstyles}>
          <img
            src={aboutContents.missionVision[0]["imgIcon"]}
            style={{ height: 80, width: 80, marginTop: 10 }}
          />
          <Typography
            variant="h5"
            style={{ color: Colors.MAIN_COLOR, marginTop: 10 }}
          >
            {aboutContents.missionVision[0]["title"]}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ margin: 20, textAlign: "justify", marginTop: 10 }}
          >
            {aboutContents.missionVision[0]["content"]}
          </Typography>
        </Card>

        <Card square elevation={4} sx={cardstyles}>
          <img
            src={aboutContents.missionVision[1]["imgIcon"]}
            style={{ height: 80, width: 80, marginTop: 10 }}
          />
          <Typography
            variant="h5"
            style={{ color: Colors.MAIN_COLOR, marginTop: 10 }}
          >
            {aboutContents.missionVision[1]["title"]}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ margin: 20, textAlign: "justify", marginTop: 10 }}
          >
            {aboutContents.missionVision[1]["content"]}
          </Typography>
        </Card>
      </SecondSection>

      <Footer />
    </>
  );
}
