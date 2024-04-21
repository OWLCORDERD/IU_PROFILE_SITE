import React from "react";
import "../../assets/styles/AboutIndex.css";
import sensor from "../../assets/image/sensor.png";
import { useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

const SingerIndex = ({ infoData, indexRef, gsap }) => {
  const leftActorScrollRef = useRef(null);
  const rightActorScrollRef = useRef(null);

  useEffect(() => {
    gsap.to(leftActorScrollRef.current, {
      bottom: "0%",
      scrollTrigger: {
        trigger: indexRef.current,
        scrub: 5,
        start: "50% top",
        end: "100% top",
      },
    });

    gsap.to(rightActorScrollRef.current, {
      bottom: "100%",
      scrollTrigger: {
        trigger: indexRef.current,
        scrub: 5,
        start: "50% top",
        end: "100% top",
      },
    });
  });

  const IndexScrollBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    .Scroll-Index {
      position: relative;
      width: max-content;
      height: 100%;
      z-index: 10;
      overflow-y: hidden;

      .Left-Index {
        position: relative;
        width: 100%;
        height: max-content;
        bottom: 130%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .item-Img {
          position: relative;
          width: 350px;
          height: 50vh;
          overflow: hidden;
          margin-bottom: 50px;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .Right-Index {
        position: relative;
        width: 100%;
        height: max-content;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .item-Img {
          position: relative;
          width: 350px;
          height: 50vh;
          overflow: hidden;
          margin-bottom: 50px;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .Index-Content {
      position: relative;
      width: 100%;
      height: 30rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 10;

      .Content-main {
        position: relative;
        width: 100%;
        height: 20rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .Index-career {
        position: relative;
        width: 40%;
        font-size: 20px;
        color: #fff;
        font-family: var(--font-family-Noto);
        text-align: center;
        transition-duration: 0.2s;
      }

      .Index-name {
        position: relative;
        width: 60%;
        font-size: 30px;
        color: #fff;
        font-family: var(--font-family-Noto);
        text-align: center;
        transition-duration: 0.2s;
      }

      .Index-subContent {
        width: 100%;
        height: 10rem;
        font-size: 15px;
        color: #fff;
        font-family: var(--font-family-Noto);
        text-align: center;
      }
    }
  `;

  return (
    <div className='Actor-IndexBox'>
      <div className='Focus-EffectBox'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={sensor} alt='sensor' className='sensor'></img>
      </div>

      <IndexScrollBox>
        <div className='Scroll-Index'>
          <div className='Left-Index' ref={leftActorScrollRef}>
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

        <div className='Scroll-Index'>
          <div className='Right-Index' ref={rightActorScrollRef}>
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
      </IndexScrollBox>
    </div>
  );
};

export default SingerIndex;
