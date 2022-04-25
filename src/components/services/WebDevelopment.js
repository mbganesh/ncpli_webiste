import {React,useState} from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { ScrollToTop } from 'react-simple-scroll-up'
import AppbarHead from '../../components/SubComponents/AppbarHead';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/SubComponents/Footer'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';

import ComputerIcon from '@mui/icons-material/Computer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


import desktopAppImg from "../../images/services/DesktopApplication/Desktop_app.svg"


import reactLogo from "../../images/mernLogo/reactLogo.svg"
import nodeLogo from "../../images/mernLogo/nodeLogo.svg"
import expressLogo from "../../images/mernLogo/expressLogo.svg"
import jsLogo from "../../images/mernLogo/js.svg"
import mongoLogo from "../../images/mernLogo/mango db.svg" 

import muiLogo from "../../images/mernLogo/mui.svg"
import htmlLogo from "../../images/mernLogo/HTML.svg"
import cssLogo from "../../images/mernLogo/Css.svg"
import AWSLogo from "../../images/mernLogo/AWS.svg" 


import frontEndArchitecture from "../../images/services/WebApplication/front-end-architecture.svg"
import testing from "../../images/services/WebApplication/testing-performance.svg"
import responsive from "../../images/services/WebApplication/responsive.svg"
import uiuxdesign from "../../images/services/WebApplication/uiuxdesign.svg"
import cmsEcommerce from "../../images/services/WebApplication/cms-ecommerce.svg"
import javascriptSolutions from "../../images/services/WebApplication/javascript-solutions.svg"

const BreadcrumbStyle  = styled('div')(({ theme }) => ({
    display:"flex",
    justifyContent:"center",
  }));

  
  const DivStyle1 = styled("div")(({ theme }) => ({
    display:"flex",margin:"0 auto",
    [theme.breakpoints.down("md")]: {
      
      width:"90%",
      flexDirection:"column",
      justifyContent: "center",
      alignItems:"center"
    
    },
    [theme.breakpoints.up("md")]: {
      width:"67%",
      flexDirection:"row",
      justifyContent: "space-between",
   
    },
    [theme.breakpoints.up("lg")]: {
      width:"82%",
      flexDirection:"row",
      justifyContent: "space-between",
      

    },
    [theme.breakpoints.up("xl")]: {
      width:"67%",
      flexDirection:"row",
      justifyContent: "space-between",
    }
  }));
  const DivStyle2 = styled("div")(({ theme }) => ({
   ".container":
{
  position: "relative",
  marginTop:10,
  "&:hover":{
    opacity:1
  },
},

    ".overlay":{
      position: "absolute", 
      bottom: 0, 
      width: "100%",height:"100%",
      alignItems:"flex-end",
      display:"flex",
      transition: ".5s ease",
      opacity:0,
     padding: "20px",
      "&:hover":{
        opacity:1
      },
    },
    [theme.breakpoints.down("md")]: {
      width:"100%",
      margin:"0 auto",
      
    },
    [theme.breakpoints.up("md")]: {
      width:"50%",
    

    }
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    marginTop:7,
    [theme.breakpoints.down("md")]: {
      width:"100%",
      margin:"0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width:"42%",
    }
  }));

  const HowWeWorkCard = styled("div")(({ theme }) => ({
    width:"400px",height:"300px",justifyContent:"center",display:"flex",flexDirection:"column",  backgroundColor:'cyan',

    [theme.breakpoints.down("sm")]: {
      backgroundColor:'pink',
    },

    [theme.breakpoints.between("sm","md")]: {
      backgroundColor:'orange',
    },

    [theme.breakpoints.down("md")]: {
     backgroundColor:'red',
    },

    [theme.breakpoints.between("md","lg")]: {
      backgroundColor:'yellow',
      width:"350px",
    },
    
  }));

  const cardStyle = (theme) => ({
    boxShadow:'none' ,
    marginTop:5,
    '&:hover':{
     boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    },
    // [theme.breakpoints.down('md')]: {
    //   width:"100%",height:310
    // },
    // [theme.breakpoints.up('md')]: {
    //   width:"80%",height:582
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width:"80%",height:300,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   width:"80%",height:477,
    // }
})

