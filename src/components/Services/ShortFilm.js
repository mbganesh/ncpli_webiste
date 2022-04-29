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
import location from "../../images/projectPageImages/smart-Classroom/location.svg"
import Footer from '../SubComponents/Footer';
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png"
import { Colors } from '../../constants';
import StarsIcon from '@mui/icons-material/Stars';



export default function ShortFilm() {
  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));



  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex", paddingLeft: '5%',
    paddingRight: '5%', backgroundColor: "grey",
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
      margin: "0 auto",

    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
      margin: "0 auto"

    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",


    }
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
    }
  }));

  const cardStyle = (theme) => ({
    width: "100%",
    [theme.breakpoints.only('sm')]: {
      height: 730, marginTop: 3,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: 680, marginTop: 3,
    },
    [theme.breakpoints.only('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },

    [theme.breakpoints.up('lg')]: {
      height: 740
    },
    [theme.breakpoints.up('xl')]: {
      height: 680
    }


  })




  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BreadcrumbStyle>
        <Card sx={{ width: 450, height: 50 }} >
          <CardContent>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
              <Typography color="text.primary">Services</Typography>
              <Typography color="text.primary">Short Film</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>


      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          Fill the Content

        </DivStyle1>
      </div>



      <Footer />

    </>

  )
}