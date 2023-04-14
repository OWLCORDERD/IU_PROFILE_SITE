import React from "react";
import "../../assets/styles/AboutIndex.css";
import sensor from "../../assets/image/sensor.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/all";

const SingerIndex = ({ infoData, indexRef }) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.to(".Actor-LeftScroll .Left-ImgBox", {
    bottom: 0,
    scrollTrigger: {
      trigger: indexRef.current,
      scrub: 5,
      start: "50% top",
      end: "100% top",
    },
  });

  tl.to(".Actor-RightScroll .Right-ImgBox", {
    bottom: "100%",
    scrollTrigger: {
      trigger: indexRef.current,
      scrub: 5,
      start: "50% top",
      end: "100% top",
    },
  });

  return (
    <div className='Actor-IndexBox'>
      <div className='Focus-EffectBox'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={sensor} alt='sensor' className='sensor'></img>
      </div>

      <div className='Index-ItemBox'>
        <div className='Actor-LeftScroll'>
          <div className='Left-ImgBox'>
            <div className='item-Img'>
              <img src={infoData[0]?.MyMister} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.MyMister2} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.hoteldelluna} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.hoteldelluna2} alt='' />
            </div>
          </div>
        </div>

        <div className='Index-Content'>
          <div className='Content-main'>
            <h1 className='Index-career'>{infoData[0]?.career}</h1>
            <h1 className='Index-name'>{infoData[0]?.name}</h1>
          </div>
          <div className='Index-subContent'>
            <span>만능 엔터테이너를 소개합니다.</span>
          </div>
        </div>

        <div className='Actor-RightScroll'>
          <div className='Right-ImgBox'>
            <div className='item-Img'>
              <img src={infoData[0]?.persona} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.persona2} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.MoonLover} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.produsa} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingerIndex;
