import React, { useState } from "react";
import "../Banner/banner.css";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import {BsFillArrowDownCircleFill} from "react-icons/bs";
import BannerImg from '../../assets/image/banner 배경/slider-banner.jpg';
import logo from '../../assets/image/logo/I-YOU-unscreen.gif';

const Banner = () => {

  window.addEventListener('scroll', function(){
    var scrolls = window.scrollY;
    const bannerBack = document.querySelector('.slider-background');
    const imageBack = document.querySelector('.slider-image');
    const innerContent = document.querySelector('#Slider-contents');
    const introduceCtn = document.querySelector('.Introduce-container');

    if(scrolls > 100){
      bannerBack.classList.add('active');
      imageBack.classList.add('active');
    }else{
      bannerBack.classList.remove('active');
      imageBack.classList.remove('active');
    }

    if(scrolls > 100 & scrolls < 900){
      innerContent.classList.add('active');
    }else{
      innerContent.classList.remove('active');
    }

    if(scrolls > 900){
      introduceCtn.classList.add('active');
    }else{
      introduceCtn.classList.remove('active');
    }
  })

  const [menuClick, menuOnclick] = useState("#introduce");

  const dynamicBanner = {
    initial: {
      opacity: 0
    },

    animated: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const ContentsBox = {
    initial: {
      opacity: 1
    },

    animated: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const ContentsTitle = {
    initial: {
      opacity: 0,
      y: 50
    },
    animated: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <motion.div
      variants={dynamicBanner}
      initial="initial"
      animate="animated"
      className="banner-container"
    >
      <Navbar />

        <div className="slider-container">

          <div className = "slider-background">

            <div className = "Welcome-content">
            
            <div className = "IYOU-logo">
              <img src = {logo} alt = ""/>
            </div>


            <motion.div variants={ContentsBox} initial = "initial" animate = "animated" className = "welcome-txt">
              <div className = "welcome-txt1">
              <motion.p variants={ContentsTitle}>W</motion.p>
              <motion.p variants={ContentsTitle}>E</motion.p>
              <motion.p variants={ContentsTitle}>L</motion.p>
              <motion.p variants={ContentsTitle}>C</motion.p>
              <motion.p variants={ContentsTitle}>O</motion.p>
              <motion.p variants={ContentsTitle}>M</motion.p>
              <motion.p variants={ContentsTitle}>E</motion.p>
              </div>

              <div className = "welcome-txt2">
              <motion.p variants={ContentsTitle}>T</motion.p>
              <motion.p variants={ContentsTitle}>O</motion.p>
              </div>

            </motion.div>
          
            </div>
            
          </div>

          <div className = "slider-image">
            <img src = {BannerImg} alt = ""/>
            <div id="Slider-contents">
              <motion.div variants={ContentsBox} initial = "initial" animate = "animated"
                className="inner-Main-contents"
              >
                <motion.h1 variants={ContentsTitle} className="inner-title">
                IYOU
                </motion.h1>

                <motion.p variants={ContentsTitle} className="inner-sub-title">
                  IU PROFILE SITE
                </motion.p>

                <a href = "#Introduce-Part">
                <BsFillArrowDownCircleFill className="Scroll-Down"/>
                </a>
              </motion.div>
              
            </div>
          </div>
        </div>

        <div className = "Introduce-container" id = "Introduce-Part">
          <div className = "Introduce-content">
                <motion.h1 variants={ContentsTitle} className="Introduce-title">
                  <p><strong>IU ,</strong>You and I <br></br> become one <br></br> through music</p>
                </motion.h1>

                <motion.p variants={ContentsTitle} className="Introduce-SubTitle">
                  <strong>아이유(IU)</strong>는{" "}
                  <strong>'음악으로 너와 내가 하나가 된다'</strong>라는 뜻을
                  가진 예명이다. <br></br> <br></br> 만 15세였던{" "}
                  <strong>2008년에 '미아' 1집 앨범 곡으로 데뷔</strong>했으며{" "}
                  <br></br>
                  <strong>2010년에는 국민 여동생</strong>이라는 칭호를 얻으면서
                  국민적인 스타로 떠올랐다. <br></br> <br></br>
                  <strong>매력적인 음색과 뛰어난 작사ㆍ작곡 능력을 바탕</strong>
                  으로 아이돌이자 <br></br>
                  아티스트로서 십수 년 현재까지 사랑 받고 있는 대한민국의
                  가수이자 배우이다.
                </motion.p>
            </div>
        </div>
    </motion.div>
  );
};

export default Banner;
