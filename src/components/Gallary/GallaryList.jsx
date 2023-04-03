import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import db from "../../db.json";
import { useState } from "react";
import { useEffect } from "react";

const GallaryList = () => {
  const [gallaryData, setGallaryData] = useState([]);

  useEffect(() => {
    setGallaryData(db.Gallary);
  }, [gallaryData]);

  return (
    <div className='GallaryList-container'>
      <div className='GallaryList-header'>
        <div className='GallaryList-title'>
          <h1>Gallary</h1>
        </div>
        <ul className='GallaryList-filter'>
          <li>
            <span className='active'>ALL</span>
          </li>
          <li>
            <span>FASHION</span>
          </li>
          <li>
            <span>CF</span>
          </li>
        </ul>
        <div className='Search-container'>
          <div className='result-count'>
            <h1>{gallaryData.length} Results</h1>
          </div>

          <div className='Search-input'>
            <input type='text' placeholder='검색어를 입력하세요.' />
          </div>
        </div>
      </div>
      <div className='GallaryList-Box'>
        {gallaryData.map((item) => {
          return (
            <div className='Gallary-item'>
              <div className='Gallary-imgBox'>
                <img src={item.img_url} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GallaryList;
