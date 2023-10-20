import { commonService } from "components/service";
import React, { useState, useEffect } from "react";
import "assets/styles/discography.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const Discography = () => {
  const [discoDB, setDiscoDB] = useState([]);

  const [animate, setAnimate] = useState(true);

  const onPlay = () => setAnimate(true);
  const onPause = () => setAnimate(false);

  useEffect(() => {
    commonService.getDiscoGraphy().then((res) => setDiscoDB(res));
  }, []);

  return (
    <div className='Discography-container'>
      <div className='Discography-titleBox'>
        <h1 className='Discography-title'>Discography</h1>

        <div className='control-animate'>
          <BsPlayFill className='control-button' onClick={() => onPlay()} />
          <BsPauseFill className='control-button' onClick={() => onPause()} />
        </div>
      </div>

      <div className='Discography-slider'>
        <ul className='slider-wrap'>
          <div
            className={"slide original".concat(animate === true ? "" : " stop")}
          >
            {discoDB.map((item) => {
              return (
                <li>
                  <a href='#'>
                    <div className='Album-imgBox'>
                      <img src={item.AlbumImg} alt='AlbumImg' />
                    </div>

                    <div className='Album-infoBox'>
                      <h2 className='Album-title'>{item.title}</h2>
                      <p className='Album-since'>{item.Since}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </div>

          <div
            className={"slide clone".concat(animate === true ? "" : " stop")}
          >
            {discoDB.map((item) => {
              return (
                <li>
                  <a href='#'>
                    <div className='Album-imgBox'>
                      <img src={item.AlbumImg} alt='AlbumImg' />
                    </div>

                    <div className='Album-infoBox'>
                      <h2 className='Album-title'>{item.title}</h2>
                      <p className='Album-since'>{item.Since}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Discography;
