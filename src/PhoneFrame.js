import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { styled } from "@mui/system";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Frame from "./PFPic/frame.png";
import Pic1 from "./PFPic/pic1.jpg";
import Pic2 from "./PFPic/pic2.jpg";
import Pic3 from "./PFPic/pic3.jpg";
import Pic4 from "./PFPic/pic4.jpg";
import Pic5 from "./PFPic/pic5.jpg";

export default function PhoneFrame() {
  const pics = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic1, Pic2, Pic3, Pic4, Pic5];

  console.log("lolo");

  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    textAlign: "center",
    color: "black",
    aspectRatio: `9/16`,
  }));

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <>
   

      <div style={{ position: "relative", marginTop: "100px" }}>
        <Slider
          autoplay={true}
          arrows={false}
          speed={100}
          slidesToShow={5}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {pics.map((item) => (
            <Container>
              <img
                src={item}
                style={{
                  objectFit: "contain",
                  height: "600px",
                  width: "380px",
                }}
              />
            </Container>
          ))}
        </Slider>

        <img
          src={Frame}
          style={{
            objectFit: "contain",
            height: "1000px",
            width: "470px",
            position: "absolute",
            left: "50%",
            top: "-180px",
            marginLeft: "-235px",
          }}
        />
      </div>

    </>
  );
}
