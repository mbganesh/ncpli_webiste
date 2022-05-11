import React, { useEffect, useState } from "react";
import BannerAll from "../components/SubComponents/BreadCrumbComponent";
import ExperienceIcon from "@mui/icons-material/Work";
import { styled } from "@mui/system";
import {
  Typography,
  Card,
  Button,
} from "@mui/material";
import DegreeIcon from "@mui/icons-material/WorkspacePremium";
import LocationIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import CareerBanner from "../images/careerPageImages/career_bg.svg";
import Footer from "./SubComponents/Footer";
import { Colors } from "../constants";
import axios from 'axios'

export default function Carrer() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const CardRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }));

  const CardTopItem = styled("div")(({ theme }) => ({
    backgroundImage: `url(${CareerBanner})`,
    height: "160px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    // width: "450px",
  }));

  const CardLocation = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
  }));

  const CardSingleItem = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "0px 10px",
  }));

  const mySingleCard = (theme) => ({
    padding: "5px",
    margin: "1%",
    width: "400px",
    backgroundColor: "#FFF9F9",
    border: "1px solid #157561",
    borderRadius: "5px",
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,

    "&:hover": {
      transition: "0.5s",
      transform: `scale(${1.02})`,
      boxShadow: `rgba(21, 117, 97, 0.55) 0px 15px 25px, rgba(21, 117, 97, 0.65) 0px 5px 10px`,
      borderRadius: "15px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2px",
      width: "350px",
    },
  });

  const applyBtn = (theme) => ({
    margin: "15px 0px 5px",
    border: "2px solid #157561",
    color: "#157561",

    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#157561",
      color: "white",
      border: "1px solid #157561",
      fontSize: "16px",
      fontWeight: "bold",
    },
  });

  const navigate = useNavigate();

  const [CareerDataList, setCareerDataList] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    // api call for data career data
    axios.get('http://192.168.1.31:9999/api/getData').then(res =>{
      console.log(res.data.data);
      setCareerDataList(res.data.data)
    })
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Career" }} />

      <BannerAll
        dataParent={{
          title: "Career",
          subTitle: "Grow With Us",
          path: ["Home", "Career"],
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1% 14% 1% 14%",
        }}
      >
        <CardRow>
          {CareerDataList.map((data, i) => (
            <Card sx={mySingleCard} elevation="2" key={i}>
              <CardTopItem />

              <div
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "10px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginRight: "5px" }}
                >
                  {" "}
                  Job Role :{" "}
                </Typography>

                <Typography variant="subtitle1">
                  {" "}
                  {data.details.title}{" "}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "5px",
                }}
              >
                <CardSingleItem>
                  <ExperienceIcon
                    style={{ color: "#157561", marginRight: "1%" }}
                  />

                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    Experience : {data.cardData[0]}{" "}
                  </Typography>
                </CardSingleItem>
                <br />
                <CardSingleItem>
                  <DegreeIcon style={{ color: "#157561", marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    Qualification : {data.cardData[1]}{" "}
                  </Typography>
                </CardSingleItem>
              </div>

              <CardLocation>
                <CardSingleItem>
                  <LocationIcon style={{ marginRight: "1%", color: "gray" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    {"Tirunelveli and Chennai"}{" "}
                  </Typography>
                </CardSingleItem>
              </CardLocation>

              <Button
                variant="outlined"
                sx={applyBtn}
                fullWidth
                onClick={() => {
                  navigate("/careerdetails", {
                    state: { details: data.details },
                  });
                }}
              >
                Details
              </Button>
            </Card>
          ))}
        </CardRow>
      </div>

      <Footer />
    </>
  );
}
