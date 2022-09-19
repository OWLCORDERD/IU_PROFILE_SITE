import React from "react";
import "../Home/home.css";
import homeimg from "../../assets/image/background.jpg";
import homeimg2 from "../../assets/image/제이에스티나.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Navbar from "../navbar/navbar";
import video from "../../assets/video/아이유(IU) X 구찌(GUCCI).mp4";

const home = () => {
  return (
    <div className="home">
      <img src={homeimg} alt="" className="home-background" />
        <Navbar />
        <div className="sub-title">THE PROFILE SITE</div>
        <div className="title">
          <span>I</span>
          <span>Y</span>
          <span>O</span>
          <span>u</span>
        </div>

        <div className="box-content-left">
          <h1>INFORMATION</h1>
        </div>
        <div className="character-box">
          <img src={homeimg2} alt="" />
          <div className="character-box-content">
            <p>with EDAM ENTERTAIMENT</p>
          </div>
        </div>

        <div className="box-content-right" id = "id">
          <h1>NEWS UPDATE</h1>
        </div>

        <a href = "#SEC1">
        <BsFillArrowDownCircleFill  className="scroll-down"/>
        </a>

          <div className="opacity-content">
            <h1>SCROLL DOWN</h1>
          </div>

        <div className="slide-box">
          <div className="video-container">
            <video src={video} autoPlay muted loop />
          </div>

          <div className="slide-txt">
            <div className="dynamic-txt">
              <span>SINCE 2022 NEW INFORMATION UPDATE &nbsp; </span>
            </div>
            <div className="dynamic-txt txt2">
              <span>
                NEWS UPDATE 2022 SEASON FROM IYOU
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default home;
