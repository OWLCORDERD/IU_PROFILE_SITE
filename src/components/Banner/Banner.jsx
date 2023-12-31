import React, { useState, useRef } from "react";
import "assets/styles/mainBanner.css";
import { useEffect } from "react";
import Slide from "./Slide";
import { commonService } from "../service";
import "assets/styles/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "components/slideButton/NextArrow";
import PrevArrow from "components/slideButton/PrevArrow";

const Banner = () => {
  const [SlideData, setSlideData] = useState([]);

  const bannerRef = useRef(null);

  useEffect(() => {
    commonService.getMainSlider().then((res) => {
      setSlideData(res);
    });
  }, []);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='Banner-container' ref={bannerRef}>
      <div className='slider-container'>
        <Slider {...settings}>
          {SlideData.map((item) => {
            return <Slide slideData={item} key={item.id} />;
          })}
        </Slider>
      </div>

      {/*
      <div className='slide-control'>
        <div className='control-buttons'>
          <IoIosArrowBack color='#fff' className='control-icon' />
          <IoIosArrowForward color='#fff' className='control-icon' />
        </div>
      </div>
      */}
    </div>
  );
};

export default Banner;
