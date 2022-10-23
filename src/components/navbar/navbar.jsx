import React, { useEffect } from "react";
import "../navbar/navbar.css";
import logo from "../../assets/image/logo/I-YOU-unscreen.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
import Player from "../Play/Player";
import sectionImg from "../../assets/image/section 배경/GANADARA MV.jpeg";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {RiInstagramFill} from "react-icons/ri"
import {FaTwitterSquare} from "react-icons/fa"

const Navbar = () => {

  window.addEventListener('scroll', function(){
    const navActive = document.querySelector('.navbar');
    let NavScroll = window.scrollY;
    if(NavScroll > 150){
      navActive.classList.add('active');
    }else{
      navActive.classList.remove('active');
    }
  })
  const [showMenu, setShowMenu] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  const [songs] = useState([
    {
      title: "GANADARA",
      artist: "Jay Park, IU",
      img_src: "./Album/GANADARA.png",
      src: "./Audio/GANADARA.mp3"
    },
    {
      title: "조각집",
      artist: "IU",
      img_src: "./Album/조각집.jpg",
      src: "./Audio/조각집 메들리.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <div className="navbar">
        <div className="menu-button" onClick={() => setNavbarMenu(!navbarMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="NavMenu-container" className={navbarMenu ? "active" : ""}>
          
        <div className = "NavMenu-logo">
              <h1>IYOU</h1>
              <p>THE PROFILE SITE</p>
            </div>

          <div className="NavMenu">

            <ul className = "Introduce-ul">

              <div className = "Introduce-title">
                <h1>Introduce</h1>
              </div>
              <li>
                <Link to="/About">Profile</Link>
              </li>

              <li>
                <a href="#">MUSIC</a>
              </li>

              <li>
                <a href="#">Gallary</a>
              </li>
            </ul>

            <ul className = "SOCIAL-ul">

              <div className = "SOCIAL-title">
                <h1>SOCIAL</h1>
              </div>
              <li>
                <Link to="/Profile">EDAM</Link>
              </li>

              <li>
                <a href="#">MADE EDAM</a>
              </li>

              <li>
                <a href="#">IU FAN CAFE</a>
              </li>
            </ul>

          </div>

          <div className = "NavMenu-subMenu">
              <ul>
                <li><a href = "#"><RiInstagramFill/></a></li>
                <li>
                  <Link to = "/">
                    <AiFillHome/>
                  </Link>
                </li>
                <li><a href = "#"><FaTwitterSquare/></a></li>
              </ul>
            </div>

        </div>

        <div className="player-button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <AiFillCloseCircle className="close" />
          ) : (
            <BsFileEarmarkMusicFill className="open" />
          )}
        </div>

        <div id="music-section" className={showMenu ? "active" : ""}>
          <img src={sectionImg} className="section-bg" alt="" />
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
