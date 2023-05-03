import React, { useEffect, useRef } from "react";
import "../../assets/styles/fanCafe.css";

const FanCafe = () => {
  const max = 321116;

  const countRef = useRef(null);

  const counter = (max, count) => {
    let now = max;

    const handle = setInterval(() => {
      count.innerHTML = Math.ceil(max - now);

      if (now < 1) {
        clearInterval(handle);
      }

      const step = now / 10;

      now -= step;
    }, 50);
  };

  useEffect(() => {
    const count = document.querySelector(".dynamic-count");
    if (!countRef.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => counter(max, count));
      }
    });
    io.observe(countRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className='FanCafe-container' ref={countRef}>
      <div className='FanCafe-header'>
        <div className='header-titleBox'>
          <h2 className='header-subTitle'>Fan Cafe</h2>
          <h1 className='header-title'>IU(아이유) 공식 팬카페</h1>
        </div>

        <div className='header-memberBox'>
          <h2 className='member-title'>회원 수</h2>

          <div className='member-count'>
            <h1 className='dynamic-count'>0</h1>
            <p className='static-txt'>명</p>
          </div>
        </div>
      </div>

      <div className='FanCafe-section'>
        <div className='FanCafe-Video'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/aFkkL7f1ZJ8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>

        <div className='FanCafe-info'>
          <div className='info-item'>
            <h2>오직 팬클럽에게만 제공되는</h2>
            <h1>유애나 ZONE</h1>
          </div>

          <div className='info-item'>
            <h2>아이유가 유애나에게 전하는</h2>
            <h1>From. IU</h1>
          </div>

          <div className='info-item'>
            <h2>아이유에게 응원의 메시지를</h2>
            <h1>Dear. IU</h1>
          </div>

          <div className='info-item'>
            <h2>당신의 팬심을 증명해주세요</h2>
            <h1>인증 & 자랑</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanCafe;
