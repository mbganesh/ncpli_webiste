import AppbarHead from "./SubComponents/AppbarHead";
import React, { Fragment } from "react";
import background from "../images/aboutUsImages/banner2.jpg"
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
export default function About() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));
  const TypographyStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      width: "92vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "45vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "67vw",
    },
  }));

  const cardstyles = (theme) => ({
    padding: "5px",
    width: 550,
    margin: "2px",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "justify",backgroundColor:Colors.LIGHT_COLOR,
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow:
        "0px 0px 30px 13px rgba(114,255,141,0.6)",
    }
  });

  const missionVision = [
    {
      title: "Vision",
      imgIcon: vision,
      itContent:
        "Netcom is to provide ubiquitous, secure and seamless access to information resources in all forms through reliable and robust infrastructure.To build better solution for education industry through AI and machine learning capabilities in many areas of space operations to enable people to empower the knowledge of the application of education.",
    },
    {
      title: "Mission",
      imgIcon: mission,
      itContent:
        "To provide best of breed software products to enable organization to run their businesss and operations better.To deliver effective IT solution and quality services.To enchance the competitive advantages of our clients.To maintain a sustainable social environment and be a socially responsible corporate citizen.",
    },
  ];

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "About Us" }} />
      {/* <BreadcrumbStyle>
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
              <Typography color="text.primary">About</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle> */}

      <div
        style={{
          height: "22vh",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" style={{ color: "white" }}>
          ABOUT US
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "70%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Typography style={{ marginTop: "1vh", textAlign: "justify" }}>
            <br /><span style={{ color: Colors.MAIN_COLOR, fontWeight:"bold" }}>Netcom Computers Pvt Ltd</span> ,
            an information technology based company since 2004, in Education and
            Training, is offering wide range of that include creating
            educational and training content of global relevance,designing and
            executing large learning initiatives and setting up the requisite
            infrastructure.
            <br />
            <br />
            Netcom is to build a quality and comprehensive technology
            infrastructure, establish and maintain an effective operational
            environment ,deliver Quality,prompt cost effective and reliable
            technology.Netcom to provide innovative,Quality and sustainable ICT
            solutions and services that meet the aspiration of the educational
            sector institutions like School boards and universities in the
            learning, teaching,research and management.
            <br />
            <br />
            Over these years, the company has earned a reputation that has a
            unique combination of value,trust and reliability.We have a
            formidable track record and are illustrious for the expertise of our
            team
          </Typography>

          <Typography variant="h4" style={{ marginTop: 40, marginBottom:40, color:Colors.MAIN_COLOR, fontWeight:"bold" }}>
            What we do?
          </Typography>

          <Typography style={{ marginTop: "1vh", textAlign: "justify" }}>
            Netcom Computers has a team of working with many fields of IT
            industry. We have strong foothold in a variety of fields like
            computer education, computer aided education, soft skill training,
            software solutions, web solutions, 3D and 2D animations, cartoon
            animations, etc.,
          </Typography>
        </div>
      </div>


        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: 60,
            marginBottom: 60,
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          {missionVision.map((text) => (
            <Card sx={cardstyles}>
              <img
                src={text.imgIcon}
                style={{ height: 80, width: 80, marginTop:10 }}
              />
              <Typography variant="h5" style = {{color:Colors.MAIN_COLOR, marginTop:10}}>{text.title}</Typography>

              <Typography variant="body1" style={{ margin:20, textAlign: "justify", marginTop:10 }}>
                {text.itContent}
              </Typography>
            </Card>
          ))}
        </div>


      <Footer />
    </>
  );
}
