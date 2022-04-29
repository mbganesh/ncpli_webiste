import React from "react";
import { styled } from "@mui/system";
import { Typography, Breadcrumbs, Link, Card, CardContent, Divider, Box, } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import AppbarHead from "../SubComponents/AppbarHead";
import { ScrollToTop } from "react-simple-scroll-up";
import { Colors } from "../../constants";
import rfidContents from "../StaticTextContents/projectContents/rfidContents";
import StarsIcon from '@mui/icons-material/Stars';


const Root = styled("div")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "95%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "70%",
  },
}));

const cartitem1 = (theme) => ({
  width: "30%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem2 = (theme) => ({
  width: "49%",
  padding: "10px 0px",
  borderTop: "2px solid green",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem3 = (theme) => ({
  width: "23%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.between("md", "xl")]: {
    width: "49%",
  },
});



export default function SoftwareSolutions() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Contact" }} />
      <BreadcrumbStyle>
        <Card sx={{ width: 400, height: 50 }}>
          <CardContent>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home{" "}
              </Link>
              <Typography color="text.primary">Products</Typography>
              <Typography color="text.primary">SoftwareSolutions</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Root>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" style={{ borderBottom: "4px solid", borderColor: Colors.MAIN_COLOR }}>Radio-frequency identification (RFID)</Typography>
            </div>
            <Divider></Divider>
            <br />
            {(rfidContents.rfidMainPoints).map((text) => (
              <div style={{ display: "flex", flexDirection: "row", margin: 10, marginTop: 20 }} >
                <StarsIcon style={{ color: Colors.MAIN_COLOR }} />
                <Typography variant="body1" sx={{ fontFamily: "nunito", paddingLeft: 1 }} >{text}</Typography>
              </div>
            ))}
          </div>
          <br />

{/* Netcom Features */}
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" style={{ borderBottom: "4px solid green" }}>RFID Features</Typography>
            </div>
            <Divider></Divider>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", }}>
              {rfidContents.rfidFeatures.map((item, index) => (
                <Card elevation={3} sx={cartitem1}>
                  <div>
                    <Box component="img" sx={{ height: "250px", width: "100%" }} alt="Second Image Place" src={item.image} />
                  </div>
                  <br />
                  <div style={{ display: "flex", justifyContent: "flex-start", margin: "0px 20px", }}                >
                    <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }}>{item.name}</Typography>
                  </div>
                  <Typography variant="body1" style={{ textAlign: "justify", margin: "0px 20px", lineHeight: "24px" }} gutterBottom>{item.content}</Typography>
                </Card>
              ))}
            </div>
            <br />


{/* Development Software */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" style={{ borderBottom: "4px solid green" }}>Development Software</Typography>
              </div>
              <Divider></Divider>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", }}>
                {rfidContents.rfidDevelopmentSofware.map((item, index) => (
                  <Card elevation={3} sx={cartitem1}>
                    <div>
                      <Box component="img" sx={{ height: "250px", width: "100%" }} alt="Second Image Place" src={item.image} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "0px 20px", }}>
                      <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }} >{item.name}</Typography>
                    </div>

                    <Typography variant="body1" style={{ textAlign: "justify", margin: "0px 20px", lineHeight: "24px" }} gutterBottom>
                      {item.content}
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>
            <br />

{/* RFID Server */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" style={{ borderBottom: "4px solid green" }}>RFID Server</Typography>
              </div>
              <Divider></Divider>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", }}>
                {rfidContents.rfidRfidServer.map((item, index) => (
                  <Card elevation={3} sx={cartitem1}>
                    <div>
                      <Box component="img" sx={{ height: "250px", width: "100%" }} alt="Second Image Place" src={item.image} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "0px 20px", }}>
                      <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }} >{item.name}</Typography>
                    </div>
                    <Typography variant="body1" style={{ textAlign: "justify", margin: "0px 20px", lineHeight: "24px" }} gutterBottom>{item.content}</Typography>
                  </Card>
                ))}
              </div>
            </div>
            <br />


{/* NETCOM RFID SOLUTIONS */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" style={{ borderBottom: "4px solid green" }}>Netcom RFID Solutions</Typography>
              </div>
              <Divider></Divider>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "15px", }}>
                {rfidContents.rfidNetcomRfidSolutions.map((item, index) => (
                  <Card elevation={3} sx={cartitem2}>
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "0px 20px", }}>
                      <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }} >{item.name}</Typography>
                    </div>
                    <br />
                    <Typography variant="body1" style={{ textAlign: "justify", margin: "0px 20px", lineHeight: "24px" }} gutterBottom>{item.content}</Typography>
                  </Card>
                ))}
              </div>
            </div>
            <br />



{/* METHODOLOGIES  */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" style={{ borderBottom: "4px solid green" }}>Methodologies</Typography>
              </div>
              <Divider></Divider>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "15px", }}>
                {rfidContents.rfidMethodologies.map((item, index) => (
                  <Card elevation={5} sx={cartitem3}>
                    <div>
                      <Box component="img" sx={{ height: "250px", width: "100%" }} alt="Second Image Place" src={item.image} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "0px 20px", }}>
                      <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }} >{item.name}</Typography>
                    </div>
                    <Typography variant="body1" style={{ textAlign: "justify", margin: "0px 20px", lineHeight: "24px" }} gutterBottom>{item.content}</Typography>
                  </Card>
                ))}
              </div>
            </div>
            <br />



          </div>


        </Root>
      </div>
    </>
  );
}