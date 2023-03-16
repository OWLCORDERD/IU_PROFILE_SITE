import React from "react";
import "../../assets/styles/submenu.css";
import { Link } from "react-router-dom";

const SubMenus = () => {
  return (
    <div className="SubMenus-container">
      <div className="MadeEDAM-txt">
        <div className="main-content">
          <h1>dlwlrma</h1>
          <p>X</p>
          <h1>MADE EDAM</h1>
        </div>

        <div className="txt-content">
          <h1>MADE EDAM</h1>
          <a href="https://madeedam.com/" target="_blank">
            <button className="MadeEDAM-button">View More</button>
          </a>
        </div>

        <div className="sub-content">
          <p>EDAM 엔터테인먼트 공식</p>
          <p>온라인 MD 스토어</p>
        </div>
      </div>
    </div>
  );
};

export default SubMenus;
