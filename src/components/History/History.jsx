import React, { useEffect, useRef } from "react";
import "../../assets/styles/history.css";
import { useState } from "react";
import { commonService } from "components/service";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  const [historyDB, setHistoryDB] = useState([]);

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

  const HistoryIndex = styled.div`
    width: 50%;
    height: 100%;

    .sticky-title {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;

      .title {
        width: 100%;

        h1 {
          line-height: 8rem;
          font-family: var(--font-family);
          font-size: 4rem;
          color: #fff;
          text-transform: uppercase;
          text-align: center;
        }
      }

      .info {
        width: 100%;
        margin-top: 2rem;

        p {
          line-height: 3rem;
          font-size: 15px;
          color: #fff;
          font-family: var(--font-family-Noto);
          text-align: center;
        }
      }
    }
  `;

  const HistoryList = styled.ul`
    position: relative;
    padding-left: 100px;
    width: 50%;
    height: 100%;

    .History-item {
      width: 100%;
      height: 100vh;

      .content-area {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: max-content;

        .since {
          width: 100%;
          border-top: 2px solid #fff;

          h2 {
            line-height: 6.25rem;
            font-size: 1.5rem;
            color: #fff;
            font-family: var(--font-family);
          }
        }

        .History-contents {
          width: 100%;
          height: 5rem;

          .date {
            display: inline-block;
            width: 20%;
            line-height: 5rem;
            font-size: 15px;
            color: #fff;
            font-family: var(--font-family);
          }

          .activity {
            display: inline-block;
            width: 80%;
            line-height: 5rem;
            font-size: 14px;
            color: #fff;
            font-family: var(--font-family-Noto);
          }
        }
      }
    }
  `;

  useEffect(() => {
    commonService.getHistory().then((res) => setHistoryDB(res));

    gsap.to(statusRef.current, {
      height: "100%",
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top",
        end: "100% top",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className='History-container' ref={scrollRef}>
      <HistoryIndex>
        <div className='sticky-title'>
          <div className='title'>
            <h1>History</h1>
          </div>

          <div className='info'>
            <p>만능 엔터테이너 아이유의 연혁을 소개합니다.</p>
          </div>
        </div>
      </HistoryIndex>

      <div className='line-area'>
        <div className='line'>
          <div className='active-line' ref={statusRef}></div>
        </div>
      </div>

      <HistoryList>
        <li className='History-item'>
          <div className='content-area'>
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

        <li className='History-item'>
          <div className='content-area'>
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

        <li className='History-item'>
          <div className='content-area'>
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

        <li className='History-item'>
          <div className='content-area'>
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
      </HistoryList>
    </div>
  );
};

export default Introduce;
