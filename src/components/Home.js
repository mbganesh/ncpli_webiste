import { React, useState, useEffect } from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, Paper, Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import ProjectIcon from '@mui/icons-material/AssuredWorkload';
import { ScrollToTop } from 'react-simple-scroll-up'
import AppbarHead from './SubComponents/AppbarHead';
import logo from '../images/logo/Logo.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from './SubComponents/Footer';
import Carousel from "react-simply-carousel";
import Colors from '../constants/Colors';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DvrIcon from '@mui/icons-material/Dvr';
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import ServiceMaintainenceIcon from '../images/homePageImages/serviceIcons/serviceMaintainance.svg'
import TwoD3dIcon from '../images/homePageImages/serviceIcons/2D3D.svg'

import GraphicDesignIcon from '../images/homePageImages/serviceIcons/graphicDesign.svg'
import DesktopWebAppIcon from '../images/homePageImages/serviceIcons/desktopWebApp.svg'
import MobileAppIcon from '../images/homePageImages/serviceIcons/mobileApp.svg'
import CustomSoftwareIcon from '../images/homePageImages/serviceIcons/customSoftware.svg'
import HardwareMaintanenceIcon from "../images/homePageImages/serviceIcons/hardwareMaintainenceApp.svg"
import ShortFilmIcon from "../images/homePageImages/serviceIcons/shortFilm.svg"
import EContentIcon from "../images/homePageImages/serviceIcons/eContent.svg"



import AniSys from "../images/homePageImages/anisys.png";
import AniMob from "../images/homePageImages/animob.png"
import EduMob from "../images/homePageImages/edumob.png";
import EduSys from "../images/homePageImages/edusys.png";
import DevMob from "../images/homePageImages/devmob.png";
import DevSys from "../images/homePageImages/devsys.png";
import SmaSys from "../images/homePageImages/smasys.png";
import SmaMob from "../images/homePageImages/smamob.png";
import SlideWrapper from './SubComponents/SlideWrapper';


import Imagess from '../constants/Images'
// import  { Images }  from "../constants";

import Banner1 from '../images/homePageImages/banner_animation.svg'
import Banner2 from '../images/homePageImages/banner_development.svg'
import Banner3 from '../images/homePageImages/banner_education.svg'
import Banner4 from '../images/homePageImages/banner_products.svg'

import Client1 from '../images/ourClients/client-anna university.svg'
import Client2 from '../images/ourClients/client-Covai corporation.svg'
import Client3 from '../images/ourClients/client-Elcot.svg'
import Client4 from '../images/ourClients/client-MHRD.svg'
import Client5 from '../images/ourClients/client-RBI.svg'
import Client6 from '../images/ourClients/client-SDA School.svg'
import Client7 from '../images/ourClients/client-state council.svg'
import Client8 from '../images/ourClients/client-ShivanesBoutique.svg'
import Client9 from '../images/ourClients/client-Thanjavoor.svg'
import Client10 from '../images/ourClients/client-Tirunelveli.svg'
import Client11 from '../images/ourClients/client-TMB.svg'

import homeContents from "./StaticTextContents/homeContents.js"


const clientsLogo = [
  Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8,
  Client9, Client10, Client11
];


const NoOfDataList = [
  {
    count: '25+',
    text: 'NO. OF PROJECTS',
    icon: <DvrIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
  },
  {
    count: '50+',
    text: 'NO. OF CLIENTS',
    icon: <HowToRegIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
  },
  {
    count: '100+',
    text: 'NO. OF EMPLOYEES',
    icon: <GroupIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
  }

]

const slideImage = [
  { pcImg: SmaSys, mobImg: SmaMob, slideText: "Smart Class", textColor: "white", },
  { pcImg: DevSys, mobImg: DevMob, slideText: "Development", textColor: "black", },
  { pcImg: EduSys, mobImg: EduMob, slideText: "Education", textColor: "black" },
  { pcImg: AniSys, mobImg: AniSys, slideText: "Animation", textColor: "black" },
];



