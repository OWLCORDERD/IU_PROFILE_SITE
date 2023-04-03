import { React } from "react";
import "../../assets/styles/gallaryBanner.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRef } from "react";

const GallaryBanner = () => {
  const [scrollXs, setScrollXs] = useState(0);
  const incrementRef = useRef(0);
  const itemRef = useRef(null);

  const [get, setget] = useState([]);

  const megazineSlide = get.filter((get) => get.YtbID !== undefined);

  useEffect(() => {
    axios
      .get("http://localhost:3080/Gallary")
      .then((res) => res.data)
      .then((data) => setget(data));
  }, []);

  const beforeScroll = () => {
    const itemWidth = itemRef.current.clientWidth + 50;
    if (scrollXs === 0) {
      return;
    }
    setScrollXs((prev) => prev + itemWidth);
  };

  const nextScroll = () => {
    const itemWidth = itemRef.current.clientWidth + 50;

    if (scrollXs === itemWidth * 3) {
      return;
    }
    setScrollXs((prev) => prev - itemWidth);
  };

  useEffect(() => {
    setInterval(() => {
      const itemWidth = itemRef.current.clientWidth + 50;
      incrementRef.current += -itemWidth;
      setScrollXs(incrementRef.current);
      if (incrementRef.current === -itemWidth * 4) {
        incrementRef.current = 0;
        setScrollXs(incrementRef.current);
      }
    }, 4000);
  }, []);
  return (
    <div className='Gallary-banner'>
      <div className='Gallary-slideBox'>
        <div className='Megazine-Category'>
          <ul
            className='Scroll-container'
            style={{
              transform: `translateX(${scrollXs}px)`,
              transition: "all 0.6s ease-in",
            }}
          >
            {megazineSlide.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to='/GallaryItem'
                    state={{ layoutId: item, gallaryDB: get }}
                  >
                    <div className='Category-item' ref={itemRef}>
                      <div className='Megazine-imgBox'>
                        <img src={item.img_url} />
                      </div>

                      <div className='Megazine-AboutBox'>
                        <div className='About-Compony'>
                          <p>{item.Compony}</p>
                        </div>

                        <div className='About-title'>
                          <h1>{item.title}</h1>
                        </div>

                        <div className='About-subTxt'>
                          <p>{item.subTitle}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type='button'
            className='slider-backButton'
            id='before'
            onClick={beforeScroll}
          >
            <IoIosArrowBack />
          </button>
          <button
            type='button'
            className='slider-NextButton'
            id='left'
            onClick={nextScroll}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallaryBanner;
