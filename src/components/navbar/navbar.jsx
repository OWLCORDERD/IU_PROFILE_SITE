import React, { useEffect, useState } from "react";
import "../../assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  const [navbarMenu, setNavbarMenu] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="menu-button" onClick={() => setNavbarMenu(!navbarMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="NavMenu-container" className={navbarMenu ? "active" : ""}>
        <div className="NavMenu-logo">
          <h1>IYOU</h1>
          <p>THE PROFILE SITE</p>
        </div>

        <div className="NavMenu">
          <ul className="Introduce-ul">
            <div className="Introduce-title">
              <h1>Introduce</h1>
            </div>

            <li>
              <Link to="/About">Profile</Link>
            </li>

            <li>
              <a href="#">MUSIC</a>
            </li>

            <li>
              <Link to="/Gallary">Gallary</Link>
            </li>
          </ul>

          <ul className="SOCIAL-ul">
            <div className="SOCIAL-title">
              <h1>SOCIAL</h1>
            </div>

            <li>
              <a href="http://www.edam-ent.com/html/" target="_blank">
                EDAM
              </a>
            </li>

            <li>
              <a href="https://madeedam.com/" target="_blank">
                MADE EDAM
              </a>
            </li>

            <li>
              <a href="https://m.cafe.daum.net/IU/_rec" target="_blank">
                IU FAN CAFE
              </a>
            </li>
          </ul>
        </div>

        <div className="NavMenu-subMenu">
          <ul>
            <li>
              <a href="#">
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a onClick={() => setNavbarMenu(!navbarMenu)}>
                <AiFillHome />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
