import React from "react";
import "../../assets/styles/footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Logo from "../../assets/image/logo/I-YOU-unscreen.gif";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-banner">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="footer-Social">
          <ul>
            <li>
              <a href="#">
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-menu">
        <h1 className="menu-title">CATEGORY</h1>
        <ul>
          <li>
            <a href="#">PROFILE</a>
          </li>
          <li>
            <a href="#">MUSIC</a>
          </li>
          <li>
            <a href="#">GALLARY</a>
          </li>
        </ul>
      </div>

      <div className="footer-menu">
        <h1 className="menu-title">COMPONY</h1>
        <ul>
          <li>
            <a href="#">EDAM</a>
          </li>
          <li>
            <a href="#">MADE EDAM</a>
          </li>
          <li>
            <a href="#">DAUM CAFE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