export default function Home() {


  console.log(homeContents)

  const Centered = (theme) => ({
    position: "absolute",
    top: "50%",
    left: "75%",

    fontWeight: "bold",
    transform: `translate(-50%, -50%)`,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",

    },
  });

  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    textAlign: "center",
    color: "black",


  }));

  console.log(window.innerWidth)
  const [activeSlide, setActiveSlide] = useState(0);





  const OurProductsSection = styled('div')(({ theme }) => ({
    display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", paddingLeft: "15%", paddingRight: "15%",
    [theme.breakpoints.down("xl")]: {

      paddingLeft: "5%", paddingRight: "5%",

    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingLeft: "5%", paddingRight: "5%",

    },
    [theme.breakpoints.down('md')]: {

      paddingLeft: "5%", paddingRight: "5%",

    },

  }));

  const ProductCards = styled('div')(({ theme }) => ({
    height: 300,
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 60,

    [theme.breakpoints.down('md')]: {
      width: "100%",
      textAlign: "center",
      height: 300,

    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 400,

    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 370,


    },

    [theme.breakpoints.up('xl')]: {
      height: 330,
    },

  }));


  const IntroSection = styled('div')(({ theme }) => ({
    marginTop: 50, display: "flex", marginBottom: 30, flexDirection: "column",

    [theme.breakpoints.down('md')]: {
      paddingLeft: '5%',
      paddingRight: '5%',
      textAlign: "center",

    },
    [theme.breakpoints.only('md')]: {
      paddingLeft: '5%',
      paddingRight: '5%',


    },
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '5%',
      paddingRight: '5%',

    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '15%',
      paddingRight: '15%'
    }
  }));




  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  console.log(width);
  console.log(height);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidthAndHeight);
  //   console.log("dsd");
  //   window.scrollTo(0, 0)
  // }, []);


  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Home" }} />

      <SlideWrapper>
        <Slider
          autoplay={true}
          arrows={false}
          dots={true}
          pauseOnHover={false}
          appendDots={dots => <ul style={{ marginBottom: 20 }} >{dots}</ul>}
          customPaging={i => (
            <div className="ft-slick__dots--custom">
              <div className="loading" />
            </div>
          )}
          speed={100}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {slideImage.map((item) => (
            <img
              src={width < 800 ? item.mobImg : item.pcImg}
              style={{

                width: "100%",
                height: width < 600 ? 600 : null,

              }}
            />
          ))}
        </Slider>
      </SlideWrapper>

      <IntroSection>
        <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}>Meet Netcom...</Typography>
        <Typography variant='subtitle1' sx={{ textAlign: "justify", marginTop: 4 }}> <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR }}>Netcom Computers</span> {homeContents.about} </Typography>

      </IntroSection>



      <div style={{ backgroundColor: Colors.BACKGROUND_COLOR }}>

        <div style={{ marginTop: 50, display: "flex", justifyContent: "center", marginBottom: 50, flexDirection: "column" }}>
          <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, mt: 5, fontWeight: "bold" }}>Our Services</Typography>
          <Typography align='center' variant="body1" sx={{ color: Colors.MAIN_COLOR, mt: 2, }}>Full-Spectrum Service Offerings To Make Your Business Into The Next Stage</Typography>

        </div>



        <OurProductsSection>

          {(homeContents.serviceContent).map((text, index) => (

            <ProductCards>

              <div>
                <img src={text.icon} height={90} width={90} />
                <Typography style={{ marginTop: 15 }} variant="h6">{text.title}</Typography>
                <Typography style={{ marginTop: 15 }} align='justify' variant="subtitle1">{text.content}</Typography>
              </div>
              <div>
                <Typography style={{ marginTop: 15, color: Colors.MAIN_COLOR, cursor: "pointer", textDecoration: "underline" }} align='justify' variant="body1">Read More</Typography>
              </div>
            </ProductCards>

          ))}
        </OurProductsSection>

      </div>


      <div style={{ marginTop: 10, display: "flex", justifyContent: "center", backgroundColor: "white", }}>
        <div style={{ width: "67%", flexDirection: "row", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {
            NoOfDataList.map(data => (
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: 250, marginTop: 30, marginBottom: 30, }}>
                {data.icon}
                <Typography variant="h3" style={{ fontWeight: "bold", color: Colors.MAIN_COLOR, marginTop: 20 }}> {data.count} </Typography>
                <Typography variant="h6" style={{ color: "grey" }}> {data.text}</Typography>
              </div>
            ))
          }
        </div>


      </div>

      <div style={{ backgroundColor: Colors.BACKGROUND_COLOR }}>

        <div style={{ marginTop: 50, display: "flex", justifyContent: "center", marginBottom: 50, flexDirection: "column" }}>
          <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, mt: 5, fontWeight: "bold" }}>Our Products</Typography>
          <Typography align='center' variant="body1" sx={{ color: Colors.MAIN_COLOR, mt: 2, }}>Products that make you better</Typography>

        </div>



        <OurProductsSection>

          {(homeContents.productsContent).map((text, index) => (

            <ProductCards>

              <div>
                <img src={text.icon} height={90} width={90} />
                <Typography style={{ marginTop: 15 }} variant="h6">{text.title}</Typography>
                <Typography style={{ marginTop: 15 }} align='justify' variant="subtitle1">{text.content}</Typography>
              </div>
              <div>
                <Typography style={{ marginTop: 15, color: Colors.MAIN_COLOR, cursor: "pointer", textDecoration: "underline" }} align='justify' variant="body1">Read More</Typography>
              </div>
            </ProductCards>

          ))}
        </OurProductsSection>

      </div>



      <div style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 15 }}>
        <Paper elevation={0}>

          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", marginBottom: 30 }}>
            <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}>Our Honourable Clients</Typography>

          </div>
          <Slider
            style={{ padding: 20 }}
            autoplay={true}
            slidesToShow={width <= 500 ? 1 : width <= 1030 ? 2 : 4}
            slidesToScroll={1}
            touchMove
          >
            {clientsLogo.map((item, index) => (

              <img width={100} height={100} src={item} />

            ))}
          </Slider>
        </Paper>
      </div>
      <Footer />
    </>
  )
}
