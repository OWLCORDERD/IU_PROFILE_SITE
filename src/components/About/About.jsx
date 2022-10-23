import { React, useState, useEffect } from "react";
import "./about.css";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import AboutVideo from "../../assets/video/introduce-video.mp4";
import Loading from "../Loading/Loading";
import {Link} from "react-router-dom"

const About = () => {
  const innerwidth = {
    width: "50%",
    height: "50%"
  };

  const aboutMotion = {
    initial: {
      opacity: 0,
      width: innerwidth.width,
      height: innerwidth.height
    },

    animated: {
      opacity: 1,
      width: ["50%", "100%", "100%"],
      height: ["50%", "50%", "100%"],
      transition: {
        duration: 1.5
      }
    }
  };

  const container = {
    initial: {
      opacity: 1
    },

    animated: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.3,
        duration: 2,
        delay: 1.5
      }
    }
  };

  const h1Animate = {
    initial: {
      y: -100,
      opacity: 0
    },

    animated: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5
      }
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);

  setTimeout(() => {
    setLoading(loading);
  },3000)
  }, []);

  return (
    <section>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="About-IYOU-container">

          <motion.div
            variants={aboutMotion}
            initial="initial"
            animate="animated"
            className="video-background"
          >
            <video src={AboutVideo} autoPlay muted loop />
          </motion.div>

          <motion.div
            variants={container}
            initial="initial"
            animate="animated"
            className="About-title"
          >
            <motion.h1 variants={h1Animate}>Profile</motion.h1>
            <motion.p variants={h1Animate}>
              SINGER IU, <br></br>
              All About Actress Lee Ji-eun. <br></br>
              LATEST NEWS and VARIOUS INFORMATION <br></br>
              YOU CAN CHECK IT ON IYOU.
            </motion.p>

          </motion.div>


          <div className = "About-buttons">

            <Link to = "/">
              <div className = "Back-button">
                <div className="button-animation"></div>
                <h1>Home</h1>
              </div>
            </Link>

            <Link to = "/Profile">
              <div className="View-button">
                <div className="button-animation"></div>
                <h1>VIEW MORE</h1>
              </div>
            </Link>

          </div>

        </div>
      )}
    </section>
  );
};
  
export default About;
