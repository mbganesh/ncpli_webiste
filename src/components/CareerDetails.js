import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScrollToTop } from 'react-simple-scroll-up'

import AppbarHead from '../components/SubComponents/AppbarHead';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import SideTip from "./SubComponents/SideTip";
import Footer from "./SubComponents/Footer";

const BreadcrumbStyle  = styled('div')(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
}));

export default function CareerDetails() {

    const location = useLocation()

    const [details, setDetails ] = useState({})

  useEffect(() => {
    setDetails(location.state.details)
  }, [])
  

  const DetailsRoot = styled("div")(({theme})=>({
    display: "flex", flexDirection: "column", width: "60%", margin:'2% 0%',
    [theme.breakpoints.down('sm')]:{
        width:'90%'
    },
    [theme.breakpoints.down('md')]:{
        width:'85%'
    },
    [theme.breakpoints.between('sm','md')]:{
        width:'80%',
    }
  }))

  const DetailsDiv = styled("div")(({theme})=>({
    display:'flex' , flexDirection:'column' ,  margin:'2% 0%'
  }))



  return (
   <>

<ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Career" }} />
      <BreadcrumbStyle>
        <Card sx={{ width: 350, height: 50 }}>
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
              <Link
                underline="hover"
                color="inherit"
                href="/carrer"
                sx={{ display: "flex", alignItems: "center" }}
              >
              <Typography color="text.primary">Career</Typography>
              </Link>
               <Typography color="text.primary">Career Details</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

   <SideTip/>

<div style={{ display: "flex", justifyContent:'center'  }}>


{/* details root */}
<DetailsRoot>
 
  <Typography variant="h5" style={{fontWeight:'bold' ,textAlign:'center' ,}}> {details.title} </Typography>

  {/* job description */}
    
    <DetailsDiv >
    <Typography variant="h6" style={{ whiteSpace:'nowrap'}}>Job Description:</Typography>

    <Typography
      variant="body2"
      style={{ color: "#010101", textAlign: "justify", }}
    >
      {" "}
      {details.description}
    </Typography>
  </DetailsDiv>
  {/* duties */}
  <DetailsDiv>
    <Typography variant="h6">Responsibilities and Duties:</Typography>

    {details.duties?.map((data,i) => (
      <Typography
      key={i}
        variant="body2"
        style={{ color: "#010101", textAlign: "justify" , marginLeft:'1%' , padding:'1%'}}
      > 
        <span style={{fontWeight:'bolder'}}>{" ✔ "}</span>
        {data}
      </Typography>
    ))}
   </DetailsDiv>

  {/* skill set */}
  <DetailsDiv>
    <Typography variant="h6">
      Required Experience, Skills and Qualifications:
    </Typography>

    {details.skillSet?.map((data,i) => (
      <Typography
      key={i}
        variant="body2"
        style={{ color: "#010101", textAlign: "justify" , marginLeft:'0.5%' , padding:'0.5%' }}
      >
        {" • "}
        {data}
      </Typography>
    ))}


      

  </DetailsDiv>

</DetailsRoot>



</div>

<Footer/>
   </>
  );
}
