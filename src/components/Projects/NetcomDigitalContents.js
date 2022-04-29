import { React, useEffect } from 'react'
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



export default function NetcomDigitalCOntents() {
  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));



  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex", paddingLeft: '5%',
    paddingRight: '5%',

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", gap: 5, paddingLeft: '5%',
      paddingRight: '5%'
    },

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5, paddingLeft: '5%',
      paddingRight: '5%'
    },

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      justifyContent: "space-between", paddingLeft: '15%',
      paddingRight: '15%'
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
      margin: "0 auto", backgroundColor: "red"

    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
      margin: "0 auto", backgroundColor: "blue"

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
    [theme.breakpoints.only("md")]: {
      width: "100%",
      margin: "0 auto"

    },
    [theme.breakpoints.up("md")]: {
      width: "42%",
    }
  }));


  const cardStyle = (theme) => ({
    width: "25%", height: 290, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderTop: "5px solid green",

    [theme.breakpoints.down('xs')]: {
      width: "100%", height: 290, backgroundColor: "grey"
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%", height: 290, backgroundColor: "green"
    },
    [theme.breakpoints.down('md')]: {
      width: "100%", height: 290, backgroundColor: "blue"
    },

    [theme.breakpoints.up('lg')]: {
      width: "40%", height: 290,
    },
    [theme.breakpoints.up('xl')]: {
      width: "30%", height: 290,
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


  const cardDatas = [
    { headName: "Pre Production", headContent: "The pre-production process of 3D animation involves the initial aspects of an animated film. This process includes the concept creation, storyboards, rough script reel, and character creation. With these steps complete, the animation production pipeline is ready to move to the production process." },
    { headName: "STORY", headContent: "Heads of story are in charge of turning the writer's words and the director's vision into a visual representation of the narrative. They produce series of panels to plan the action, staging and camera choices in 3D digital shots or 2D animation frames. They also work to ensure continuity betweenanimated scenes." },
    { headName: "ANIMATIC", headContent: "An animatic is an animated storyboard, a slideshow of images depicting movement. To create an animatic, storyboard images are cut together to make a rough draft animation, usually with sound effects or music, giving filmmakers an idea of what the final animation or live- actionsequence will look like." },
    { headName: "STORYBOARD", headContent: "A storyboard is a graphic organizer that plans a narrative. Storyboards are a powerful way to visually present information; the linear direction of the cells is perfect for storytelling, explaining a process, and showing the passage of time. At their core, storyboards are a set of sequential drawings to tell a story." },
    { headName: "DESIGN", headContent: "Animation design is the art of creating special effects and other designs for various forms of media, including video games, movies and even social media posts. Much of an animation designer's work is done with specialized computer software, and some even write their own code!" },
    { headName: "IDEA", headContent: "An animation is really just a moving story. So you need to have a story idea before you can begin." },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />


      <BreadcrumbStyle>
        <Card sx={{ width: 410, height: 50 }} >
          <CardContent>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
              <Typography color="text.primary">Projects</Typography>
              <Typography color="text.primary">Netcom Digital Contents</Typography>
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

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 20, fontFamily: "nunito" }}>Netcom Media Works has been started by a group of young and dynamic entrepreneurial IT professionals in the year of 2002 with a vision to make a mark in Information Technology. We are working with
              <span style={{}}>  2-D animation, Flash animation,3-D animation and Visual advertisements. </span>
              We are doing animation for short films, episodic works for television and web.
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>
              Our Development Division consists of established writers, illustrators and designers who generate ideas and concepts for commercially successful and market-driven products.  Netcom offers end-to-end animation services for production including storyboard, layout, background and animation in-betweening, clean-up and compositing.            </Typography>
            <Typography variant="h6" style={{ marginTop: 10, fontFamily: "nunito" }}>3-D Production</Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>The 3-D Animation Production is the set of processes that are used to convert an idea, into a finished product. It is a system designed to take each step in a pre-determined order so that everyone knows when and how their work needs to be done.         </Typography>



          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito", marginTop: 10 }}>Netcom Digital Content Demo video</Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 56.25%" }} >
              <ReactPlayer width='100%' style={{ position: "absolute", top: 0, left: 0 }}
                height='100%' config={{ file: { attributes: { controlsList: "nodownload" } } }} url={"https://gdurl.com/rNwo"} controls ></ReactPlayer>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>



      {/* Cards */}

      {/* <div style={{ marginTop: 70, display: "flex", flexDirection: "row", backgroundColor: "red", flexWrap: "wrap", paddingLeft: "15%", paddingRight: "15%", gap: 50 }} >
        {
          cardDatas.map((item, index) => (
            <div >
              <Card elevation={5} sx={{ width: "320px", height: "300px", }}>
                <CardContent>
                  <Typography variant="h6" style={{ marginTop: 10, fontFamily: "nunito" }}>{item.headName}</Typography>
                  <Typography variant="body1" style={{ textAlign: "justify", marginTop: 7, fontFamily: "nunito" }}>
                    {item.headContent}
                  </Typography>

                </CardContent>
              </Card>
            </div>
          ))
        }


      </div> */}

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 50 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35, }} >
          {cardDatas.map((item, index) => (
            <Card sx={cardStyle}  >
              <CardContent >
                <Typography variant="h6"  >{item.headName}</Typography>
                <Typography variant="body1" style={{ marginTop: 10 }} >{item.headContent}</Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      <Footer />
    </>

  )
}