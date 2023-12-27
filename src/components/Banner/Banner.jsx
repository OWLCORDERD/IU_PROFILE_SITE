import React, { useState, useRef } from "react";
import "assets/styles/mainBanner.css";
import { useEffect } from "react";
import Slide from "./Slide";
import { commonService } from "../service";
import { Oval } from "react-loader-spinner";
import "assets/styles/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "components/slideButton/NextArrow";
import PrevArrow from "components/slideButton/PrevArrow";

const Banner = () => {
  const [SlideData, setSlideData] = useState([]);
  const [loading, setLoading] = useState(true);

  const bannerRef = useRef(null);

  useEffect(() => {
    commonService.getMainSlider().then((res) => {
      setSlideData(res);
    });

    setTimeout(() => {
      setLoading(false);
    }, 6000);
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
      {loading === true ? (
        <div className='Data-Loading'>
          <Oval
            height={80}
            width={80}
            color='#fff'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#E5E5E5'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />

          <div className='loading-content'>Banner slider loading...</div>
        </div>
      ) : null}
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
