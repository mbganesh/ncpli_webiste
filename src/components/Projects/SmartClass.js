import React from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { ScrollToTop } from 'react-simple-scroll-up'


import AppbarHead from '../SubComponents/AppbarHead';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


import smartClassImg from "../../images/projectPageImages/smart-Classroom/smart_class.svg"
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg"
import smartClassImg3 from "../../images/projectPageImages/smart-Classroom/smart_class_22.svg"
import smartClassImg4 from "../../images/projectPageImages/smart-Classroom/img 2.svg"


import ReactPlayer from "react-player";
import ComputerIcon from '@mui/icons-material/Computer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import location from "../../images/projectPageImages/smart-Classroom/location.svg"
import Footer from '../SubComponents/Footer';
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png"
import { Colors } from '../../constants';
import StarsIcon from '@mui/icons-material/Stars';


export default function Contact() {
  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));



  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex", margin: "0 auto",
    [theme.breakpoints.down("md")]: {

      width: "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", gap:5

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


    }
  }));
  const DivStyle2 = styled("div")(({ theme }) => ({
    ".container":
    {
      position: "relative",
      marginTop: 10,
      "&:hover": {
        opacity: 1
      },
    },

    ".overlay": {
      position: "absolute",
      bottom: 0,
      width: "100%", height: "100%",
      alignItems: "flex-end",
      display: "flex",
      transition: ".5s ease",
      opacity: 0,
      padding: "20px",
      "&:hover": {
        opacity: 1
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",

    },
    [theme.breakpoints.up("md")]: {
      width: "50%",


    }
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "42%",
    }
  }));




  const DivStyle4 = styled("div")(({ theme }) => ({
    margin: "0 auto", flexDirection: "column", display: "flex", justifyContent: "center",
    ".img": {
      boxShadow: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", overflow: "hidden",
      transformOrigin: "50% 65%",
      transition: "transform 5s, filter 3s ease-in-out",
      "&:hover": { transform: "scale(1.05)", }
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
    }
  }));




  const cardStyle = (theme) => ({



    [theme.breakpoints.down('md')]: {
      width: "100%", height: 1000
    },
    [theme.breakpoints.up('md')]: {
      width: "100%", height: 740
    },
    [theme.breakpoints.up('lg')]: {
      width: "100%", height: 670,
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%", height: 670,
    }
  })
  const cardStyle1 = (theme) => ({
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    [theme.breakpoints.down('md')]: {
      width: "100%", height: 730, marginTop: 3
    },
    [theme.breakpoints.up('md')]: {
      width: "100%", height: 740,
    },

    [theme.breakpoints.up('lg')]: {
      width: "100%", height: 740,
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%", height: 680,
    }
  })

  const smartClassProj = ["86 Smart Classrooms in Chennai Corporation Schools through ELCOT.",
    "126 AdiDravidar Welfare Department Schools through ELCOT.",
    "15 Kallar (Most Denotified Backward Class) schools in districts of Madurai, Theni and Dindugal through ELCOT.",
    "25 Smart classrooms through Tirunelveli Corporations.",
    "4 Smart classrooms through ELCOT by Coimbatore Corporations.",
    "3 Smart classrooms through School Education Department.",
    "Netcom e-Smart Class Rooms more than  300 Government and Corporation Schools through ELCOT in BOOT model."]


  const smartClassHighProj = ["The content installed in the server is Samacheer based syllabus for the Std. 6 to 12 with diagrams and animations for the easy understanding of students.",
    "The content has been developed and installed at schools in both Tamil and English language according to the medium of instruction required for the students.",
    "An excellent ambience with live voice and computer presentation through multimedia,projector will enable the students to have 100% attention which converts the teaching process into more effective learning than the traditional class room teaching.",
    "The touch screen feature placed in KIOSK is loaded with the same content for students to enhance self-learning, which is one of the main feature in the E-Smart Class Room project.",
    "We have these animated contents for the schools under both the State and the CBSE syllabus, in English, Tamil and Hindi.", "We take full credit as we have successfully implemented these projects within the stipulated time frame by the Government for the beneficial of student community."
  ]

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />

      <BreadcrumbStyle>
        <Card sx={{ width: 380, height: 50 }} >
          <CardContent>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
              <Typography color="text.primary">Projects</Typography>
              <Typography color="text.primary">Smart Class Room</Typography>
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

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 20, fontFamily: "nunito" }}>Smart Classroom is a specially designed computer enabled classroom and has interactive learning software which provides teachers with essential tools to manage classrooms, assess students and encourage collaboration.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>Smart Classroom is designed to integrate with the existing classroom technology and also with school's wireless or wired network. The need to improve the quality of education to global standards is contributing to the increase in adoption of smart classrooms in India.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>    Smart Classroom helps in making classroom sessions more interactive by incorporating live videos, audio, and pictures. This helps in improving students' engagement with learning. With advances in content creation technology and availability of online content, the proportion of digital
              content in course curriculum has increased.</Typography>


          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito" }}>Smart Classroom Teaching video</Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 56.25%" }} >
              <ReactPlayer width='100%' style={{ position: "absolute", top: 0, left: 0 }}
                height='100%' config={{ file: { attributes: { controlsList: "nodownload" } } }} url={"https://gdurl.com/DSy3"} controls ></ReactPlayer>
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

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} duration={2} >

              <div className="container" >
                <img width='100%' style={{ top: 0, left: 0, display: "block", width: "100%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} height='170%' src={smartClassImg2} ></img>
                <div className="overlay" >
                  <div style={{ display: "flex", flexDirection: "row" }} >
                    <img src={location} style={{ width: "27px" }} />
                    <Typography variant="h6" style={{ color: "white", fontWeight: "600", fontFamily: "nunito", textShadow: "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>Govt Hr Sec School, Sitheri, Dharmapuri,TN</Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle2>


          <DivStyle3>
            <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito" }}>Methodology</Typography>


            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 10, fontFamily: "nunito" }}>
              Smart class did what no one had ever thought of before, bring technology into the classroom. It brought an exhaustive repository of world class digital modules or lessons, (consisting of 2D and 3D animations, graphics, audio and video) on every subject in the K12 spectrum, which the teacher could easily access and project in the classroom that illuminated and explained abstract and difficult concepts with liquid clarity.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>
              The result was amazing. Knowledge flourished freed from the centuries old bonds of books and chalk and blackboard.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>
              A new light of understanding dawned on young awakened minds. And the classroom became a fascinating place to be in as a new generation of learners saw (instead of just being told and explained) for the first time. And the teacher smiled as she now saw not just one, two or three but a sea of hands go up every time she asked a question.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>Initial and ongoing trainings are given to the teachers. Training to teachers is given by the trainers
              appointed by the management. We can provide guidance to the teachers in digitizing existing curricular materials for use with the Smart Classrooms. A periodical training session is given to the teachers so that they can easily adopt the innovative technology. By this training, teachers can help the students to become familiar with IT and
              problem solving skills.
            </Typography>

          </DivStyle3>

        </DivStyle1>
      </div>


      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>

            <Card elevation={4} sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" style={{ margin:10, fontFamily: "nunito", color:Colors.MAIN_COLOR }}>Our Smart Classroom Projects</Typography>
                <Typography variant="body1" style={{ textAlign: "justify", margin: 10, fontFamily: "nunito" }}>Initial and ongoing trainings are given to the teachers. Training to teachers is given by the trainers
                  appointed by the management. We can provide guidance to the teachers in digitizing existing curricular materials for use with the Smart Classrooms. A periodical training session is given to the teachers so that they can easily adopt the innovative technology. By this training, teachers can help the students to become familiar with IT and
                  problem solving skills.
                </Typography>
               
                  {smartClassProj.map((text) => (
                    <div style={{ display: "flex", flexDirection: "row", margin: 10, marginTop:20 }} >
                      <ComputerIcon style={{color:Colors.MAIN_COLOR}}/>
                      <Typography variant="body1" sx={{ fontFamily: "nunito", paddingLeft: 1 }} > {text}</Typography>
                    </div>
                  ))}
               
              </CardContent>
            </Card>

          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Card elevation={4} sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" style={{ margin:10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}>Highlights of Netcom Smart Class Room</Typography>


                {smartClassHighProj.map((text) => (
                  <div style={{ display: "flex", flexDirection: "row", margin: 10, marginTop:20  }} >
                    <StarsIcon style={{color:Colors.MAIN_COLOR}} />
                    <Typography variant="body1" sx={{ fontFamily: "nunito", paddingLeft: 1 }} > {text}</Typography>
                  </div>
                ))}

              </CardContent>
            </Card>
          </DivStyle3>

        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 35, }}>
        <DivStyle1 style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito" }}>Passion for Learning</Typography>
          <Typography variant="body1" sx={{ fontFamily: "nunito", textAlign: "justify" }} > Smart Classroom is celebrating the influential people who inspire students "passion for learning". Initial and ongoing trainings are given to the teachers. Training to teachers is given by the trainers appointed by the management. We can provide guidance to the teachers in digitizing existing curricular materials for use with the Smart Classrooms.</Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 35, }}>
        <DivStyle1 >
          <DivStyle2 >



            <div className="container" >
              <img width='80%' style={{ top: 0, left: 0, boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} height='100%' src={smartClassImg4} ></img>
              <div className="overlay" >
                <div style={{ display: "flex", flexDirection: "row" }} >
                  <img src={location} style={{ width: "27px" }} />
                  <Typography variant="h6" style={{ color: "white", fontWeight: "600", fontFamily: "nunito", textShadow: "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>Govt Hr Sec School, Kunnur, Salem,TN</Typography>
                </div>
              </div>
            </div>



          </DivStyle2>
          <DivStyle2 >


            <div className="container" style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }} >
              <img width='80%' style={{ top: 0, left: 0, boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} height='100%' src={smartClassImg3} ></img>
              <div className="overlay" style={{ display: "flex", justifyContent: "flex-end" }} >
                <div style={{ display: "flex", flexDirection: "row" }} >
                  <img src={location} style={{ width: "27px" }} />
                  <Typography variant="h6" style={{ color: "white", fontWeight: "600", fontFamily: "nunito", textShadow: "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>Govt Hr Sec School, Melapalayam, Tirunelveli,TN</Typography>
                </div>
              </div>
            </div>
          </DivStyle2>

        </DivStyle1>
      </div>



      <div style={{ width: "100%", marginTop: 35, marginBottom: 50 }}>
        <DivStyle1>

          <Typography variant="body1" sx={{ fontFamily: "nunito", textAlign: "justify" }} >
            Smart Class Room is an integrated program for schools with interactive self-placed learning for students. Smart Class Room uses a rational approach in selecting Innovative Technology that gives good results. Improving the learning ability through self evaluation.              A Smart Class Room that has stationed a teacher equipped with computer and audio visual aids." </Typography>
        </DivStyle1>
      </div>

<Footer/>

    </>

  )
}