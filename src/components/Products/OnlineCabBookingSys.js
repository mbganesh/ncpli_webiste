import { React, useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import ReactPlayer from "react-player";


import HomeSD from "../../images/productPageImages/smart_Tailor_App/Home.png";
import OrderSD from "../../images/productPageImages/smart_Tailor_App/order.png";
import orderUser from "../../images/productPageImages/smart_Tailor_App/orderUser.png";
import SDApp from "../../images/productPageImages/smart_Tailor_App/SDApp.svg";

import reactLogo from "../../images/productPageImages/smart_Tailor_App/mernLogo/reactLogo.svg";
import nodeLogo from "../../images/productPageImages/smart_Tailor_App/mernLogo/nodeLogo.svg";
import expressLogo from "../../images/productPageImages/smart_Tailor_App/mernLogo/expressLogo.svg";
import andriodLogo from "../../images/productPageImages/smart_Tailor_App/mernLogo/androidLogo.svg";
import mongoLogo from "../../images/productPageImages/smart_Tailor_App/mernLogo/mango db.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import Tooltip from "@mui/material/Tooltip";
import Footer from '../SubComponents/Footer';

import fbLogo from "../../images/productPageImages/smart_Tailor_App/socialmedia_icon/facebook.png";
import twLogo from "../../images/productPageImages/smart_Tailor_App/socialmedia_icon/twitter.png";
import linLogo from "../../images/productPageImages/smart_Tailor_App/socialmedia_icon/linkedin.png";
import ytLogo from "../../images/productPageImages/smart_Tailor_App/socialmedia_icon/youtube.png";


import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import AdjustIcon from '@mui/icons-material/Adjust';

export default function SmartTailorShop() {
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
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  }));

  const DivStyle3 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "32%",
    },
  }));


  const DivStyle4 = styled("div")(({ theme }) => ({
    margin: "0 auto",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
    },
  }));

  const contains = ["Admin App", "Tailors App", "Customer Mobile App"];
  const websiteTechnology = [
    { text: "React JS", image: reactLogo },
    { text: "Node JS", image: nodeLogo },
    { text: "Express JS", image: expressLogo },
    { text: "MongoDB", image: mongoLogo },
  ];
  const mobileTechnology = [
    { text: "Android", image: andriodLogo },
    { text: "Node JS", image: nodeLogo },
    { text: "Express JS", image: expressLogo },
    { text: "MongoDB", image: mongoLogo },
  ];


  const DivStyle5= styled("div")(({ theme }) => ({
    display:"flex",margin:"0 auto",flexDirection:"column",
    [theme.breakpoints.down("md")]: {
      
      width:"90%",
    
    },
    [theme.breakpoints.up("md")]: {
      width:"90%",
      

   
    },
    [theme.breakpoints.up("lg")]: {
      width:"82%",
      


    },
    [theme.breakpoints.up("xl")]: {
      width:"67%",
     
    }
  }));

  const contactDetails = ["Name", "Company Name", "Email", "Contact Number"];
  const products = [
    "Smart Tailoring Shop",
    "Online Cab Booking System",
    "EMIS",
    "Education Mobile App",
    "Assessment Tool",
  ];

  const logos = [fbLogo, twLogo, linLogo, ytLogo];
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [Email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [message, setMessage] = useState("");


  const smartTailor=[{ title:"Smart Tailor Shop", rate:"₹ 6999 /month",color:"#96546F"},
  { title:"Smart Tailor Shop Pro", rate:"₹ 7999 /month",color:"#7E8BB8"},{ title:"Smart Tailor Shop Ulimate", rate:"₹ 9999 /month",color:"#C8892A"}]

 const smartTailorProDetails= [ "Customer Management", "Interactive Charts", "Report Generation", "Rates Updater", "Smart Billing", "Live Support" , "Free Installation", "Fit in all Devices", "Stiching Team Login Panel", "Stiched Dress Image Updater", "Export Customer Details & Order Details as Excel File", "Separate App for Customers", ]

 const smartTailorOrders=["500 Orders Placement","1000 Orders Placement","Unlimited Orders Placement"]

 const smartTailorBenfits=["First Time Fee - ₹ 14999 for Domain and Hosting Charges (includes 1 Month Ultimate Plan)","7 Days FREE Trial", "GST @18% Applicable on All Purchases"]

 useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
      <BreadcrumbStyle>
        <Card elevation={6}>
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
              <Typography color="text.primary">Products</Typography>
              <Typography color="text.primary">Online Cab Booking </Typography>
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
              sx={{ textAlign: "justify", fontFamily: "nunito" }}
            >
            
              <span style={{ fontWeight: "bold", color: "green" }}>
            
              Online Cab Booking  Application
              </span>
              is the Web application . Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              What it contains in Online Cab Booking  Web Application?
            </Typography>

            <ul>
              {contains.map((text) => (
                <li style={{ marginTop: 7 }}>{text}</li>
              ))}
            </ul>
            <Typography
              variant="h4"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[0]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                Online Cab Booking  Application{" "}
              </span>{" "}
              is the Web application . Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </Typography>
            <Typography
              variant="h4"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[1]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                Tailors Application{" "}
              </span>{" "}
              is the Web application . Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="h6"
              style={{ marginTop: 7, fontWeight: "600", fontFamily: "nunito" }}
            >
              Admin App and Tailors App Technology used{" "}
            </Typography>
            <ul>
              {websiteTechnology.map((obj) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <img src={obj.image} style={{ width: "27px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "nunito", alignItems: "center" }}
                  >
                    {" "}
                    {obj.text}
                  </Typography>
                </div>
              ))}
            </ul>

            <Typography
              variant="h4"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[2]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                Customer Mobile Application{" "}
              </span>{" "}
              is the Mobile Android application . Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="h6"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              Customer Mobile App Technology used
            </Typography>

            <ul>
              {mobileTechnology.map((obj) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <img src={obj.image} style={{ width: "27px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "nunito", alignItems: "center" }}
                  >
                    {" "}
                    {obj.text}
                  </Typography>
                </div>
              ))}
            </ul>
          </DivStyle2>

          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito" }}
            >
              Online Cab Booking  Web Application Demo
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
                url={"https://gdurl.com/kTI9"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}

            <Typography
              variant="body1"
              style={{ marginTop: 25, marginBottom: 10, fontFamily: "nunito" }}
            >
              Please mail us to get the free demo for smart tailoring app:
              <span
                style={{ color: " #3B7CFE", cursor: "pointer" }}
                onClick={() => {
                  window.open("mailto:career@ncpli.com");
                }}
              >
                career@ncpli.com
              </span>
            </Typography>

            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
              duration={2}
            >
              <div style={{ position: "relative", marginTop: 10 }}>
                <img
                  width="100%"
                  style={{ top: 0, left: 0 }}
                  height="150%"
                  src={HomeSD}
                ></img>
              </div>
            </AnimationOnScroll>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={OrderSD}
              ></img>
            </div>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={orderUser}
              ></img>
            </div>
            <Typography
              variant="body1"
              style={{ marginTop: 10, fontFamily: "nunito" }}
            >
              Online Cab Booking Web Application  Screenshots{" "}
            </Typography>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={SDApp}
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>














      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle4>
          <Typography
            variant="h4"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Need this Product? Contact us:
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            {" "}
            If you like and want this product, Please feel free to contact us.
            Also we can add/update new features and design changes in this
            product if you want.
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            To discuss about this product and our other services, please mail us
            on
            <span
              style={{ color: " #3B7CFE", cursor: "pointer" }}
              onClick={() => {
                window.open("mailto:career@ncpli.com");
              }}
            >
              {" "}
              career@ncpli.com
            </span>{" "}
            or call
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("tel:04622585979");
              }}
            >
              {" "}
              0462 - 2585979{" "}
            </span>
          </Typography>
          <Button
            style={{
              backgroundColor: "#ED514A",
              color: "white",
              fontWeight: "600",
              fontFamily: "nunito",
              marginTop: 15,
              textTransform: "none",
              width: 150,
            }}
          >
            Requested a Demo
          </Button>
        </DivStyle4>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        <div
          style={{
            width: "67%",
            margin: "0 auto",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Submit a Query
          </Typography>
        </div>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        {/* 67% middle of page */}
        <div
          style={{
            width: "57%",
            margin: "0 auto",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side */}
          <div style={{ width: "65%" }}>
            {contactDetails.map((text) => (
              <div>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: 20,
                    fontWeight: "600",
                    fontFamily: "nunito",
                  }}
                  multiline
                >
                  {text} <span style={{ color: "#ED514A" }}>*</span>
                </Typography>
                <TextField
                  style={{ width: "90%", marginTop: 7 }}
                  size="small"
                  onChange={(e) => {
                    text === "Name"
                      ? setName(e.target.value)
                      : text === "Company Name"
                      ? setCompanyName(e.target.value)
                      : text === "Email"
                      ? setEmail(e.target.value)
                      : setPhNumber(e.target.value);
                  }}
                />
              </div>
            ))}

            <Typography
              variant="body1"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              Select Products <span style={{ color: "#ED514A" }}>*</span>{" "}
            </Typography>
            <TextField
              style={{ width: "90%", marginTop: 7 }}
              size="small"
              select
              onChange={(e) => setSelectProduct(e.target.value)}
            >
              {products.map((productName) => (
                <MenuItem value={productName}> {productName} </MenuItem>
              ))}
            </TextField>
            <Typography
              variant="body1"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              Message <span style={{ color: "#ED514A" }}>*</span>{" "}
            </Typography>
            <TextField
              multiline
              rows={3}
              style={{ width: "90%" }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  backgroundColor: "#ED514A",
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "nunito",
                  marginTop: 20,
                  textTransform: "none",
                  width: "20%",
                }}
                onClick={() => {
                  console.log(
                    name,
                    companyName,
                    Email,
                    phNumber,
                    selectProduct,
                    message
                  );
                }}
              >
                Submit
              </Button>
            </div>
          </div>

          <div style={{ width: "25%" }}>
            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              Contact{" "}
            </Typography>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <EmailIcon style={{}} />
              <Typography
                variant="h6"
                style={{
                  fontFamily: "nunito",
                  paddingLeft: 4,
                  color: " #3B7CFE",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("mailto:career@ncpli.com");
                }}
              >
                career@ncpli.com
              </Typography>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <PhoneIcon />
              <Typography
                variant="h6"
                style={{ fontFamily: "nunito", paddingLeft: 4 }}
                onClick={() => {
                  window.open("tel:04622585979");
                }}
              >
                0462 - 2585979{" "}
              </Typography>
            </div>

            <div style={{ marginTop: 20, marginLeft: 2 }}>
              {logos.map((image) => (
                <img src={image} width="10%" style={{ paddingLeft: 20 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
