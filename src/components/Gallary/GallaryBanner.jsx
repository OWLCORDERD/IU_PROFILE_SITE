import { React, useState, useEffect, useRef } from "react";
import "../../assets/styles/gallaryBanner.css";
import { commonService } from "../service";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const GallaryBanner = () => {
  const [GSliderDB, setGSliderDB] = useState([]);

  const [nextSlide, setNextSlide] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  const SlideImgRef = useRef(null);

  const StatusRef = useRef(null);

  const useInterval = (callback, delay) => {
    if (nextSlide === 4) {
      setNextSlide(0);
    }

    const saveCallBack = useRef();

    useEffect(() => {
      saveCallBack.current = callback;

      return () => {
        saveCallBack.current = null;
      };
    }, [callback]);

    useEffect(() => {
      const init = () => saveCallBack.current();

      if (delay !== null) {
        let incrementCount = setInterval(init, delay);

        return () => clearInterval(incrementCount);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      setNextSlide(nextSlide + 1);
    },
    isRunning ? 6000 : null
  );

  useEffect(() => {
    commonService.getGallarySlider().then((res) => {
      setGSliderDB(res);
    });

    if (nextSlide >= 0) {
      SlideImgRef.current.classList.add("active");
    }

    return () => setGSliderDB([]);
  }, [nextSlide]);

  const slideStop = (e) => {
    e.preventDefault();

    setIsRunning(false);

    SlideImgRef.current.classList.remove("active");
    StatusRef.current.classList.remove("active");
  };

  const slidePlay = (e) => {
    e.preventDefault();

    setIsRunning(true);

    StatusRef.current.classList.add("active");
  };

  return (
    <div className='Gallary-banner'>
      <div className='Banner-Index'>
        <div className='Index-video' ref={SlideImgRef}>
          <img src={GSliderDB[nextSlide]?.thumbNail} alt='slideImg' />
        </div>

        <div className='Index-Info'>
          <div className='Index-type'>
            <h2>{GSliderDB[nextSlide]?.type}</h2>
          </div>

          <div className='Index-Compony'>
            <p>{GSliderDB[nextSlide]?.Compony}</p>
          </div>

          <div className='Index-title'>
            <p>{GSliderDB[nextSlide]?.title}</p>
          </div>

          <a
            href={GSliderDB[nextSlide]?.video_url}
            className='view-video'
            target='_blank'
            rel='noreferrer'
          >
            영상 보러가기
          </a>

          <div className='Slide-status'>
            <div className='status-bar active' ref={StatusRef}>
              <span></span>
            </div>
            <div className='status-info'>
              {nextSlide + 1} / {GSliderDB.length}
            </div>

            <div className='slide-control'>
              <div className='autoSlide-stop' onClick={(e) => slideStop(e)}>
                <BsFillPauseFill />
              </div>

              <div className='autoSlide-play' onClick={(e) => slidePlay(e)}>
                <BsFillPlayFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryBanner;
