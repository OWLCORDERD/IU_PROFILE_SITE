import { React, useEffect, useState } from "react";
import "../../assets/styles/gallary.css";
import GallaryBanner from "./GallaryBanner";
import GallaryList from "./GallaryList";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import logo from "../../assets/image/logo/I-YOU-unscreen.gif";
import { motion } from "framer-motion";

const Gallary = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading);
    }, [3000]);
  }, []);

  const headerTxt = document.querySelector(".Gallary-content-box");

  const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
  `;

  const GlistHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 200;
    background-color: transparent;
    padding: 0 2rem;
    background-color: #fff;
  `;

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

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Section>
          <GlistHeader>
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <motion.div
              className="Gallary-content-box"
              variants={animationBox}
              initial="initial"
              animate="animate"
            >
              <div className="Gallary-contents">
                <motion.div
                  className="Gallary-subTitle"
                  variants={animationItem}
                >
                  <h1>IU Megazine Gallary</h1>
                </motion.div>

                <motion.div className="Gallary-title" variants={animationItem}>
                  <h1>New Megazine</h1>
                </motion.div>
              </div>
            </motion.div>

            <div className="Gallary-hamburgerMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </GlistHeader>

          <GallaryBanner />
          <GallaryList />
        </Section>
      )}
    </>
  );
};

export default Gallary;
