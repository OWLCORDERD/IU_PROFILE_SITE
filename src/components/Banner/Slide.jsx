import React from "react";

const Slide = ({ slideData }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${slideData.YtbID}`;
  return (
    <div className='Slider-item'>
      <div className='Slider-background'>
        <img src={slideData.thumbNail} alt={`${slideData.title} 배너 이미지`} />
      </div>

      <div className='Slider-contents'>
        <div className='slide-index'>
          <h2>{slideData.category}</h2>
        </div>
        <div className='slide-title'>
          <h1>{slideData.title}</h1>
        </div>
        <div className='slide-info'>
          <p>{slideData.subTitle}</p>
        </div>

        <div className='view-more'>
          <a href={youtubeUrl} target='_blank' rel='noreferrer'>
            view video
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
