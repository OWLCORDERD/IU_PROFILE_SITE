import React from "react";
import "../../assets/styles/Loading.css";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "styled-components";
import { motion } from "framer-motion";

const Loading = ({ loading }) => {
  const detail = css`
    width: 7rem;
    height: 7rem;
  `;

  const dynamicBox = {
    initial: {
      opacity: 1,
    },

    animated: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const dynamicTxt = {
    initial: {
      opacity: 0,
      y: 40,
    },

    animated: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='Loading-container'>
      <div className='loading-title'>
        <motion.div
          variants={dynamicBox}
          initial='initial'
          animate='animated'
          className='Dynamic-title'
        >
          <motion.span variants={dynamicTxt}>I</motion.span>
          <motion.span variants={dynamicTxt}>Y</motion.span>
          <motion.span variants={dynamicTxt}>O</motion.span>
          <motion.span variants={dynamicTxt}>U</motion.span>
        </motion.div>

        <motion.div
          className='loading-state'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ClipLoader color={"#fff"} size={50} loading={loading} css={detail} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          THE PROFILE SITE
        </motion.p>
      </div>
    </div>
  );
};

export default React.memo(Loading);
