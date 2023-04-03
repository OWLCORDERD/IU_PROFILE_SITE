import React from "react";
import BannerImg from "../../assets/image/banner 배경/MusicNews.jpg";
import store from "../../reducer/store";
import { useSelector } from "react-redux";

const Slide = ({ MusicData, FashionData, CFData }) => {
  const currentSlides = useSelector((state) => state.slide.count);
  return (
    <>
      {MusicData ? (
        <div className="Slider-item" id={currentSlides == 0 ? "active" : ""}>
          <div className="Slider-background">
            <img src={MusicData.img_url} alt="" />
          </div>

          <div className="Slider-contents">
            <div className="Slider-txtBox">
              <div className="sub-title">
                <p>{MusicData.category}</p>
              </div>
              <div className="Slider-title">
                <h1>{MusicData.title}</h1>
              </div>
              <div className="Slider-info">
                <p>{MusicData.info}</p>
              </div>
              <div className="View-more">view more</div>
            </div>
          </div>
        </div>
      ) : null}

      {FashionData ? (
        <div className="Slider-item" id={currentSlides == 1 ? "active" : ""}>
          <div className="Slider-background">
            <img src={FashionData.img_url} alt="" />
          </div>

          <div className="Slider-contents">
            <div className="Slider-txtBox">
              <div className="sub-title">
                <p>{FashionData.category}</p>
              </div>
              <div className="Slider-title">
                <h1>{FashionData.title}</h1>
              </div>
              <div className="Slider-info">
                <p>{FashionData.info}</p>
              </div>
              <div className="View-more">view more</div>
            </div>
          </div>
        </div>
      ) : null}

      {CFData ? (
        <div className="Slider-item" id={currentSlides == 2 ? "active" : ""}>
          <div className="Slider-background">
            <img src={CFData.img_url} alt="" />
          </div>

          <div className="Slider-contents">
            <div className="Slider-txtBox">
              <div className="sub-title">
                <p>{CFData.category}</p>
              </div>
              <div className="Slider-title">
                <h1>{CFData.title}</h1>
              </div>
              <div className="Slider-info">
                <p>{CFData.info}</p>
              </div>
              <div className="View-more">view more</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Slide;
