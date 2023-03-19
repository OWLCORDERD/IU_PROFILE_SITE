import { React } from "react";
import "../../assets/styles/gallaryBanner.css";
import data from "../../db.json";
import { RiPlayCircleFill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const GallaryBanner = () => {
  const NewFilter = data.Gallary.filter((item) => item.update === "New");

  const [iframeId, setIframeId] = useState(null);

  const videoPlay = () => {
    if (iframeId == null) {
      setIframeId(NewFilter[0].YtbID);
    } else {
      setIframeId(null);
    }
  };

  const [headerActive, setHeaderActive] = useState(false);

  const animateHeader = () => {
    window.addEventListener("scroll", function () {
      let scroll = window.scrollY;

      if (scroll > 200) {
        setHeaderActive(!false);
      } else {
        setHeaderActive("");
      }
    });
  };
  animateHeader();

  const animationBox = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.8,
      },
    },
  };

  const animationItem = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const NewIframe = `https://www.youtube.com/embed/${iframeId}?autoplay=1&mute=0&amp;loop=1;controls=0;playlist=${iframeId}`;

  return (
    <div className="Gallary-banner">
      <motion.div
        className="Gallary-content-box"
        variants={animationBox}
        initial="initial"
        animate="animate"
      >
        <div className="Gallary-contents">
          <motion.div className="Gallary-subTitle" variants={animationItem}>
            <h1>IU Megazine Gallary</h1>
          </motion.div>

          <motion.div className="Gallary-title" variants={animationItem}>
            <h1 id={headerActive == !false ? "active" : ""}>New Megazine</h1>
          </motion.div>
        </div>
      </motion.div>
      <div className="Gallary-background">
        <div className="New-Megazine" id={iframeId == null ? "active" : ""}>
          <img src={NewFilter[0].YtbThumbNail} alt="" />
          <RiPlayCircleFill
            className="play-button"
            onClick={(e) => videoPlay(e)}
          />
        </div>

        <div className="Megazine-Video">
          <iframe
            width="560"
            height="315"
            src={NewIframe}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GallaryBanner;
