import {React,  useState, useEffect} from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
  Button,
  Modal,
  Tabs,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";



import NSC01 from "../images/portfolioPageImages/NSC/NSC01.JPG";
import NSC02 from "../images/portfolioPageImages/NSC/NSC02.JPG";
import NSC03 from "../images/portfolioPageImages/NSC/NSC03.JPG";
import NSC04 from "../images/portfolioPageImages/NSC/NSC04.JPG";
import NSC05 from "../images/portfolioPageImages/NSC/NSC05.JPG";
import NSC06 from "../images/portfolioPageImages/NSC/NSC06.JPG";
import NSC07 from "../images/portfolioPageImages/NSC/NSC07.JPG";
import NSC08 from "../images/portfolioPageImages/NSC/NSC08.JPG";
import NSC09 from "../images/portfolioPageImages/NSC/NSC09.JPG";
import NSC10 from "../images/portfolioPageImages/NSC/NSC10.JPG";
import NSC11 from "../images/portfolioPageImages/NSC/NSC11.PNG";
import NSC12 from "../images/portfolioPageImages/NSC/NSC12.PNG";
import NSC13 from "../images/portfolioPageImages/NSC/NSC13.jpg";
import NSC14 from "../images/portfolioPageImages/NSC/NSC14.jpeg";
import NSC15 from "../images/portfolioPageImages/NSC/NSC15.JPG";
import NSC16 from "../images/portfolioPageImages/NSC/NSC16.jpg";
import NSC17 from "../images/portfolioPageImages/NSC/NSC17.jpg";
import NSC18 from "../images/portfolioPageImages/NSC/NSC18.jpg";
import NSC19 from "../images/portfolioPageImages/NSC/NSC19.jpg";
import NSC20 from "../images/portfolioPageImages/NSC/NSC20.jpeg";
import NSC21 from "../images/portfolioPageImages/NSC/NSC21.jpeg";
import NSC22 from "../images/portfolioPageImages/NSC/NSC22.jpeg";
import NSC23 from "../images/portfolioPageImages/NSC/NSC23.jpeg";
import NSC24 from "../images/portfolioPageImages/NSC/NSC24.jpeg";
import NSC25 from "../images/portfolioPageImages/NSC/NSC25.jpg";
import NSC26 from "../images/portfolioPageImages/NSC/NSC26.jpg";
import NSC27 from "../images/portfolioPageImages/NSC/NSC27.jpg";
import NSC28 from "../images/portfolioPageImages/NSC/NSC28.jpg";
import NSC29 from "../images/portfolioPageImages/NSC/NSC29.jpg";
import NSC30 from "../images/portfolioPageImages/NSC/NSC30.jpeg";
import NSC31 from "../images/portfolioPageImages/NSC/NSC31.jpeg";
import NSC32 from "../images/portfolioPageImages/NSC/NSC32.jpeg";
import NSC33 from "../images/portfolioPageImages/NSC/NSC33.jpg";
import NSC34 from "../images/portfolioPageImages/NSC/NSC34.jpeg";
import NSC35 from "../images/portfolioPageImages/NSC/NSC35.jpeg";
import NSC36 from "../images/portfolioPageImages/NSC/NSC36.jpeg";
import NSC37 from "../images/portfolioPageImages/NSC/NSC37.jpg";
import NSC38 from "../images/portfolioPageImages/NSC/NSC38.jpg";

import KIOSK1 from "../images/portfolioPageImages/kioskImage/kiosk1.jpeg";
import KIOSK2 from "../images/portfolioPageImages/kioskImage/kiosk2.jpeg";
import KIOSK3 from "../images/portfolioPageImages/kioskImage/kiosk3.jpg";
import KIOSK4 from "../images/portfolioPageImages/kioskImage/kiosk4.jpeg";
import KIOSK5 from "../images/portfolioPageImages/kioskImage/kiosk5.PNG";
import KIOSK6 from "../images/portfolioPageImages/kioskImage/kiosk6.jpg";
import KIOSK7 from "../images/portfolioPageImages/kioskImage/kiosk7.jpg";
import KIOSK8 from "../images/portfolioPageImages/kioskImage/kiosk8.jpg";
import KIOSK9 from "../images/portfolioPageImages/kioskImage/kiosk9.jpeg";

import SKILL1 from "../images/portfolioPageImages/skilldevelopment/skill1.jpeg";
import SKILL2 from "../images/portfolioPageImages/skilldevelopment/skill2.jpg";
import SKILL3 from "../images/portfolioPageImages/skilldevelopment/skill3.jpeg";
import SKILL4 from "../images/portfolioPageImages/skilldevelopment/skill4.jpg";
import SKILL5 from "../images/portfolioPageImages/skilldevelopment/skill5.jpg";
import SKILL6 from "../images/portfolioPageImages/skilldevelopment/skill6.jpg";
import SKILL7 from "../images/portfolioPageImages/skilldevelopment/skill7.jpeg";
import SKILL8 from "../images/portfolioPageImages/skilldevelopment/skill8.jpeg";


