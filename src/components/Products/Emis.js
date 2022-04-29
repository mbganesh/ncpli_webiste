import {React, useEffect} from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, Divider, Box, Stack } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import AppbarHead from '../SubComponents/AppbarHead';
import { ScrollToTop } from 'react-simple-scroll-up';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormSubmit from '../SubComponents/FormSubmit';
import { Colors } from '../../constants';
import ComputerIcon from '@mui/icons-material/Computer';
import Footer from '../SubComponents/Footer';


const Root = styled("div")(({ theme }) => ({
  width: "70%",

  [theme.breakpoints.down("md")]: {
    width: "95%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%"
  },
  [theme.breakpoints.up("lg")]: {},
}));




export default function Emis() {
  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const emis = [{
    emisContent: "Netcom developed an application called EMIS(Educational Management Information System).  In this application we can analyse overall school day to day process like teachers information,  students information like Enroll number, Name, Class, Community, etc., by this appliaction we  can easily handle all the school process and we can monitor the same.",
  },
  {
    emisContent: "EMIS Software is a platform which helps in managing the day to day academic and  administrative activities from a single platform. NETCOM provides user-friendly dashboards  with login access for teachers, non-teaching staff, students, parents, and management personnel  of your institution. The various modules available in school EMIS software automate daily  operations of your institution such as from students' admission to generating transfer certificates  to digitizing the online learning experience all can be managed effortlessly ."
  },
  {
    emisContent: "NETCOM EMIS has modules to manage Timetable, Attendance, Online Class, Examinations,  Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, and  many more. It has a fully-fledged Human Resource module to manage the payroll and employee  pay slips. The Finance module helps you to plan and allot different fee structures to students.  NETCOM EMIS System is also an excellent collaboration tool using its Task, Discussion, Poll,  Blog, and Videoconference plugins. There is an internal messaging system within Netcom, but  you can also integrate it with external communication tools like email and texting."
  },
  {
    emisContent: "Netcom is a learning platform for schools, which allows teachers to deliver courses, promote an  interactive learning environment and provide better operations for admin from a single platform.Transform your institute's traditional academic experience into digital learning within a few  clicks."
  }]

  const emis2 = [{
    emisContent: "Instructors can create end to end customized and engaging courses by adding teaching materials  using their favourite medium. Principal can access teachers and students dashboard. Teachers can  record the week plan, time table and schedule. Students get notified about the updates. As a  school administrator, take attendance, record assessments, and oragnize staff data. EMIS school  facilities the collection, processing, and management of information at the school. It is a  customizable application that supports the day-to-day activities involved in managing an  individual school. EMIS Classroom is a mobile app for android that facilities the collection of  data at the class room level. Techers can collect data on attandance , assessments and behaviors. ",
  },
  {
    emisContent: "EMIS classroom data can then be exported and shared in standard output formats. EMIS  Classroom is able to function with an active in ternet connection. "
  },
  {
    emisContent: "Principals and education officails can easily and quickly search, viw and update staff details  using a mobile device including staff photos.EMIS staffroom connects to securely access and  update information."
  },
  {
    emisContent: "EMIS provides the Digital Content that gives a central repository accessible to teachers across  Tamil Nadu and Unique login identifier for Teachers linked with state curiculum. Also track your  personal career excellence. With the help of this portal, the school administration also provides  all the information about the syllabus, school timings, new notices, and modification details in  online."
  }]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
      <BreadcrumbStyle>
        <Card sx={{ width: 400, height: 50 }} >
          <CardContent>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
              <Typography color="text.primary">Products</Typography>

              <Typography color="text.primary">EMIS</Typography>
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
              <Typography variant="h4" style={{ borderBottom: "4px solid", borderColor: Colors.MAIN_COLOR }}>EMIS</Typography>
            </div>
            <Divider></Divider>
            <br />
            {emis.map((text) => (
              <Stack direction="row" gap={1} style={{ marginTop: 15 }}>
                <ComputerIcon style={{ color: Colors.MAIN_COLOR }} />
                <Typography variant='subtitle1' style={{ textAlign: "justify", marginLeft: 12 }} >{text.emisContent}</Typography>
              </Stack>))}

          </div>
          <br />

          <div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" style={{ borderBottom: "4px solid", borderColor: Colors.MAIN_COLOR }}>Features of EMIS</Typography>
              </div>
              <Divider></Divider>
              <br />
              {emis2.map((text) => (

                <Stack direction="row" gap={1} style={{ marginTop: 15 }}>
                  <ComputerIcon style={{ color: Colors.MAIN_COLOR }} />
                  <Typography variant='subtitle1' style={{ textAlign: "justify", marginLeft: 12 }} >{text.emisContent}</Typography>
                </Stack>

              ))}

            </div>

          </div>

        </Root>

      </div>

      <FormSubmit />



<Footer/>
    </>
  )
}
