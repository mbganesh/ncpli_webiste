import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { style, styled } from "@mui/system";

import ServiceMaintainenceIcon from "../images/homePageImages/serviceIcons/serviceMaintainance.svg";
import GraphicDesignIcon from "../images/homePageImages/serviceIcons/graphicDesign.svg";
import DesktopWebAppIcon from "../images/homePageImages/serviceIcons/desktopWebApp.svg";
import MobileAppIcon from "../images/homePageImages/serviceIcons/mobileApp.svg";
import CustomSoftwareIcon from "../images/homePageImages/serviceIcons/customSoftware.svg";
import HardwareMaintanenceIcon from "../images/homePageImages/serviceIcons/hardwareMaintainenceApp.svg";
import ShortFilmIcon from "../images/homePageImages/serviceIcons/shortFilm.svg";
import EContentIcon from "../images/homePageImages/serviceIcons/eContent.svg";

import { Button, Typography } from "@mui/material";

const OurServicesDataDiv = styled("div")(({ theme }) => ({
  width: "450px",
  padding: "15px",
  margin: "35px 0px",
  borderRadius: "20px",
  background: "#FDFAF6",
  boxShadow: `20px 20px 60px #bebebe, -20px -20px 60px #ffffff`,
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    margin: "35px 0px",
  },
}));

const OurServicesTopImage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -75,
  left: "40%",
  zIndex: 1,
  objectFit: "contain",
  borderRadius: "50%",
  backgroundColor: "#F1F6F9",
  padding: "12px",
  [theme.breakpoints.down("sm")]: {
    left: "25%",
  },
}));

const OurServicesBottomDiv = styled("div")(({ theme }) => ({
  height: 250,
    width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: 360,
  },
}));
export default function PhoneFrame() {
  const serviceContent = [
    {
      title: "Graphic Design",
      icon: GraphicDesignIcon,
      content:
        "With A Team Of Creative Design Professionals, We Support Our Clients To Enter Into The Global Business Market With Trendy And Eye-Catching Designs",
    },
    {
      title: "E Content Development",
      icon: EContentIcon,
      content:
        "Comprehensive digital repository offering superior-quality content in Mathematics, Physics, Chemistry, Biology, Social Sciences, English Grammar, Business Studies, Economics and Accountancy",
    },
    {
      title: "Short Film",
      icon: ShortFilmIcon,
      content: "We make Short Films, Ads, 2D and 3D Animations",
    },
    {
      title: "Web Application Development",
      icon: DesktopWebAppIcon,
      content:
        "A Composed Team Of Pre-Eminent And Rapid Working Web Development Professionals Are In Netcom",
    },
    {
      title: "Mobile Application Development",
      icon: MobileAppIcon,
      content:
        "With A Great Fame, Best Working Mobile Apps Are Warm Welcomed. In That Line, Apps From Netcom Has Received Great Response From Our Clients",
    },
    {
      title: "Web Hosting Services",
      icon: ServiceMaintainenceIcon,
      content:
        "Includes software upgrades, repairs and fixes. We will also monitor the performance of the software so you don’t face any issues",
    },
    {
      title: "Customized Software Development",
      icon: CustomSoftwareIcon,
      content:
        "Aim to provide you the exact services and solutions you have asked for, because we value your product!",
    },
    {
      title: "Hardware Support & Maintainance",
      icon: HardwareMaintanenceIcon,
      content:
        "Aim to provide you the exact services and solutions you have asked for, because we value your product!",
    },
  ];


  console.log(window.location.pathname);

  return (
    <>
      {/* root div */}
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: "15%",
          paddingRight: "15%",
        }}
      >
        {serviceContent.map((data) => (
          <OurServicesDataDiv>
            <div style={{ position: "relative", backgroundColor: "cyan" }}>
              <OurServicesTopImage>
                <img
                  src={data.icon}
                  style={{ height: "60px", width: "60px" }}
                />
              </OurServicesTopImage>
            </div>

            <OurServicesBottomDiv
            >
              <div>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {" "}
                  {data.title}{" "}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "justify" }}> {data.content} </Typography>
              </div>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  border: "2px solid #157561",
                  color: "#157561",
                  "&:hover": {
                    transition: "0.5s",
                    backgroundColor: "#157561",
                    color: "white",
                    border: "1px solid #157561",
                    fontWeight: "bold",
                  },
                }}
              >
                {" "}
                Read More{" "}
              </Button>
            </OurServicesBottomDiv>
          </OurServicesDataDiv>
        ))}
      </div>
    </>
  );
}

// {
//   "homepage": "http://mbganesh.github.io/ncpli_live",
//   "name": "ncpli",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@emotion/react": "^11.8.2",
//     "@emotion/styled": "^11.8.1",
//     "@mui/icons-material": "^5.5.1",
//     "@mui/lab": "^5.0.0-alpha.77",
//     "@mui/material": "^5.5.2",
//     "@testing-library/jest-dom": "^5.16.2",
//     "@testing-library/react": "^12.1.4",
//     "@testing-library/user-event": "^13.5.0",
//     "animate.css": "^4.1.1",
//     "react": "^17.0.2",
//     "react-animation-on-scroll": "^5.0.0",
//     "react-countup": "^6.1.1",
//     "react-dom": "^17.0.2",
//     "react-player": "^2.10.0",
//     "react-router-dom": "^6.2.2",
//     "react-scripts": "5.0.0",
//     "react-scroll-up": "^1.3.7",
//     "react-simple-scroll-up": "^0.2.0",
//     "react-simply-carousel": "^5.1.4",
//     "react-slick": "^0.28.1",
//     "react-video-js-player": "^1.1.1",
//     "slick-carousel": "^1.8.1",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject",
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "gh-pages": "^3.2.3"
//   }
// }