const cardStyle1 = (theme) => ({
    boxShadow:'none' ,
   marginTop:5,
   '&:hover':{
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
   },
    // [theme.breakpoints.down('md')]: {
    //   width:"100%",height:310,marginTop:3
    // },
    // [theme.breakpoints.up('md')]: {
    //   width:"90%",height:582,
    // },
    
    // [theme.breakpoints.up('lg')]: {
    //   width:"90%",height:300,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   width:"90%",height:477,
    // }
  })

export default function WebDevelopment() {

    const [value, setValue] = useState("1");

    const [colorTextTab1, setcolorTextTab1] = useState("green");
    const [colorTextTab2, setcolorTextTab2] = useState("black");
    const [colorTextTab3, setcolorTextTab3] = useState("black");
    const [colorTextTab4, setcolorTextTab4] = useState("black");
    const [colorTextTab5, setcolorTextTab5] = useState("black");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
      if (newValue === "1") {
        setcolorTextTab1("green");
      } else {
        setcolorTextTab1("black");
      }
  
      if (newValue === "2") {
        setcolorTextTab2("green");
      } else {
        setcolorTextTab2("black");
      }
  
      if (newValue === "3") {
        setcolorTextTab3("green");
      } else {
        setcolorTextTab3("black");
      }
  
      if (newValue === "4") {
        setcolorTextTab4("green");
      } else {
        setcolorTextTab4("black");
      }
  
      if (newValue === "5") {
        setcolorTextTab5("green");
      } else {
        setcolorTextTab5("black");
      }
    };

    const services=[
        {
          imageUrl:frontEndArchitecture,
          text:"Front End Architecture & Design"
        },
        {
          imageUrl:testing,
          text:"Testing & Performance Tuning"
        },
        {
          imageUrl:responsive,
          text:"Responsive Design"
        },
        {
          imageUrl:uiuxdesign,
          text:"UI / UX Development"
        },
        {
          imageUrl:cmsEcommerce,
          text:"CMS & eCommerce Theme Development"
        },
        {
          imageUrl:javascriptSolutions,
          text:"Custom JavaScript Solutions"
        }
      ]


    const whyNetcom=["NETCOM will help you in developing your company web application that would help increasing the pace and scale of your Business expansion.",
    "We will create and customize your website highlighting all the services and features of your business firms in a cost effective way.",
      "Our strength is our small and highly expertise teams of Web Development Pros, who are in turn complemented by our experience."
     ]
     

    const webAppBuss =["Businesses from all corners of the world, offering a huge range of products, have begun migrating from the physical world of handing out leaflets, printing advertisements, and hanging billboards, to the digital realm",
    "The business world is evolving every single day, thus increasing your competitors and hurdles making it hard to sustain like yesterday. So the only solution to standout in the crowd is to attracting clients and new offers by showcasing your work style, products and skills in the light."]


    const howWeWork=[  {
        imageUrl:frontEndArchitecture,
        title:"Analysis",
        text:"The process will involve proper understanding of the project need and requirements, so that both the parties have clear scope and vision of the project and the technologies that will be used to develop the site."
      },
      {
        imageUrl:testing,
        title:"Design",
        text:"Design will focus on how the site is going to look and feel. In this process only we will decide on the functionalities, utilities and requirements that will make a seamless working website."
      },
      {
        imageUrl:responsive,
        title:"Responsive Development",
        text:"Development process will involve converting the application design to workable information applications. After this the project cycle will enter the testing phase."
      },
      {
        imageUrl:uiuxdesign,
        title:"Testing & Bug Fixes",
        text:"This phase will include proper testing of the web application, which will help deciding the capabilities and deficiencies.  "
      },
      {
        imageUrl:cmsEcommerce,
        title:"Deployment",
        text:"It will be the final step of the development process where we deliver the product to the clients."
      },
      {
        imageUrl:javascriptSolutions,
        title:"Maintenance & Support",
        text:"This will include software upgrades, repairs and fixes. We will also monitor the performance of the software so you don’t face any issues."
      }]

  return (
<>

<ScrollToTop bgColor="green"  symbol="&#8593;"  strokeFillColor="white"/>
    <AppbarHead dataParent={{ appBtnText: "Services" }} />

<BreadcrumbStyle>
<Card sx={{width:450,height:50}} >
  <CardContent>
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/"  sx={{ display: 'flex', alignItems: 'center'}}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
      <Typography color="text.primary">Services</Typography>
      <Typography color="text.primary">Web Application Development</Typography>

    </Breadcrumbs>
  </CardContent>
</Card>
</BreadcrumbStyle>




 {/* Full vertical page */} 
 <div style={{width:"100%",marginTop:"8%",}}>
         {/* 67% middle of page */}
          <DivStyle1> 
            {/* Left Side */} 
            <DivStyle2> 

            <Typography variant="body1" style={{textAlign: "justify",marginTop:20,fontFamily:"nunito"}}>Web Application Development is the creation of application program that reside on remote servers and are delivered to the user's device over the internet.        
            </Typography>


            <Typography variant="body1" style={{textAlign: "justify",marginTop:7,fontFamily:"nunito"}}>
          Netcom development process will typically have a short development life-cycle lead by a small and efficient development team.
            </Typography>
            <Typography variant="body1" style={{textAlign: "justify",marginTop:7,fontFamily:"nunito"}}>Our web development company has been developing web applications for the custom business requirements of all our esteemed clients. Our developer’s skills & experience and cutting-edge technology will deliver you with Robust Web Applications.</Typography>

            <Typography variant="body1" style={{textAlign: "justify",marginTop:7,fontFamily:"nunito"}}>
            As leading Web Development company, delivering quality applications is always our priority. Discover our wide range of services and work with us!
                </Typography>


            </DivStyle2> 
            {/* Ride Side */} 
            <DivStyle3> 
            

            {/* React Player Div */}
            <div className="container" > 
            <img alt='loading' width='100%' style={{ top: 0, left: 0,height:"240px"}}  src={desktopAppImg} ></img>
            
            </div>
          {/* React Player Div */}
            </DivStyle3> 

          </DivStyle1>
</div>

<div style={{width:"100%",marginTop:"8%",}}>
         {/* 67% middle of page */}
          <DivStyle1> 
            {/* Left Side */} 
            <DivStyle2> 

            <Card sx={cardStyle}>
                <CardContent>
                <Typography  variant="h6" style={{marginBottom:10,fontFamily:"nunito"}}>Web Application for your Business</Typography>
               
              <ul>
              {webAppBuss.map((text)=>(
                <div style={{display:"flex",flexDirection:"row",marginTop:7}} > 
                <ComputerIcon  /> 
                <Typography variant="body1" sx={{fontFamily:"nunito",paddingLeft:1, textAlign:'justify'}} > {text}</Typography>
                </div>
              ))}
        </ul>
                </CardContent>
              </Card>

            </DivStyle2> 
            {/* Ride Side */} 
            <DivStyle3> 
            <Card sx={cardStyle1}>
                <CardContent>
                <Typography  variant="h6" style={{marginBottom:10,fontFamily:"nunito",}}>Why to approach Netcom ?</Typography>
               
            
              {whyNetcom.map((text)=>(
                <div style={{display:"flex",flexDirection:"row",marginTop:7}} > 
                <ArrowRightAltIcon  /> 
                <Typography variant="body1" sx={{fontFamily:"nunito",paddingLeft:1,textAlign:'justify'}} > {text}</Typography>
                </div>
              ))}
       
                </CardContent>
              </Card>
            </DivStyle3> 

          </DivStyle1>
</div>

<div style={{width:"100%",marginTop:"8%"}}>
         {/* 67% middle of page */}
          <DivStyle1 style={{flexDirection:"column"}}> 
          <Typography  variant="h4" style={{fontFamily:"nunito",display:"flex",margin:"0 auto",}}>Web Application Development Services</Typography>

          <div style={{width:"100%",display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:"7%",flexWrap:"wrap",gap:15}}>
          
          {services.map((obj)=>(

          <div style={{textAlign:"center",width:"400px",height:"40%",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column"}}>                 
                   <img alt='loading' src={obj.imageUrl} width="50%" />
                   <Typography variant="h6" style={{display:"block",}} >{obj.text}</Typography>                  
           </div>
))}

        

          </div>



         
          </DivStyle1>
</div>


<div style={{width:"100%",marginTop:"8%"}}>
         {/* 67% middle of page */}
          <DivStyle1 style={{flexDirection:"column"}}> 
          <Typography  variant="h4" style={{fontFamily:"nunito",display:"flex",margin:"0 auto",}}>How We Work</Typography>

          <div style={{width:"100%",display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:"7%",flexWrap:"wrap",gap:10}}>
          
          {howWeWork.map((obj)=>(

          <HowWeWorkCard>                 
                   <img alt='loading' src={obj.imageUrl} width="30%" />
                   <Typography variant="h6" style={{display:"block"}} >{obj.title}</Typography>  
                   <Typography variant="body1" style={{display:"block",textAlign:"justify"}} >{obj.text}</Typography>                  

           </HowWeWorkCard>
))}

        

          </div>



         
          </DivStyle1>
</div>
  

<div style={{width:"100%",marginTop:"8%",height:"90vh"}}>
         {/* 67% middle of page */}

        
          <DivStyle1  style={{flexDirection:"column"}}> 
         
          <Typography  variant="h4" style={{fontFamily:"nunito",display:"flex",margin:"0 auto"}}>Web Application Development Stack</Typography>

        <Box sx={{ width: "100%", typography: "body1",marginTop:"7%", }}>
          <TabContext value={value}> <Box sx={{ borderBottom: 1, borderColor: "green", display: "flex", flexDirection: "row", justifyContent: "center",}} >
              <Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange} TabIndicatorProps={{ style: { background: "green" } }} textColor="inherit" >
                <Tab sx={{ color: colorTextTab1, textTransform: "none" }} label={<Typography variant="h6" style={{cursor:"pointer" }}>Languages </Typography>} value="1" />
                <Tab sx={{ color: colorTextTab2, textTransform: "none",}} label={ <Typography variant="h6" style={{cursor:"pointer" }}>Front-end </Typography> } value="2" />
                <Tab sx={{ color: colorTextTab3, textTransform: "none" }} label={<Typography variant="h6" style={{cursor:"pointer" }}>Back-end </Typography>} value="3" />
                <Tab sx={{ color: colorTextTab4, textTransform: "none" }} label={ <Typography variant="h6" style={{cursor:"pointer" }}>Database</Typography> } value="4" />
                
              </Tabs>
            </Box>
            <TabPanel value="1" >
            <div style={{ display: "flex", width: "100%", height:'30vh', alignItems: "center",justifyContent: "center",marginTop:"5%", }} >
            <fieldset  style={{width:"100%",border: "3px solid #4df752" ,fontFamily:"nunito",fontSize:20 }}>
                  <legend align="center">Languages</legend>  
                 
                  <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                   
                    <div style={{textAlign:"center",width:"15%"}}>
                    <AnimationOnScroll animateIn="animate__zoomIn" animateOut='animate__zoomOut'  >
                   <img alt='loading' src={htmlLogo} width="70%" />
                   <Typography variant="h6" style={{display:"block"}} >HTML</Typography>
                   </AnimationOnScroll>
                   </div>
                 
                   <div style={{textAlign:"center",width:"15%"}}>
                   <AnimationOnScroll animateIn="animate__zoomIn"  animateOut='animate__zoomOut'   >
                   <img alt='loading' src={cssLogo} width="70%"  />
                   <Typography variant="h6" style={{display:"block"}} >CSS</Typography>
                   </AnimationOnScroll>
                   </div>

                   <div style={{textAlign:"center",width:"15%"}}>
                   <AnimationOnScroll animateIn="animate__zoomIn"  animateOut="animate__zoomOut"   >
                   <img alt='loading' src={jsLogo} width="70%" />
                   <Typography variant="h6" style={{display:"block"}} >JavaScript</Typography>
                   </AnimationOnScroll>
                   </div>
                
                  </div>
               



           </fieldset>
               
               </div>
            </TabPanel>

            <TabPanel value="2">
            

            <div style={{ display: "flex", width: "100%", height:'30vh', alignItems: "center", justifyContent: "center",marginTop:"5%",  }} >
            <fieldset  style={{width:"100%",border: "3px solid #4df752" ,fontFamily:"nunito",fontSize:20 }}>
                  <legend align="center"> Frameworks & CSS</legend>  
                  <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                   
                    <div style={{textAlign:"center",width:"15%"}}>
                    <AnimationOnScroll animateIn="animate__zoomIn"  animateOut='animate__zoomOut' animateOnce={true}  >
                   <img alt='loading' src={reactLogo} width="70%" />
                   <Typography variant="h6" style={{display:"block"}} >React JS</Typography>
                   </AnimationOnScroll>
                   </div>

                   <div style={{textAlign:"center",width:"15%"}}>
                   <AnimationOnScroll animateIn="animate__zoomIn"  animateOnce={true}  >
                   <img alt='loading' src={muiLogo} width="70%"  />
                   <Typography variant="h6" style={{display:"block"}} >MUI</Typography>
                   </AnimationOnScroll>
                   </div>

                

                  </div>




           </fieldset>
               
             
               
            </div>
            </TabPanel>

            <TabPanel value="3"> 
           

            <div style={{ display: "flex", width: "100%", height:'30vh', alignItems: "center", justifyContent: "center",marginTop:"5%",  }} >
            <fieldset  style={{width:"100%",border: "3px solid #4df752" ,fontFamily:"nunito",fontSize:20 }}>
                  <legend align="center">Languages & Framework</legend>  
                  <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                   
                    <div style={{textAlign:"center",width:"15%"}}>
                    <AnimationOnScroll animateIn="animate__zoomIn"  animateOut="animate__zoomOut" animateOnce={true} duration={2} >
                   <img alt='loading' src={nodeLogo} width="70%" />
                   <Typography variant="h6" style={{display:"block"}} >Node JS</Typography>
                   </AnimationOnScroll>
                   </div>

                   <div style={{textAlign:"center",width:"15%"}}>
                   <AnimationOnScroll animateIn="animate__zoomIn"  animateOut="animate__zoomOut" animateOnce={true} duration={2} >
                   <img alt='loading' src={expressLogo} width="70%"  />
                   <Typography variant="h6" style={{display:"block"}} >Express JS</Typography>
                   </AnimationOnScroll >
                   </div>
              
                   
                

                  </div>




           </fieldset>
               
            </div>
               
            
            </TabPanel>

            <TabPanel value="4"> 
         
               
            <div style={{ display: "flex", width: "100%", height:'30vh', alignItems: "center", justifyContent: "center",marginTop:"5%",  }} >
            <fieldset  style={{width:"100%",border: "3px solid #4df752" ,fontFamily:"nunito",fontSize:20 }}>
                  <legend align="center">Storage & Cloud Storage</legend>  
                  <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                   
                    <div style={{textAlign:"center",width:"15%"}}>
                    <AnimationOnScroll animateIn="animate__zoomIn"  animateOut="animate__fadeInDown"  >
                   <img alt='loading' src={mongoLogo} width="70%" />
                   <Typography variant="h6" style={{display:"block"}} >Mongo DB</Typography>
                   </AnimationOnScroll  >
                   </div>

                   <div style={{textAlign:"center",width:"15%"}}>
                   <AnimationOnScroll animateIn="animate__zoomIn"  animateOut="animate__fadeInDown"   >
                   <img alt='loading' src={AWSLogo} width="70%"  />
                   <Typography variant="h6" style={{display:"block"}} >AWS</Typography>
                   </AnimationOnScroll>
                   </div>

                  </div>


           </fieldset>
               
               
            </div>
            </TabPanel>

            
          </TabContext>
        </Box>
          </DivStyle1>
</div>

<Footer/>

</>
  )
}
