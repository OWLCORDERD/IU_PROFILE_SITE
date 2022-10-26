import React, { useState } from "react";
import "./youtube.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiFillPlayCircle} from "react-icons/ai"
import UseFetch from "../hooks/UseFetch"


const Youtube = () => {
    const IUTV = UseFetch("http://localhost:3001/IU_TV");

    const IUCLIP = UseFetch("http://localhost:3001/IU_CLIP");

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
    };

    const [categoryClick, setCategoryClick] = useState('IU_TV');
    

    return (

      <div className = "Youtube-container">
        <nav className="Info-menu">
        <ul>
          <li>
            <a href="#">
              YOUTUBE
            </a>
          </li>
        </ul>
      </nav>

    <ul className = "Youtube-category">
      <li><a href = "#IU_TV" onClick={() => setCategoryClick('IU_TV')} className = {categoryClick === 'IU_TV' ? 'active' : ''}>IU TV</a></li>
      <li><a href = "#IU_CLIP" onClick={() => setCategoryClick('IU_CLIP')} className = {categoryClick === 'IU_CLIP' ? 'active' : ''}>IU CLIP</a></li>
      <li><a href = "#">아이유의 팔레트</a></li>
      <li><a href = "#">꿈빛 셰프유</a></li>
      <li><a href = "#">BEHIND</a></li>
    </ul>
    

      <div id = "slide-container" className = {categoryClick === 'IU_TV' ? 'active' : ''}>

        <Slider {...settings}>
          {IUTV.map((item, index) => {
            return (
          <div className = "slide-box" key = {index}>
            <div className = "play-video">
              <AiFillPlayCircle className = "play-button"/>
            </div>
           <img src = {item.img_url} alt = "" key={item.id}/>
           <div className = "slide-title">
             <h1 key={item.id}>{item.title}</h1>
             <p key={item.id}>{item.director}</p>
           </div>
          </div>
        )
          })}
        </Slider>
        
      </div>

      <div id = "slide-container" className = {categoryClick === 'IU_CLIP' ? 'active' : ''}>
        
        <Slider {...settings}>
          {IUCLIP.map((item, index) => {
            return (
          <div className = "slide-box" key = {index}>
            <div className = "play-video">
              <AiFillPlayCircle className = "play-button"/>
            </div>
           <img src = {item.img_url} alt = "" key={item.id}/>
           <div className = "slide-title">
             <h1 key={item.id}>{item.title}</h1>
             <p key={item.id}>{item.director}</p>
           </div>
          </div>
        )
          })}
        </Slider>
        
      </div>


      </div>
    );
  }

export default Youtube;