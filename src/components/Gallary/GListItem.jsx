import React from "react";
import { useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const GListItem = () => {
  const location = useLocation();

  const layoutId = location.state.layoutId;
  const GallaryDB = location.state.gallaryDB;

  const itemFilter = GallaryDB.filter(
    (GallaryDB) => GallaryDB.title === layoutId.title
  );

  const [youtubeData, setYoutubeData] = useState(null);

  const videoData = (item) => {
    if (youtubeData === null) {
      setYoutubeData(item);
    } else {
      setYoutubeData(null);
    }
  };
  const iframeSrc = `https://www.youtube.com/embed/${youtubeData}?autoplay=1&mute=0&amp;loop=1;controls=0;playlist=${youtubeData}`;

  let increments = 0;

  function Slide_Next(e) {
    Page((increments += e));
  }
  function Slide_Back(e) {
    Page((increments += e));
  }

  const slideIdx = document.querySelectorAll("#mapItemBox-item");

  function Page(e) {
    const slide = document.querySelectorAll("#mapItemBox-item");
    let controlCount = document.querySelector(".control-page h1");

    if (e <= slide.length) {
      let number = e;

      controlCount.innerHTML = `${number}/${slide.length}`;
    }

    if (e > slide.length) {
      increments = 1;

      controlCount.innerHTML = `${increments}/${slide.length}`;
    }

    if (e < 1) {
      increments = slide.length;
    }

    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    slide[increments - 1].classList.toggle("active");
  }

  return (
    <div className='GListItem-container'>
      <div className='GListItem-header'>
        <div className='logo'>
          <img src={layoutId?.logo} />
        </div>
      </div>

      <div className='Video-contents'>
        <div className='video-title'>
          <h1>{layoutId?.title}</h1>
          <p>New Video</p>
        </div>

        <div className='GListItem-Video'>
          <div
            className='Video-Image'
            id={youtubeData === null ? "active" : ""}
          >
            <img src={layoutId?.YtbThumbNail} />
            <RiPlayCircleFill
              className='Video-playButton'
              onClick={() => videoData(layoutId.YtbID)}
            />
          </div>

          <div className='Video-iframe'>
            <iframe
              width='560'
              height='315'
              src={iframeSrc}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className='GListItem-mapBox'>
        <div className='Slider-control'>
          <div className='control-page'>
            <h1>0/{slideIdx.length}</h1>
          </div>

          <div className='control-button'>
            <IoIosArrowBack
              className='control-back'
              onClick={() => Slide_Back(-1)}
            />
            <IoIosArrowForward
              className='control-next'
              onClick={() => Slide_Next(1)}
            />
          </div>
        </div>

        <div className='mapBox-Slider'>
          <div id='mapItemBox-itemSign'>
            <div className='Sign-imgbox'>
              <img src={layoutId?.img_url} alt='' />
            </div>
          </div>

          {itemFilter.map((item) => {
            return (
              <div id='mapItemBox-item' key={item.id}>
                <div className='mapBox-imgbox'>
                  <img src={item.img_url} alt='' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GListItem;
