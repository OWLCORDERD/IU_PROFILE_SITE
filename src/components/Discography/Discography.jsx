import { commonService } from "components/service";
import React, { useState, useEffect } from "react";
import "assets/styles/discography.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import styled from "styled-components";

const Discography = () => {
  const [discoDB, setDiscoDB] = useState([]);

  const [animate, setAnimate] = useState(true);

  const onPlay = () => setAnimate(true);
  const onPause = () => setAnimate(false);

  useEffect(() => {
    commonService.getDiscoGraphy().then((res) => setDiscoDB(res));
  }, []);

  const DiscograpySlider = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 38rem;
    z-index: 10;
    overflow: hidden;

    .slider-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: max-content;
      height: 100%;
      padding: 0 3.125rem;

      .slide {
        display: inline-flex;
        width: max-content;
        height: 100%;

        li {
          width: 25rem;
          height: 100%;
          margin-right: 50px;

          .Album-imgBox {
            width: 100%;
            height: 25rem;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .Album-infoBox {
            width: 100%;
            height: 150px;

            h2 {
              margin-top: 20px;
              line-height: 50px;
              font-size: 15px;
              color: #fff;
              font-family: var(--font-family-Noto);
            }

            p {
              line-height: 50px;
              font-size: 13px;
              color: #fff;
              font-family: var(--font-family-Noto);
            }
          }
        }

        &.original {
          animation: 20s linear infinite normal none running animate;
        }

        &.clone {
          animation: 20s linear infinite animate2;
        }

        &.stop {
          animation-play-state: paused;
        }

        @keyframes animate {
          0% {
            transform: translateX(0%);
          }

          50% {
            transform: translateX(-100%);
          }

          50.1% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        @keyframes animate2 {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-200%);
          }
        }
      }
    }
  `;

  return (
    <div className='Discography-container'>
      <div className='Discography-titleBox'>
        <h1 className='Discography-title'>Discography</h1>

        <div className='control-animate'>
          <BsPlayFill className='control-button' onClick={() => onPlay()} />
          <BsPauseFill className='control-button' onClick={() => onPause()} />
        </div>
      </div>

      <DiscograpySlider>
        <ul className='slider-wrap'>
          <div
            className={"slide original".concat(animate === true ? "" : " stop")}
          >
            {discoDB.map((item) => {
              return (
                <li key={item.id}>
                  <div className='Album-imgBox'>
                    <img src={item.AlbumImg} alt='AlbumImg' />
                  </div>

                  <div className='Album-infoBox'>
                    <h2 className='Album-title'>{item.title}</h2>
                    <p className='Album-since'>{item.Since}</p>
                  </div>
                </li>
              );
            })}
          </div>

          <div
            className={"slide clone".concat(animate === true ? "" : " stop")}
          >
            {discoDB.map((item) => {
              return (
                <li key={item.id}>
                  <div className='Album-imgBox'>
                    <img src={item.AlbumImg} alt='AlbumImg' />
                  </div>

                  <div className='Album-infoBox'>
                    <h2 className='Album-title'>{item.title}</h2>
                    <p className='Album-since'>{item.Since}</p>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </DiscograpySlider>
    </div>
  );
};

export default Discography;
