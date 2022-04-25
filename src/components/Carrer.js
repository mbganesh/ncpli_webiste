import React from "react";
import ExperienceIcon from "@mui/icons-material/Work";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import DegreeIcon from "@mui/icons-material/WorkspacePremium";
import LocationIcon from "@mui/icons-material/LocationOn";
import JobIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import CareerBanner from "../images/careerPageImages/career_bg.svg";
import Footer from "./SubComponents/Footer";
import { Colors } from "../constants";

export default function Carrer() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const CardRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  }));

  const CardTopItem = styled("div")(({ theme }) => ({
    backgroundImage: `url(${CareerBanner})`,
    height: "160px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "300px",
  }));

  const CardTopItemDate = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    height: "160px",
    backgroundColor: `rgb(255,255,255, .5)`,
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
  }));

  const navigate = useNavigate();

  const CareerDataList = [
    {
      title: "Project Admin",
      location: "Tirunelveli",
      time: "Full Time",
      experience: "1 Year",
      qualification: "MBA",
      details: {
        title: "Project Admin",
        description:
          " Netcom Looking for Python development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Exposure to NLP, Image intelligence packages is an added advantage",
          "Ability to clearly present design proposals to internal and external stakeholders",
          "Excellent written and verbal communication skills",
          "Excellent analytical and problem-solving skills",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in Python, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
    {
      title: "React JS Developer",
      location: "Tirunelveli",
      time: "Full Time",
      experience: "0-1 Year",
      qualification: "BE,BSc",
      details: {
        title: "React JS Developer",
        description:
          " Netcom Looking for React JS Developer development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Candidate should have expertise with React JS Developer API Development",
          "Expertise in at least one popular React JS Developer framework (like Django, Flask or Pyramid)",
          "Understanding of the threading limitations of React JS Developer, and multi-process architecture",
          "Excellent analytical and problem-solving skills",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in React JS Developer, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
    {
      title: "Android Developer",
      location: "Chennai",
      time: "Full Time",
      experience: "2 Year",
      qualification: "BE,MSc",
      details: {
        title: "Android Developer",
        description:
          " Netcom Looking for Android Developer development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Candidate should have expertise with Android Developer API Development",
          "Expertise in at least one popular Android Developer framework (like Django, Flask or Pyramid)",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in Android Developer, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
    {
      title: "PHP Developer",
      location: "Tirunelveli",
      time: "Full Time",
      experience: "1 Year",
      qualification: "BE,MSc",
      details: {
        title: "PHP Developer",
        description:
          " Netcom Looking for PHP Developer development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Candidate should have expertise with PHP Developer API Development",
          "Expertise in at least one popular PHP Developer framework (like Django, Flask or Pyramid)",
          "Excellent written and verbal communication skills",
          "Excellent analytical and problem-solving skills",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in PHP Developer, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
    {
      title: "Content Developer",
      location: "Chennai",
      time: "Full Time",
      experience: "0-1 Year",
      qualification: "BSc",
      details: {
        title: "Content Developer",
        description:
          " Netcom Looking for Content Developer development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Candidate should have expertise with Content Developer API Development",
          "Expertise in at least one popular Content Developer framework (like Django, Flask or Pyramid)",
          "Understanding of the threading limitations of Content Developer, and multi-process architecture",
          "Excellent knowledge in RDBMS Databases, NoSQL database like MongoDB/Neo4j.",
          "Exposure to NLP, Image intelligence packages is an added advantage",
          "Ability to clearly present design proposals to internal and external stakeholders",
          "Excellent written and verbal communication skills",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in Content Developer, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
    {
      title: "Animation",
      location: "Tirunelveli",
      time: "Full Time",
      experience: "5 Year",
      qualification: "Any Degree",
      details: {
        title: "Animation",
        description:
          " Netcom Looking for Animation development lead for api development a team player with 2-4 years of working experience in developing releasing and maintaining medium to large scale software applications. Successful candidate knowledge of databases like SQL, MySQL, PostgreSQL etc and familiarity with some orm object relational mapper libraries knowledge of CI/CD tools like Azure DevOps GitHub Jenkins, etc.",
        duties: [
          "Candidate should have expertise with Animation API Development",
          "Expertise in at least one popular Animation framework (like Django, Flask or Pyramid)",
          "Understanding of the threading limitations of Animation, and multi-process architecture",
          "Excellent knowledge in RDBMS Databases, NoSQL database like MongoDB/Neo4j.",
          "Exposure to NLP, Image intelligence packages is an added advantage",
          "Ability to clearly present design proposals to internal and external stakeholders",
          "Excellent written and verbal communication skills",
          "Excellent analytical and problem-solving skills",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
          "Exposure on cloud basics and deployment over cloud (any cloud)",
        ],
        skillSet: [
          "Bachelors Degree in Computer Science or equivalent.",
          "Total Experience: 2 to 4 yrs",
          "Strong Experience in Animation, Django, JavaScript,jQuery, PHP, Bootstrap",
        ],
      },
    },
  ];

  const myCard = (theme) => ({
    padding: "5px",
    margin: "1%",
    width: "300px",
    backgroundColor: "#FFF9F9",
    boxShadow: `rgba(1,146,103 , 0.1) 0px 0px 0px 3px`,
    [theme.breakpoints.down("sm")]: {
      margin: "15px 5px",
      padding: "15px",
    },
    "&:hover": {
      transition: "0.5s",
      transform: `scale(${1.02})`,
      boxShadow: `rgba(1,146,103 , 0.8) 0px 0px 0px 3px`,
    },

    [theme.breakpoints.between("sm", "md")]: {
      width: "310px",
    },

    [theme.breakpoints.down("md")]: {
      width: "280px",
    },
  });

  const applyBtn = (theme) => ({
    margin: "15px 0px 5px",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
      border: "1px solid green",
    },
  });

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Career" }} />
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
              <Typography color="text.primary">Career</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <div style={{ display: "flex", justifyContent: "center", padding: "1% 14% 1% 14%", }}>
        <CardRow>
          {CareerDataList.map((data, i) => (
            <Card sx={myCard} elevation="2" key={i}>
              <CardTopItem>
                <CardTopItemDate>
                  <Typography variant="subtitle1"> {data.title} </Typography>
                  <Chip
                    size="small"
                    label={data.time}
                    style={{ color: "white", backgroundColor: Colors.MAIN_COLOR }}
                  />
                </CardTopItemDate>
              </CardTopItem>
              <CardLocation>
                <JobIcon style={{ width: "30px", height: "30px" }} />

                <CardSingleItem style={{ color: "gray" }}>
                  <LocationIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    {data.location}{" "}
                  </Typography>
                </CardSingleItem>
              </CardLocation>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "5px",
                }}
              >
                <CardSingleItem>
                  <ExperienceIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    Experience : {data.experience}{" "}
                  </Typography>
                </CardSingleItem>

                <CardSingleItem>
                  <DegreeIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    Qualification : {data.qualification}{" "}
                  </Typography>
                </CardSingleItem>
              </div>

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
      <Footer/>
    </>
  );
}
