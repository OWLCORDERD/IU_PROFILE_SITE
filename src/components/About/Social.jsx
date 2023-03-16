import React from "react";
import { AiFillFastForward } from "react-icons/ai";
import "../../assets/styles/about.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Instagram from "../../assets/image/프로필 사진/인스타 프로필.png";
import facebook from "../../assets/image/section 배경/facebook.jpg";
import { motion } from "framer-motion";
import Youtube from "./Youtube";
import { useState } from "react";

const Social = (props) => {
  const [openYtb, setOpenYtb] = useState(false);

  const dynamicBox = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const SocialTxtAni = {
    initial: {
      opacity: 0,
      y: 100,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      id="Social-container"
      className={props.socialOpen === !false ? "active" : ""}
    >
      <nav className="Info-menu" id={openYtb === !false ? "hidden" : ""}>
        <ul>
          <li>
            <a href="#">Social</a>
          </li>
        </ul>
      </nav>

      <div
        className="Next-button"
        id={openYtb === !false ? "active" : ""}
        onClick={() => setOpenYtb(!false)}
      >
        <h1>YOUTUBE</h1>
        <AiFillFastForward />
      </div>

      <div className="Social-section" id={openYtb === !false ? "hidden" : ""}>
        <motion.ul variants={dynamicBox} initial="initial" animate="animate">
          <motion.li variants={SocialTxtAni}>
            <div className="Social-type">
              <AiFillInstagram className="Social-icon" />
              <h1 className="Social-name">Instagram</h1>
            </div>

            <div className="Social-profile">
              <div className="Social-image">
                <img src={Instagram} alt="" />
              </div>

              <div className="Social-id">
                <h1>@dlwlrma</h1>
                <p>이지금 IU</p>
              </div>

              <div className="Social-follower">
                <h1>팔로워</h1>
                <h1>27.3M</h1>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dlwlrma/"
              className="Social-button"
              target="_blank"
            >
              +View more
            </a>
          </motion.li>

          <motion.li variants={SocialTxtAni}>
            <div className="Social-type">
              <AiFillTwitterSquare className="Social-icon" />
              <h1 className="Social-name">twitter</h1>
            </div>

            <div className="Social-profile">
              <div className="Social-image">
                <img src={facebook} alt="" />
              </div>

              <div className="Social-id">
                <h1>@_IUofficial</h1>
                <p>아이유(IU) Official Twitter</p>
              </div>

              <div className="Social-follower">
                <h1>팔로워</h1>
                <h1>141만</h1>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dlwlrma/"
              className="Social-button"
            >
              +View more
            </a>
          </motion.li>

          <motion.li variants={SocialTxtAni}>
            <div className="Social-type">
              <AiFillFacebook className="Social-icon" />
              <h1 className="Social-name">facebook</h1>
            </div>

            <div className="Social-profile">
              <div className="Social-image">
                <img src={facebook} alt="" />
              </div>

              <div className="Social-id">
                <h1>IU(아이유)</h1>
                <p>IU(아이유) OFFICIAL FACEBOOK</p>
              </div>

              <div className="Social-follower">
                <h1>팔로워</h1>
                <h1>942만</h1>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dlwlrma/"
              className="Social-button"
            >
              +View more
            </a>
          </motion.li>
        </motion.ul>
      </div>

      {openYtb && <Youtube setOpenYtb={setOpenYtb} openYtb={openYtb} />}
    </div>
  );
};

export default Social;
