import { React } from "react";
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

import ComputerIcon from "@mui/icons-material/Computer";

import desktopAppImg from "../../images/services/DesktopApplication/Desktop_app.svg";

import Footer from "../../components/SubComponents/Footer";

const BreadcrumbStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const myTopCard = (theme) => ({
  width: 400,
  alignItems: "center",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
});

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

const SubCardStyle = styled("div")(({ theme }) => ({
  display: "flex" , justifyContent: "space-between",

  // [theme.breakpoints.down("md")]: {
  //   backgroundColor:'red',
  // },
  [theme.breakpoints.up("md")]: {
    backgroundColor:'green',
    flexWrap:'nowrap',
  },

  [theme.breakpoints.down("sm")]: {
    backgroundColor:'yellow',
    flexWrap:'wrap'
  },

  [theme.breakpoints.between("md","lg")]: {
    backgroundColor:'gray',
    flexWrap:'wrap'
  },

}));


const CardDetails = (theme) => ({
  width: "255px", height: "225px", margin:0.5 ,borderRadius: "15px",
wordWrap:'break-word',
  [theme.breakpoints.down("md")]: {
    backgroundColor:'red',
    width: "50%", height: "250px",

  },
  [theme.breakpoints.between("md","lg")]: {
    backgroundColor:'pink',
    width: '500px',
   height: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%", height: "215px",
  },

});




const cardStyle = (theme) => ({
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "10px 0px",
  },
  [theme.breakpoints.up("md")]: {
    width: "98%",
    height: 650,
  },
  [theme.breakpoints.up("lg")]: {
    width: "90%",
    height: 500,
  },
  [theme.breakpoints.up("xl")]: {
    width: "90%",
    height: 500,
  },
});

export default function DesktopDevelopment() {
  const deskAppFeature = [
    " Eliciting business requirements and describing the application scope.",
    "Formulating functional software requirements.",
    " Desktop app architecture design.",
    "UX and UI design.",
    "  Desktop app development and QA.",
    "Support and evolution.",
  ];

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BreadcrumbStyle>
        <Card sx={myTopCard}>
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
            <Typography color="text.primary">Desktop Development</Typography>
          </Breadcrumbs>
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
              Desktop application development is when a software developer works
              on an application that runs natively on a desktop computer running
              MacOS, Linux, or Windows. When developing desktop apps,
              programmers would be best served in mastering Java, Python, C++,
              and JavaScript.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              The desktop application has to do with how it connects to the
              internet. If the application maintains its functionality when the
              internet isn’t working, then it’s considered a desktop
              application.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Desktop applications are typically better suited to time-consuming
              tasks.{" "}
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
                alt="loading"
              />
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Card sx={cardStyle}>
              <CardContent>
                <div>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: 10, fontFamily: "nunito" }}
                  >
                    Netcom Desktop App Development services:
                  </Typography>

                  <ul>
                    {deskAppFeature.map((text) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 7,
                        }}
                      >
                        <ComputerIcon />
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "nunito",
                            paddingLeft: 1,
                            textAlign: "justify",
                          }}
                        >
                          {" "}
                          {text}
                        </Typography>
                      </div>
                    ))}
                  </ul>
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "nunito",
                    paddingLeft: 1,
                    textAlign: "justify",
                  }}
                >
                  {" "}
                  You can always contact us to have a helping hand for your
                  desktop development application.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "nunito",
                    paddingLeft: 1,
                    textAlign: "justify",
                  }}
                >
                  We make sure to transform your ideas into reality.
                </Typography>
              </CardContent>
            </Card>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <SubCardStyle>
              <Card
                sx={CardDetails}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: 10, fontFamily: "nunito" }}
                  >
                    All in-house
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                    }}
                  >
                    We have full control over the development project but may
                    encounter issues related to a lack of experienced resources.{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={CardDetails}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: 10, fontFamily: "nunito" }}
                  >
                    {" "}
                    Team augmentation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                    }}
                  >
                    All processes are in-house, but development is partially
                    outsourced to lower production time. Implies high confidence
                    in the in-house resources’ management and tech skills.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </SubCardStyle>
             <SubCardStyle style={{ marginTop:20 }}>
              <Card
                sx={CardDetails}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: 10, fontFamily: "nunito" }}
                  >
                    Partial outsourcing
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                    }}
                  >
                    All functions except for project management are outsourced.
                    Requires experienced PM talents in-house but raises
                    questions about their post-project use.{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={CardDetails}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: 10, fontFamily: "nunito" }}
                  >
                    {" "}
                    Full outsourcing
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                    }}
                  >
                    Outsourcing business analysis, project management, and
                    development but have to allocate efforts for properly
                    managing your vendor.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </SubCardStyle>
          </DivStyle3>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
