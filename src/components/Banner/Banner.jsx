import React, { useState, useRef } from "react";
import "../../assets/styles/mainBanner.css";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import axios from "axios";
import Slide from "./Slide";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import store from "../../reducer/store";
import { decrements, increments } from "../../reducer/toggleSlide";
import { useSelector } from "react-redux";

const Banner = () => {
  const TotalSlides = 2;
  const currentSlide = useSelector((state) => state.slide.count);

  const slideRef = useRef(null);
  const bannerRef = useRef(null);
  const before = useRef(null);
  const after = useRef(null);

  const nextSlide = (e) => {
    e.preventDefault();

    if (currentSlide >= TotalSlides) {
      return;
    } else {
      store.dispatch(increments());
    }
  };

  const beforeSlide = (e) => {
    e.preventDefault();

    if (currentSlide >= 1) {
      store.dispatch(decrements());
    } else {
      return;
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
    slideRef.current.style.transitionDuration = `1s`;
    slideRef.current.style.transitionDelay = `0.5s`;

    if (currentSlide === 0) {
      before.current.style.display = `none`;
    } else {
      before.current.style.display = `flex`;
    }

    if (currentSlide > 1) {
      after.current.style.display = `none`;
    } else {
      after.current.style.display = `flex`;
    }
  }, [currentSlide]);

  return (
    <div className='Banner-container' ref={bannerRef}>
      <Navbar bannerRef={bannerRef} />
      <div className='slide-button'>
        <div
          className='slide-before'
          ref={before}
          onClick={(e) => beforeSlide(e)}
        >
          <MdArrowBackIosNew />
          <h2>Prev</h2>
        </div>

        <div className='slide-next' onClick={(e) => nextSlide(e)} ref={after}>
          <h2>Next</h2>
          <MdArrowForwardIos />
        </div>
      </div>
      <div className='slider-container'>
        <ul className='Slider-listBox' ref={slideRef}>
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
      </div>

      <div className='slide-status'>
        <span
          class='statusBar'
          style={{
            transform: `translateX(${currentSlide}00%)`,
            transitionDelay: `0.5s`,
            transitionDuration: `0.5s`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Banner;
