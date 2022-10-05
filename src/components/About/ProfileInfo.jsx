import { React } from "react";
import "./about.css";
import ProfileVideo from "../../assets/video/Celebrity.mp4";
import ProfileImg from "../../assets/image/Profile-new.jpg";
import { AiFillFastBackward } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaBaby } from "react-icons/fa";
import { BiStreetView } from "react-icons/bi";
import { AiFillFastForward } from "react-icons/ai";

const ProfileInfo = ({ infoSetOpen, infoOpen }) => {
  const dynamicBox = {
    initial: {
      opacity: 1
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 1
      }
    }
  };

  const ShowImg = {
    initial: {
      opacity: 0,
      y: 100
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  };

  const ShowContent = {
    initial: {
      opacity: 0,
      y: 50
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <motion.div
      id="ProfileInfo-container"
      className={infoOpen === !infoOpen ? "active" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-background">
        <video src={ProfileVideo} autoPlay muted loop />
      </div>

      <nav className="Info-menu">
        <ul>
          <li>
            <a href="#" className="active">
              PROFILE
            </a>
          </li>
        </ul>
      </nav>
      <motion.div className="ProfileInfo-section">
        <motion.div
          className="Profile-Img"
          variants={ShowImg}
          initial="initial"
          animate="animate"
        >
          <img src={ProfileImg} alt="" />
        </motion.div>

        <motion.div
          className="Information-contents"
          variants={dynamicBox}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={ShowContent} className="Name">
            IU
          </motion.h1>
          <motion.div className="sub-name" variants={ShowContent}>
            <h1>(아이유, 이지은)</h1>
            <p>가수, 텔런트</p>
          </motion.div>

          <motion.div className="sub-info" variants={ShowContent}>
            <div className="born-date">
              <FaBaby />
              <h1>1993년 5월 16일생</h1>
            </div>

            <div className="Singer-date">
              <BiStreetView />
              <h1>2008년 9월 13일 데뷔</h1>
            </div>
          </motion.div>

          <motion.div className="About-IU-contents" variants={ShowContent}>
            예명인 아이유(IU)는 '음악으로 너와 내가 하나가 된다'라는 뜻을 가지고
            있다.<br></br> 만 15세였던 2008년에 가수로 데뷔했으며, 2010년에는
            국민 여동생이라는 <br></br> 칭호를 얻으면서 국민적인 스타로
            떠올랐다. 매력적인 음색과 뛰어난 작사 <br></br>작곡 능력을 바탕으로
            아이돌이자 아티스트로서 십수 년째 사랑 받고 있으며, <br></br>2012년
            이래로 매년 대규모 콘서트를 진행하며 공연자로서도 활발히 활동
            중이다.
            <br></br>
            .
            <br></br>
            .
            <br></br>
            출처 : 나무위키
          </motion.div>

          <a href = "https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%9C%A0" className = "Profile-button" target="_blank">
            <h1>+ VIEW MORE INFORMATION</h1>
            </a>
        </motion.div>
      </motion.div>

      <div className="back-button" onClick={() => infoSetOpen(!infoOpen)}>
        <AiFillFastBackward />
        <h1>Home</h1>
      </div>

      <div className="SNS-button">
        <h1>SOCIAL</h1>
        <AiFillFastForward />
      </div>
    </motion.div>
  );
};

export default ProfileInfo;
