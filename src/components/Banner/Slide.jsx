import React from "react";
import { useSelector } from "react-redux";

const Slide = ({ MusicData, FashionData, CFData }) => {
  const currentSlides = useSelector((state) => state.slide.count);

  const MusicIframe = `https://www.youtube.com/embed/${MusicData?.YtbId}?autoplay=1&mute=1&amp;playlist=${MusicData?.YtbId}&loop=1;controls=0;`;
  const FashionIframe = `https://www.youtube.com/embed/${FashionData?.YtbId}?autoplay=1&mute=1&amp;playlist=${FashionData?.YtbId}&loop=1;controls=0;`;
  const CFIframe = `https://www.youtube.com/embed/${CFData?.YtbId}?autoplay=1&mute=1&amp;playlist=${CFData?.YtbId}&loop=1;controls=0;`;
  return (
    <>
      {MusicData ? (
        <div className='Slider-item' id={currentSlides == 0 ? "active" : ""}>
          <div className='Slider-background'>
            <iframe
              width='560'
              height='315'
              src={MusicIframe}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>

          <div className='Slider-contents'>
            <div className='title-Box'>
              <div className='sub-title'>
                <p>{MusicData.category}</p>
              </div>
              <div className='Slider-title'>
                <h1>{MusicData.title}</h1>
              </div>
              <div className='Slider-subTitle'>
                <p>{MusicData.subTitle}</p>
              </div>
            </div>

            <div className='view-more'>
              <span>View More</span>
            </div>
          </div>
        </div>
      ) : null}

      {FashionData ? (
        <div className='Slider-item' id={currentSlides == 1 ? "active" : ""}>
          <div className='Slider-background'>
            <iframe
              width='560'
              height='315'
              src={FashionIframe}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>

          <div className='Slider-contents'>
            <div className='title-Box'>
              <div className='sub-title'>
                <p>{FashionData.category}</p>
              </div>
              <div className='Slider-title'>
                <h1>{FashionData.title}</h1>
              </div>
              <div className='Slider-subTitle'>
                <p>{FashionData.subTitle}</p>
              </div>
            </div>

            <div className='view-more'>
              <span>View More</span>
            </div>
          </div>
        </div>
      ) : null}

      {CFData ? (
        <div className='Slider-item' id={currentSlides == 2 ? "active" : ""}>
          <div className='Slider-background'>
            <iframe
              width='560'
              height='315'
              src={CFIframe}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>

          <div className='Slider-contents'>
            <div className='title-Box'>
              <div className='sub-title'>
                <p>{CFData.category}</p>
              </div>
              <div className='Slider-title'>
                <h1>{CFData.title}</h1>
              </div>
              <div className='Slider-subTitle'>
                <p>{CFData.subTitle}</p>
              </div>
            </div>

            <div className='view-more'>
              <span>view More</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Slide;
