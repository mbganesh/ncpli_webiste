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


const serviceContent = [
  {
    title: "2D and 3D Animations",
    icon: TwoD3dIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Graphic Design",
    icon: GraphicDesignIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Desktop & Web Applications",
    icon: DesktopWebAppIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Mobile Applications",
    icon: MobileAppIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Service Maintainance & Management",
    icon: ServiceMaintainenceIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Customized Software Development",
    icon: CustomSoftwareIcon,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
];

const clientsLogo = [
  Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,
  Client9,Client10,Client11
];


const NoOfDataList = [
  {
    count: '25+',
    text: 'No.of Projects',
    icon:  <DvrIcon style={{width:50, height:50, color:Colors.MAIN_COLOR}} />
  },
  {
    count: '50+',
    text: 'No.of Clients',
    icon:  <HowToRegIcon style={{width:50, height:50,color:Colors.MAIN_COLOR}} />
  },
  {
    count: '70+',
    text: 'No.of Employees',
    icon: <GroupIcon style={{width:50, height:50,color:Colors.MAIN_COLOR}} />
  }

]

const slideImage = [
  { slideName: Banner1, slideText: "Smart Class", textColor: Colors.MAIN_COLOR },
  { slideName: Banner2, slideText: "Development", textColor: Colors.MAIN_COLOR },
  { slideName: Banner3, slideText: "Education", textColor: Colors.MAIN_COLOR },
  { slideName: Banner4, slideText: "Animation", textColor: Colors.MAIN_COLOR },
];


export default function Home() {



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
    backgroundColor:"red",
   

  }));
  
  console.log(window.innerWidth)
  const [activeSlide, setActiveSlide] = useState(0);

  

  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));
  const TypographyStyle1 = styled('div')(({ theme }) => ({
    display: "flex", justifyContent: "space-evenly", backgroundColor: "white",
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5%',
      paddingRight: '5%'

    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15%',
      paddingRight: '15%'

    }


  }));


  const OurProductsSection = styled('div')(({ theme }) => ({
    display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap",
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5%',
      paddingRight: '5%'

    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15%',
      paddingRight: '15%'

    }


  }));
  const Root = styled("div")(({ theme }) => ({
    marginRight: "3%",
    marginTop: "1%",
    marginBottom: "1%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      backgroundColor: "red",

    },
    [theme.breakpoints.up("md")]: {
      width: 360,
      height: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 460,
      height: 250,
    },
    [theme.breakpoints.up("xl")]: {
      width: 660,
      height: 250,
    },
  }));


  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  console.log(width);
  console.log(height);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    console.log("dsd");
    window.scrollTo(0,0)

  }, []);


  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Home" }} />

      <div>
        <Slider
          autoplay={true}
          arrows={false}
          speed={100}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {slideImage.map((item) => (




            <Container>
              <img src={item.slideName} style={{ objectFit: "contain", height:"100%", width:"100%" }} />
              <Typography variant='h3' noWrap color={item.textColor} sx={Centered}>
                {item.slideText}
              </Typography>
            </Container>
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: 50, display: "flex", justifyContent: "center", marginBottom: 30 }}>
        <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, fontWeight:"bold" }}>Meet Netcom...</Typography>
      </div>

      <div style={{ marginTop: 20 }}>
        <TypographyStyle1  >
          <Typography sx={{ fontSize: 16, textAlign: "justify", }}> <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR }}>Netcom Computers</span> have installed more than 300 and above eSmart Class Room in Government and Government aided schools. We have already implemented the Smart Class Room Pilot Project in 3 Government Higher Secondary Schools namely, Maranthai School at Tirunelveli District, Mallankinaru School at Virudhunagar District and Thummanathy school at Nilgiris District. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Typography>
        </TypographyStyle1 >
      </div>

      <div style={{backgroundColor:Colors.LIGHT_COLOR}}>

      <div style={{ marginTop: 50, display: "flex", justifyContent: "center", marginBottom: 30 }}>
        <Typography align='center' variant="h4" sx={{ color: Colors.MAIN_COLOR, mt:5, fontWeight:"bold" }}>Our Services</Typography>
      </div>

      
        <OurProductsSection>

          {serviceContent.map((text, index) => (

            <div style={{ width: 600, height: 300 }}>
              <div>
                <img src={text.icon} height={50} width={50} />
                <Typography style={{ marginTop: 10 }} variant="h5">{text.title}</Typography>
                <Typography style={{ marginTop: 10 }} align='justify' variant="subtitle2">{text.content}</Typography>
                <Typography style={{ marginTop: 15, color: Colors.MAIN_COLOR, cursor: "pointer" }} align='justify' variant="body2" >Read More</Typography>
              </div>
            </div>

          ))}
        </OurProductsSection>

        </div>


      <div style={{ marginTop: 10, display: "flex", justifyContent: "center", backgroundColor: "white",  }}>
        <div style={{ width: "67%", flexDirection: "row", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {
            NoOfDataList.map(data => (
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", width: 250, marginTop:30, marginBottom:30 }}>
                {data.icon}
                <Typography variant="h4" > {data.count} </Typography>
                <Typography variant="subtitle1" > {data.text}</Typography>
              </div>
            ))
          }
        </div>


      </div>

      <div style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 15 }}>
        <Paper elevation={0}>

          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", marginBottom: 30 }}>
            <Typography align='center' variant="h4" sx={{  color: Colors.MAIN_COLOR,  fontWeight:"bold"}}>Our Honourable Clients</Typography>

          </div>
          <Slider
            style={{padding:20}}
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
