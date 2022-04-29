import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { margin, styled } from "@mui/system";

import FrameDD from "../images/PFPic/FrameDD.png";
import Frame from "../images/PFPic/Frame.png";

import About from "../images/PFPic/About.png";
import Account from "../images/PFPic/Account.png";
import Board from "../images/PFPic/Board.png";
import Class from "../images/PFPic/Class.png";

import Home from "../images/PFPic/Home.png";
import Quiz from "../images/PFPic/Quiz.png";
import Splash from "../images/PFPic/Splash.png";
import Subject from "../images/PFPic/Subject.png";
import Unit from "../images/PFPic/Unit.png";
import Video from "../images/PFPic/Video.png";
import { Button, IconButton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  color: "black",
}));

export default function PhoneFrame() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  console.log(width);
  console.log(height);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const pics = [
    Subject,
    Home,
    Splash,
    About,
    Account,
    Board,
    Class,
    Quiz,
    Unit,
    Video,
  ];

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    window.scrollTo(0, 0);
    console.log(width);
  }, []);

  const ListData = [1, 2, 3];

  return (
    <>
      
    <div>


        <div style={{width:'300px' , height:'400px' , backgroundColor:'skyblue'}}>


                    <div style={{width:'100%'}}>
                    <StarIcon style={{position:'absolute' , top:0,left:'50%' , transform:`translate(-50%,-50%)`}}/>
                    </div>

                <Typography variant='subtitle1' sx={{padding:'25px'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </Typography>

                <Button variant='contained' color='primary'> Hit Me </Button>
        </div>


    </div>

      {/* <div style={{ position: "relative", marginTop: "100px" }}>
        <Slider
          autoplay={true}
          arrows={false}
          speed={100}
          slidesToShow={width > 1300 ? 5 : 3}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {pics.map((item) => (
            // <Container>
            <img
              src={item}
              style={{
                objectFit: "contain",
                height: width > 1300 ? "495px" : "250px",
                width: "30%",
                marginTop: "40px",
              }}
            />
            // </Container>
          ))}
        </Slider>

        {width > 1300 ? (
          <img
            src={Frame}
            width="27%"
            style={{
              // margin:'-10px 0px',
              objectFit: "contain",
              position: "absolute",
              left: "50%",
            //   top: width >= 848 ? "-100px" : "-190px", // 020
            top: "-20%", // 020

              transform: `translateX(-50%)`,
            }}
          />
        ) : null}
      </div> */}
    </>
  );
}
