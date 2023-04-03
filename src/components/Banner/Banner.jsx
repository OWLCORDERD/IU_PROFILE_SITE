import React, { useState, useRef } from "react";
import "../../assets/styles/mainBanner.css";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import axios from "axios";
import Slide from "./Slide";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import store from "../../reducer/store";
import { decrements, increments } from "../../reducer/toggleSlide";
import { useSelector } from "react-redux";

const Banner = () => {
  const TotalSlides = 2;
  const currentSlide = useSelector((state) => state.slide.count);

  const slideRef = useRef(null);
  const bannerRef = useRef(null);

  const nextSlide = (e) => {
    e.preventDefault();

    if (currentSlide >= TotalSlides) {
      store.dispatch(decrements());
    } else {
      store.dispatch(increments());
    }
  };

  const [SlideData, setSlideData] = useState([]);
  const MusicSlide = SlideData.find((SlideData) => SlideData.id === 1);
  const FashionSlide = SlideData.find((SlideData) => SlideData.id === 2);
  const CFSlide = SlideData.find((SlideData) => SlideData.id === 3);

  useEffect(() => {
    axios
      .get("http://localhost:3080/Slider")
      .then((res) => res.data)
      .then((data) => setSlideData(data));

    slideRef.current.style.right = `${currentSlide}00%`;
    slideRef.current.style.transition = `all 0.5s ease-out`;
  }, [currentSlide]);

  return (
    <div className="Banner-container" ref={bannerRef}>
      <Navbar bannerRef={bannerRef} />
      <ul className="Slider-listBox" ref={slideRef}>
        <li>
          <Slide MusicData={MusicSlide} />
        </li>
        <li>
          <Slide FashionData={FashionSlide} />
        </li>
        <li>
          <Slide CFData={CFSlide} />
        </li>
      </ul>
      {currentSlide == 0 ? (
        <div className="NextSlider-Preview" onClick={(e) => nextSlide(e)}>
          <div className="NextSlider-Thumbnail">
            <div className="NextSlider-imgBox">
              <img src={SlideData[currentSlide + 1]?.img_url} alt="" />
            </div>
            <div className="NextSlider-button">
              <BsArrowRightShort />
            </div>
          </div>
          <div className="Preview-info">
            <h1 className="category">
              {SlideData[currentSlide + 1]?.category}
            </h1>
            <p className="title">{SlideData[currentSlide + 1]?.title}</p>
          </div>
        </div>
      ) : null}
      {currentSlide == 1 ? (
        <div className="NextSlider-Preview" onClick={(e) => nextSlide(e)}>
          <div className="NextSlider-Thumbnail">
            <div className="NextSlider-imgBox">
              <img src={SlideData[currentSlide + 1]?.img_url} alt="" />
            </div>
            <div className="NextSlider-button">
              <BsArrowLeftShort />
            </div>
          </div>
          <div className="Preview-info">
            <h1 className="category">
              {SlideData[currentSlide + 1]?.category}
            </h1>
            <p className="title">{SlideData[currentSlide + 1]?.title}</p>
          </div>
        </div>
      ) : null}

      {currentSlide >= TotalSlides ? (
        <div className="NextSlider-Preview" onClick={(e) => nextSlide(e)}>
          <div className="NextSlider-Thumbnail">
            <div className="NextSlider-imgBox">
              <img src={SlideData[currentSlide - 2]?.img_url} alt="" />
            </div>
            <div className="NextSlider-button">
              <BsArrowLeftShort />
            </div>
          </div>
          <div className="Preview-info">
            <h1 className="category">
              {SlideData[currentSlide - 2]?.category}
            </h1>
            <p className="title">{SlideData[currentSlide - 2]?.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
