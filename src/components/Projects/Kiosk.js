import {React, useEffect} from "react";
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
import Footer from '../SubComponents/Footer';

export default function Kiosk() {
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
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "42%",
    },
  }));

  const cardStyle = (theme) => ({
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "0px 0px 30px 13px rgba(114,255,141,0.6)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height: 260,
    },
  });
  const cardStyle1 = (theme) => ({
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "0px 0px 30px 13px rgba(114,255,141,0.6)",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",

      marginTop: 3,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: 260,
    },

    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height: 260,
    },
  });

  const reason = [
    "• Migrate customers from teller-based transactions to on-line banking to reduce costs.",
    "• Enhance customer satisfaction by providing needed Web-based services in the branch office.",
    " • Increase revenue and 'share of wallet' by offering additional products and services via cross sell and up-sell opportunities.",
    "• Acquire new customers via sign-up/opening an account.",
    "• Educate new and existing customers about service & product offering.",
    "• Initiate and provide rewards in the form of loyalty.",
    "• Provide service 24 hours a day, 7 days a week, in centralized locations.",
    "• Learn more about customer preferences by collecting vital data.",
    "• Provide additional training and educational services to employees.",
    "• Bridge language barriers with non-English speaking customers.",
  ];

  const reasonForKiosk = [
    "• The primary reasons of self-service kiosks have become popular so quickly is that they allow companies to engage with their customer base on the user’s own terms.",
    "• The self-service kiosk is to allow customers to complete various common tasks on their own without the assistance of a dedicated employee.",
    "• Kiosks can also reduce business costs.",
    "• Kiosks are easily accessible and the individuals working there are usually pleasant and ready to help, both of which make it simpler to provide the customer with detailed information. ∙ Kiosks are small, temporary booths placed in areas with high foot traffic that are used by businesses to reach their customers.",
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Kiosk" }} />
      <BreadcrumbStyle>
        <Card>
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

              <Typography color="text.primary">Kiosk</Typography>
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
              A kiosk is an interactive system designed for public use that
              delivers information or enables transactions. Standard or custom
              applications developed for information kiosks provide customers
              with information, the ability to participate in loyalty programs,
              and transaction capability. Enterprises deploy kiosks to increase
              customer loyalty, strengthen their brand with target customers,
              and reduce operational costs.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              A kiosk includes a computer and a display screen and allows for
              customer input of data via an input device such as a touch screen
              or keyboard. A kiosk differs from a standard computer in that it
              runs application(s) developed for a specific purpose(s).
            </Typography>

            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Puropse of Kiosk:
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              A kiosk is a small, stand-alone booth typically placed in
              high-traffic areas for business purposes.It typically provides
              information and applications on education, commerce,
              entertainment, and a variety of other topics.
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
              Kiosk Using video
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
                  style={{
                    top: 0,
                    left: 0,
                    display: "block",
                    width: "100%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  }}
                  height="170%"
                  src={smartClassImg2}
                ></img>
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
            <Typography
              variant="h6"
              style={{
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Koisk Project
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              The software we developed for TMB contains the Contents that are
              designed and developed by using the FLASH software. Online
              Contents can be upload/download easily. If we want to changeor
              edit the contents, it will be easily modified and updated.
              <br />
              <br />
              NETCOM executed the KIOSK project along with Software and have
              installed 82 Bank Kiosks for Tamil Nadu Mercantile Bank (TMB).
              These KIOSKs have touch screen facility where the user or the
              customer could access his / her Banking details such as
              transaction details along with the information about the bank's
              new products and facilities. These KIOSKs have been established in
              the States of Karnataka, Gujarat, Delhi, Maharashtra, Andhra
              Pradesh, Kerala, Tamil Nadu and Puducherry in India.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Reasons to Consider a Kiosk for Your Bank
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom smart card is connected with our project ―School Management
              System‖. This is about the class attendance signing system using
              student’s smart card. The Purpose of our project is to collect the
              student’s class attendance by using student’s smart card and it
              also provides the options for the staff to calculate the student
              attendance percentage to view the attendance report and entry the
              student’s marks for automatically calculating the total,
              percentage, and grade.
            </Typography>

            {reason.map((text) => (
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

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom can give this project to Aranilayathurai, Agriculture,
              health care, travel desk, tourism department.
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
              KIOSK In Health care:
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom Health Care Kiosk helps in mechanised check-ins and
              registration, patient status, online filling of forms and
              questionnaires, insurance confirmation, systematize patient
              queuing, payment of bills and report of outstanding payments.
              Public Health Centre often utilize self-service kiosks to assist
              patients with check-in, as well as offer wayfinding services on
              large campuses.
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              KIOSK in Travel Desk:
            </Typography>

            <Typography
              variant="body1"
              style={{
                marginTop: 5,
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Netcom Travel Desk Kiosk used in bus and train stations to
              dispense tickets and provide wayfinding for different stops along
              each route.Printing tickets for train or bus journeys.Interactive
              touchscreen for viewing timetables and selecting train or bus
              tickets. Scanning railcards, and season tickets.Buying travel and
              season tickets.Gaining feedback via surveys on interactive
              kiosks.It is helpful in information such as bus or train times,
              travel updates or government guidelines
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              KIOSK at Airport:
            </Typography>

            <Typography
              variant="body1"
              style={{
                marginTop: 5,
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Netcom kiosks for flight check-in and self-tagging of checked
              luggage have been common for more than a decade now. Airports also
              utilize kiosks for wayfinding around facility, and to communicate
              flight information and gate changes. It is a touch-screen device
              allowing passengers to do self-check-in and pay with credit or
              debit cards for free.Kiosks provide a valid boarding pass at the
              end.Passengers can save time by using kiosks at busy airports and
              avoid long queues.
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              KIOSK in Tourism Department:
            </Typography>

            <Typography
              variant="body1"
              style={{
                marginTop: 5,
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Netcom Travel and Tourism kiosks provide visitors with information
              on local restaurants, hotels, shopping, and attractions.
              Individual listings provide additional information, and wayfinding
              capabilities allow visitors to navigate their destination.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="body1"
              style={{
                marginTop: 5,
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              Our kiosks can also streamline the check-in process— significantly
              reducing long lines at airports, train stations or car hire
              outlets. Netcom Tourism Kiosk Application streamlines information
              and provides the best possible and latest results, which
              significantly saves the time of users and consistently yields
              desirable results.
            </Typography>

            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              KIOSK in Agriculture:
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom agri-kiosk is finding a strong foothold and to empower
              marginalized peoples from some of the backward districts and
              creating skilled farmers.Agri-kiosk is a one-stop shop for all
              agricultural needs providing services such as soil testing, seed
              selection, appropriate pesticides, herbicides, and
              fungicides.Agri-kiosks also provide the latest
              agriculturalequipment on rent which make it easily accessible for
              women farmers.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginTop: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
              }}
            >
              Common Reasons for using KIOSK:
            </Typography>
            {reasonForKiosk.map((text) => (
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
          </DivStyle3>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
