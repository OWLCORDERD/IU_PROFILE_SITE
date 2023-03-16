import React from "react";
import UseFetch from "../hooks/UseFetch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import db from "../../db.json";
import { useState } from "react";
import { useEffect } from "react";

const GallaryList = () => {
  const [gallaryData, setGallaryData] = useState([]);
  const [signData, setSignData] = useState([]);

  useEffect(() => {
    setGallaryData(db.Gallary);
    setSignData(db.GallarySign);
  }, [gallaryData, signData]);

  const GallaryAnibox = {
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

  const GallaryAniList = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="GList-container">
      <motion.div
        className="GallaryList-box"
        variants={GallaryAnibox}
        initial="initial"
        animate="animate"
      >
        <div className="GallaryList-title">
          <h1>More MEGAZINE</h1>
          <span></span>
        </div>
        {signData.map((item) => {
          return (
            <motion.div
              className="GallaryList-item"
              variants={GallaryAniList}
              key={item.id}
            >
              <div className="GallaryList-imgbox">
                <img src={item.img_url} />
              </div>

              <div className="GallaryList-content">
                <div className="content-title">
                  <p>{item.Compony}</p>
                </div>

                <div className="content-Category">
                  <p>Category</p>
                  <span>{item.Category}</span>
                  <span>{item.Category2}</span>
                </div>

                <Link
                  to="/GallaryBox"
                  state={{ Compony: item.Compony, Filter: gallaryData }}
                >
                  <span className="view-more">View More</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GallaryList;
