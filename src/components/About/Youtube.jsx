import React, { useState } from "react";
import "../../assets/styles/youtube.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillPlayCircle } from "react-icons/ai";
import db from "../../db.json";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Youtube = () => {
  const [ytbData, setYtbData] = useState([]);

  useEffect(() => {
    setYtbData(db.Youtube);
  }, [ytbData]);

  const IUTV = ytbData.filter((Youtube) => Youtube.title === "IU TV");

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  const slider = {
    initial: {
      opacity: 0,
      x: "-50%",
      y: "-40%",
    },

    animated: {
      opacity: 1,
      x: "-50%",
      y: "-50%",
      transition: {
        staggerChildren: 0.5,
        duration: 2,
      },
    },
  };

  return (
    <div className="Youtube-container">
      <nav className="Info-menu">
        <ul>
          <li>
            <a href="#">IU TV</a>
          </li>
        </ul>
      </nav>

      <motion.div
        id="slide-container"
        variants={slider}
        initial="initial"
        animate="animated"
      >
        <Slider {...settings}>
          {IUTV.map((item) => {
            return (
              <div className="slide-box" key={item.id}>
                <div className="play-video">
                  <AiFillPlayCircle className="play-button" />
                </div>
                <img src={item.img_url} alt="" />
                <div className="slide-title">
                  <h1>{item.VideoName}</h1>
                  <p>{item.director}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Youtube;
