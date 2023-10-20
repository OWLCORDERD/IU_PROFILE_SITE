import React, { useState, useRef } from "react";
import "assets/styles/mainBanner.css";
import { useEffect } from "react";
import Slide from "./Slide";
import store from "reducer/store";
import { decrements, increments, reset } from "reducer/toggleSlide";
import { useSelector } from "react-redux";
import { commonService } from "../service";
import { Oval } from "react-loader-spinner";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const [SlideData, setSlideData] = useState([]);
  const totalSlides = 2;
  const currentSlide = useSelector((state) => state.slide.count);

  const [loop, setLoop] = useState();
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

  useEffect(() => {
    if (loading === false) {
      const timeout = setTimeout(() => {
        if (currentSlide > totalSlides) {
          return store.dispatch(reset());
        }

        return store.dispatch(increments());
      }, 9000);

      setLoop(timeout);

      if (currentSlide > totalSlides) {
        return store.dispatch(reset());
      }
    }
    return () => {
      clearTimeout(loop);
    };
  }, [loading, SlideData, currentSlide]);

  const nextSlide = (e) => {
    e.preventDefault();

    if (currentSlide > 2) {
      store.dispatch(reset());
    } else {
      store.dispatch(increments());
    }
  };

  const beforeSlide = (e) => {
    e.preventDefault();

    if (currentSlide > 0) {
      store.dispatch(decrements());
    }
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
        <ul
          className='Slider-listBox'
          style={{
            left: `-${currentSlide}00%`,
            transitionDelay: `0.5s`,
            transitionDuration: `1s`,
          }}
        >
          {SlideData.map((item) => {
            return (
              <li key={item.id}>
                <Slide slideData={item} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className='slide-control'>
        <div className='slide-state'>{currentSlide + 1} / 3</div>

        <div className='control-buttons'>
          <IoIosArrowBack
            color='#fff'
            onClick={(e) => beforeSlide(e)}
            visibility={currentSlide === 0 ? "hidden" : "visible"}
            className='control-icon'
          />
          <IoIosArrowForward
            color='#fff'
            onClick={(e) => nextSlide(e)}
            visibility={currentSlide === 2 ? "hidden" : "visible"}
            className='control-icon'
          />
        </div>
      </div>

      <div className='slide-status'>
        <span
          className='statusBar'
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
