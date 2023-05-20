import React, { useState, useEffect, useRef } from "react";
import store from "../../reducer/store";
import { useSelector } from "react-redux";
import { decrementToggle, incrementToggle } from "../../reducer/controlSlide";
import "../../assets/styles/introduce.css";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";
import ProfileImg from "../../assets/image/Profile-new.jpg";
import Edamlogo from "../../assets/image/logo/EDAM엔터테인먼트_logo.png";
import Clublogo from "../../assets/image/logo/UAENA LOGO.jpg";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Introduce = () => {
  const IntroRef = useRef(null);

  const discoTotalSlide = 2;

  const toggleCount = useSelector((state) => state.discoSlide.toggle);

  const DiscoNextSlide = (e) => {
    e.preventDefault();

    if (toggleCount <= discoTotalSlide) {
      store.dispatch(incrementToggle());
    } else {
      return;
    }
  };

  const DiscoBeforeSlide = (e) => {
    e.preventDefault();

    if (toggleCount >= 1) {
      store.dispatch(decrementToggle());
    } else {
      return;
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  const [discoDB, setDiscoDB] = useState([]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".Introduce-container",
      start: "-10% top",
      end: "100% top",
      toggleClass: { targets: ".Entertainer-infoBox", className: "active" },
    });

    ScrollTrigger.create({
      trigger: ".Introduce-container",
      start: "-50% top",
      end: "30% top",
      toggleClass: { targets: ".Profile-ContentBox", className: "active" },
    });

    ScrollTrigger.create({
      trigger: ".Introduce-container",
      start: "30% top",
      end: "100% top",
      toggleClass: { targets: ".About-ContentBox", className: "active" },
    });

    axios
      .get("http://localhost:3080/Discography")
      .then((res) => res.data)
      .then((data) => setDiscoDB(data));
  }, []);
  return (
    <div className='Introduce-container' ref={IntroRef}>
      <div className='Entertainer-infoBox'>
        <div className='Profile-ContentBox'>
          <div className='ContentBox-item'>
            <div className='Static-title'>
              <span></span>
              <h1>Introduce Entertainer</h1>
            </div>

            <div className='dynamic-txtBox'>
              <div className='dynamic-title'>
                <h1>PROFILE</h1>
                <p>만능엔터테이너 아이유를 소개합니다.</p>
              </div>

              <div className='dynamic-info'>
                <div className='name-info'>
                  <h1>활동명 / 본명</h1>
                  <p>아이유 / 이지은</p>
                </div>

                <div className='debut-info'>
                  <h1>데뷔일</h1>
                  <p>2008년 9월 18일</p>
                </div>

                <div className='birth-info'>
                  <h1>출생</h1>
                  <p>1993년 5월 16일생</p>
                </div>

                <div className='entertainment-info'>
                  <h1>소속사</h1>
                  <div className='entertainment-img'>
                    <img src={Edamlogo} alt='' />
                  </div>
                </div>

                <div className='FanClub-info'>
                  <h1>팬클럽</h1>
                  <div className='FanClub-img'>
                    <img src={Clublogo} alt='' />
                  </div>
                </div>

                <div className='Social-info'>
                  <h1>소셜</h1>
                  <div className='Social-list'>
                    <a
                      className='Social-item'
                      href='https://www.youtube.com/@dlwlrma'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <AiFillYoutube />
                    </a>

                    <a
                      className='Social-item'
                      href='https://www.instagram.com/dlwlrma/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <AiFillInstagram />
                    </a>

                    <a
                      className='Social-item'
                      href='https://www.facebook.com/iu.loen/?locale=ko_KR'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <AiFillFacebook />
                    </a>

                    <a
                      className='Social-item'
                      href='https://twitter.com/_IUofficial'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <AiFillTwitterSquare />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className='selectMenu-Box'>
              <li>
                <a className='active'>PROFILE</a>
              </li>
              <li>
                <a>MUSIC</a>
              </li>
            </ul>
          </div>

          <div className='Entertainer-profileImg'>
            <img src={ProfileImg} alt='' />
          </div>
        </div>

        <div className='About-ContentBox'>
          <div className='ContentBox-item'>
            <div className='Static-title'>
              <span></span>
              <h1>Introduce Entertainer</h1>
            </div>

            <section className='Discography-container'>
              <article className='Discography-contentBox'>
                <div className='Discography-titleBox'>
                  <h2 className='Discography-title'>Discography</h2>
                  <h2 className='Discography-subTitle'>
                    가수 아이유의 정규 앨범 및 미니 앨범 음반들을 소개합니다.
                  </h2>
                </div>

                <div className='Discography-control'>
                  <div className='control-play'>
                    <AiFillPlayCircle className='play' />
                    <AiFillPauseCircle className='pause' />
                  </div>

                  <div className='control-move'>
                    <MdArrowBackIosNew
                      className='before'
                      onClick={(e) => DiscoBeforeSlide(e)}
                    />
                    <MdArrowForwardIos
                      className='next'
                      onClick={(e) => DiscoNextSlide(e)}
                    />
                  </div>
                </div>
              </article>

              <article className='discography-slide'>
                <div
                  className='slide-wrap'
                  style={{
                    left: `calc(-${toggleCount} * 20rem)`,
                    transition: "all 0.2s ease-in",
                  }}
                >
                  {discoDB.map((item) => {
                    return (
                      <div className='slide-item' key={item.id}>
                        <div className='Album-Img'>
                          <img src={item.AlbumImg} alt='AlbumImg' />
                        </div>

                        <div className='Album-info'>
                          <div className='Album-title'>
                            <h2>{item.id}</h2>
                          </div>

                          <div className='Album-info'>
                            <h3>{item.info}</h3>
                          </div>

                          <div className='Album-Since'>
                            <p>{item.Since}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </section>

            <ul className='selectMenu-Box'>
              <li>
                <a>PROFILE</a>
              </li>
              <li>
                <a className='active'>MUSIC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
