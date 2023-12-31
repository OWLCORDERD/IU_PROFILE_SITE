import React, { useEffect, useRef } from "react";
import "../../assets/styles/history.css";
import { useState } from "react";
import { commonService } from "components/service";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  const [historyDB, setHistoryDB] = useState([]);
  useEffect(() => {
    commonService.getHistory().then((res) => setHistoryDB(res));

    gsap.fromTo(
      statusRef.current,
      {
        height: "0%",
      },
      {
        height: "100%",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top center",
          end: "150% bottom",
          scrub: 1,
        },
      }
    );
  }, []);

  const scrollRef = useRef(null);
  const statusRef = useRef(null);

  const since2008 = historyDB.filter(
    (history) => history.since === "2008 ~ 2011"
  );
  const since2012 = historyDB.filter(
    (history) => history.since === "2012 ~ 2016"
  );
  const since2017 = historyDB.filter(
    (history) => history.since === "2017 ~ 2019"
  );
  const since2020 = historyDB.filter(
    (history) => history.since === "2020 ~ 2021"
  );

  return (
    <div className='History-container' ref={scrollRef}>
      <div className='left'>
        <div className='Sticky-titleBox'>
          <div className='title'>
            <h1>History</h1>
          </div>

          <div className='info'>
            <p>만능 엔터테이너 아이유의 연혁을 소개합니다.</p>
          </div>
        </div>
      </div>

      <div className='line-area'>
        <div className='line'>
          <div className='active-line' ref={statusRef}></div>
        </div>
      </div>

      <div className='right'>
        <ul className='History-list'>
          <li className='History-Index'>
            <div className='contBox'>
              <div className='since'>
                <h2>2008 ~ 2011</h2>
              </div>

              {since2008.map((history) => {
                return (
                  <div className='History-contents'>
                    <span className='date'>{history.date}</span>

                    <p className='activity'>{history.activity}</p>
                  </div>
                );
              })}
            </div>
          </li>

          <li className='History-Index'>
            <div className='contBox'>
              <div className='since'>
                <h2>2012 ~ 2016</h2>
              </div>

              {since2012.map((history) => {
                return (
                  <div className='History-contents'>
                    <span className='date'>{history.date}</span>

                    <p className='activity'>{history.activity}</p>
                  </div>
                );
              })}
            </div>
          </li>

          <li className='History-Index'>
            <div className='contBox'>
              <div className='since'>
                <h2>2017 ~ 2019</h2>
              </div>

              {since2017.map((history) => {
                return (
                  <div className='History-contents'>
                    <span className='date'>{history.date}</span>

                    <p className='activity'>{history.activity}</p>
                  </div>
                );
              })}
            </div>
          </li>

          <li className='History-Index'>
            <div className='contBox'>
              <div className='since'>
                <h2>2020 ~ 2021</h2>
              </div>

              {since2020.map((history) => {
                return (
                  <div className='History-contents'>
                    <span className='date'>{history.date}</span>

                    <p className='activity'>{history.activity}</p>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduce;
