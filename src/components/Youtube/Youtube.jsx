import React, { useState } from "react";
import "./youtube.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../ImageData.json";
import {AiFillPlayCircle} from "react-icons/ai"


const Youtube = () => {
    
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
    };

    const [categoryClick, setCategoryClick] = useState(null);
    

    return (

      <div className = "Youtube-container">

      <div className = "Youtube-title">
      <h1>YOUTUBE</h1>
    </div>

    <ul className = "Youtube-category">
      <li><a href = "#IU_TV" onClick={() => setCategoryClick('IU_TV')} className = {categoryClick === 'IU_TV' ? 'active' : ''}>IU TV</a></li>
      <li><a href = "#IU_CLIP" onClick={() => setCategoryClick('IU_CLIP')} className = {categoryClick === 'IU_CLIP' ? 'active' : ''}>IU CLIP</a></li>
      <li><a href = "#">아이유의 팔레트</a></li>
      <li><a href = "#">꿈빛 셰프유</a></li>
      <li><a href = "#">BEHIND</a></li>
    </ul>
    

      <div id = "IU_TV_slide-container" className = {categoryClick === 'IU_TV' ? 'active' : ''}>

        <Slider {...settings}>
          {data.IU_TV.map((item, index) => {
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

      <div id = "IU_CLIP_slide-container" className = {categoryClick === 'IU_CLIP' ? 'active' : ''}>
        
        <Slider {...settings}>
          {data.IU_CLIP.map((item, index) => {
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