import DG1 from "../images/portfolioPageImages/DigitalContentImage/dg1.jpg";
import DG2 from "../images/portfolioPageImages/DigitalContentImage/dg2.jpeg";
import DG3 from "../images/portfolioPageImages/DigitalContentImage/dg3.jpeg";
import DG4 from "../images/portfolioPageImages/DigitalContentImage/dg4.jpeg";
import DG5 from "../images/portfolioPageImages/DigitalContentImage/dg5.jpeg";
import DG6 from "../images/portfolioPageImages/DigitalContentImage/dg6.jpg";

import Footer from "./SubComponents/Footer";
import { Colors } from "../constants";

export default function Portfolio() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    flexwrap: "wrap",
    padding: "30px",


    ".Card": {
      position: "relative",
      maxWidth: "350px",
      height: " 215px",
      backgroundColor: "#fff",
      margin: "30px 10px",
      padding: "20px 15px",
      display: " flex",
      flexDirection: "column",
      boxShadow: `0 5px 20px rgba(0,0,0,0.5)`,
      transition: `0.3s ease-in-out`,
      borderRadius: "15px",
      "&:hover": {
        height: "280px",
        boxShadow: `0 5px 20px rgba(145,196,131,1)`,
        ".Content": {
          marginTop: "10px",
          visibility: "visible",
          opacity: 1,
          transitionDelay: "0.2s ease",
        },
      },
    },

    ".Image": {
      position: "relative",
      width: "350px",
      height: "300px",
      top: "-40%",
      boxShadow: `0 5px 20px rgba(0,0,0,0.2)`,
      zIndex: 1,

      [theme.breakpoints.down("md")]: {
        width: "250px",
        height: "150px",
      },
    },

    ".Content": {
      position: "relative",
      top: "-140px",
      padding: "10px 15px",
      color: " #111",
      textAlign: "center",
      visibility: "hidden",
      opacity: 0,
      transition: `0.3s ease-in-out`,
      [theme.breakpoints.down("md")]: {
        top: "30px",
      },
      [theme.breakpoints.up("md")]: {
        top: "-110px",
      },
    },
  }));

  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "75%",
    
    [theme.breakpoints.down('md')]:{
      width: "100%"
    }
   
  }));

  const [selectedImg, setSelectedImg] = useState("");

  const ModalRoot = styled("div")(({ theme }) => ({
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#FFF8F3",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "85%",
    },
  }));


  const ModalRootKiosk = styled("div")(({ theme }) => ({
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#FFF8F3",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "65%",
    },
  }));

  const GalleryRoot = styled("div")(({ theme }) => ({
    display: "flex ",
    flexWrap: "wrap",  
    justifyContent: "center",        
    [theme.breakpoints.up('md')]:{
      width: "70%",
    }
   
    
  }));

  const myCard = (theme) => ({
    
    margin: "1%",
    width: 300,  
    height:300,
    
  
    "&:hover": {
      transition: "0.7s",
      transform: `translateY(-10px)`,
      boxShadow: `rgba(17,101,48, 0.4) 5px 5px, rgba(17,101,48, 0.3) 10px 10px, rgba(17,101,48, 0.2) 15px 15px, rgba(17,101,48, 0.1) 20px 20px, rgba(17,101,48, 0.05) 25px 25px`,
    },    
  });

  const smartClassRoom = [
    NSC01,
    NSC02,
    NSC03,
    NSC04,
    NSC05,
    NSC06,
    NSC07,
    NSC08,
    NSC09,
    NSC10,
    NSC11,
    NSC12,
    NSC13,
    NSC14,
    NSC15,
    NSC16,
    NSC17,
    NSC18,
    NSC19,
    NSC20,
    NSC21,
    NSC22,
    NSC23,
    NSC24,
    NSC25,
    NSC26,
    NSC27,
    NSC28,
    NSC29,
    NSC30,
    NSC31,
    NSC32,
    NSC33,
    NSC34,
    NSC35,
    NSC36,   
  ];


  const kioskImage = [KIOSK1,KIOSK2,KIOSK3,KIOSK4,KIOSK5,KIOSK6,KIOSK7,KIOSK8,KIOSK9];

  const skilldevelopmentImage=[SKILL1,SKILL2,SKILL3,SKILL4,SKILL5,SKILL6,SKILL7,SKILL8];

  const  digitalContent =[DG1,DG2,DG3,DG4,DG5,DG6]


  const [open, setOpen] = useState(false);
  const handleOpen = (img) => {
    setOpen(true);
    setSelectedImg(img);
  };
  const handleClose = () => setOpen(false);

  const imageName = [
    {
      name: "Noah",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/3d3.JPG",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Adventures of Tenaliraman",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/tenali.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Moral Stories",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/moral_stories.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Judah",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/judo.png",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Adventures of vikramadhityan",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/vikramadhityan.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Jungle Story",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/jungle_story.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Rhymes",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/rhymes.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "3D",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/3d2.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Jesus Miracle",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/jesus_miracles.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
  ];

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


  useEffect(() => {
    
    window.scrollTo(0,0)
       
    }, [])


  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
        <AppbarHead dataParent={{ appBtnText: "Portfolio" }} />
        <BreadcrumbStyle>
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
                <Typography color="text.primary">Portfolio</Typography>
              </Breadcrumbs>
            </CardContent>
          </Card>
        </BreadcrumbStyle>

        <div style={{ marginTop: "2%", textAlign:"center" }}>
        <Typography variant="h3" style ={{color:Colors.MAIN_COLOR}}>
            Portfolio
          </Typography>
          <Typography variant="subtitle1" style ={{color:"grey", marginTop: "2%"}}>
            We devote all of our experience and efforts for creation
          </Typography>
        </div>
        <Divider style={{ color: "grey", width: "50%", marginTop: "2%" }} />

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "green",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChange}
                TabIndicatorProps={{ style: { background: "green" } }}
                textColor="inherit"
              >
                <Tab
                  sx={{ color: colorTextTab1, textTransform: "none" }}
                  label={<Typography variant="h6">YouTube</Typography>}
                  value="1"
                />
                <Tab
                  sx={{ color: colorTextTab2, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Netcom Smart Class</Typography>
                  }
                  value="2"
                />
                <Tab
                  sx={{ color: colorTextTab3, textTransform: "none" }}
                  label={<Typography variant="h6">Kiosk</Typography>}
                  value="3"
                />
                <Tab
                  sx={{ color: colorTextTab4, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Skill Development</Typography>
                  }
                  value="4"
                />
                <Tab
                  sx={{ color: colorTextTab5, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Netcom Digital Content</Typography>
                  }
                  value="5"
                />
              </Tabs>
            </Box>
            <TabPanel
              value="1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Root>
                {imageName.map((text) => (
                  <Container  >
                    <div className="Card">
                      <div className="Image" >
                        <img
                          
                          src={text.imgLink}
                          height={305}
                          width={380}
                          style={{ maxWidth: "100%", borderRadius: "15px",objectFit:'cover'}}
                        />
                      </div>
                      <div className="Content">
                        <Typography variant="subtitle1">{text.name}</Typography>
                        <Button
                          style={{
                            backgroundColor: "#c4302b",
                            textTransform: "capitalize",
                          }}
                          startIcon={<YouTubeIcon />}
                          fullWidth
                          variant="contained"
                          onClick={() => {
                            window.open(text.videoLink);
                          }}
                        >
                          Visit
                        </Button>
                      </div>
                    </div>
                  </Container>
                ))}
              </Root>
            </TabPanel>

            <TabPanel value="2">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",                  
                }}
              >
                {/* gallery */}
                
                  <GalleryRoot>
                  {smartClassRoom.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <img width={300} style={{objectFit:'cover' , height:'300px'}}  alt="Loading..." src={data} />
                    </Card>
                  ))}
                </GalleryRoot>
                
                

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{ borderRadius: 0 }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="3">
            <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* gallery */}
                <GalleryRoot>
                  {kioskImage.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <img width={300} style={{objectFit:'cover' , height:'300px'}}  alt="Loading..." src={data} />
                    </Card>
                  ))}
                </GalleryRoot>

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRootKiosk>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{ borderRadius: 0 }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRootKiosk>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="4">
            <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",                  
                }}
              >
                {/* gallery */}
                
                  <GalleryRoot>
                  {skilldevelopmentImage.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <img width={300} style={{objectFit:'cover' , height:'300px'}}  alt="Loading..." src={data} />
                    </Card>
                  ))}
                </GalleryRoot>
                
                

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{ borderRadius: 0 }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="5">
              
                 <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",                  
                }}
              >
                {/* gallery */}
                
                  <GalleryRoot>
                  {digitalContent.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <img width={300} style={{objectFit:'cover' , height:'300px'}}  alt="Loading..." src={data} />
                    </Card>
                  ))}
                </GalleryRoot>
                
                

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{ borderRadius: 0 }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
              
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <Footer />
    </div>
  );
}