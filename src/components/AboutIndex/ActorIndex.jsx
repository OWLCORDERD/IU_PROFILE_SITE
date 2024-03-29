import React from "react";
import "../../assets/styles/AboutIndex.css";
import sensor from "../../assets/image/sensor.png";
import { useEffect } from "react";

const SingerIndex = ({ infoData, indexRef, gsap }) => {
  useEffect(() => {
    gsap.to(".Actor-LeftScroll .Left-ImgBox", {
      bottom: "0%",
      scrollTrigger: {
        trigger: indexRef.current,
        scrub: 5,
        start: "50% top",
        end: "100% top",
      },
    });

    gsap.to(".Actor-RightScroll .Right-ImgBox", {
      bottom: "100%",
      scrollTrigger: {
        trigger: indexRef.current,
        scrub: 5,
        start: "50% top",
        end: "100% top",
      },
    });
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
              <img src={infoData[0]?.IndexImg1} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg2} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg3} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg4} alt='' />
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
              <img src={infoData[0]?.IndexImg5} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg6} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg7} alt='' />
            </div>
            <div className='item-Img'>
              <img src={infoData[0]?.IndexImg8} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingerIndex;
