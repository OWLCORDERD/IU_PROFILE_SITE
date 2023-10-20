import React from "react";

const Slide = ({ slideData }) => {
  const videoIframe = `https://www.youtube.com/embed/${slideData?.YtbID}?start=74&autoplay=1&mute=1&amp;playlist=${slideData?.YtbID}&loop=1;controls=0;`;
  const videoSrc = `https://www.youtube.com/watch?v=${slideData?.YtbID}`;
  return (
    <div className='Slider-item'>
      <div className='Slider-background'>
        <iframe
          width='560'
          height='315'
          src={videoIframe}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>

      <div className='Slider-contents'>
        <div className='title-Box'>
          <div className='sub-title'>
            <p>{slideData.category}</p>
          </div>
          <div className='Slider-title'>
            <h1>{slideData.title}</h1>
          </div>
          <div className='Slider-subTitle'>
            <p>{slideData.subTitle}</p>
          </div>
        </div>

        <div className='view-more'>
          <a href={videoSrc} target='_blank' rel='noreferrer'>
            view video
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
