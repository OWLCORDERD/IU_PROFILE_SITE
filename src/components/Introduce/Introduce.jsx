import React, { useEffect, useRef } from "react";
import "../../assets/styles/introduce.css";
import ProfileImg from "../../assets/image/Profile-new.jpg";
import Edamlogo from "../../assets/image/logo/EDAM엔터테인먼트_logo.png";
import Clublogo from "../../assets/image/logo/UAENA LOGO.jpg";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Introduce = () => {
  const IntroRef = useRef(null);

  const ProfileContent = useRef(null);

  const ImgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("show");
        } else {
          el.target.classList.remove("show");
        }
      });
    });

    observer.observe(ProfileContent.current);
    observer.observe(ImgRef.current);
  }, []);

  return (
    <div className='Introduce-container' ref={IntroRef}>
      <div className='Profile-ContentBox'>
        <div className='ContentBox-item hidden' ref={ProfileContent}>
          <div className='Static-title'>
            <span></span>
            <h1>Introduce Entertainer</h1>
          </div>

          <div className='Profile-txtBox'>
            <div className='Profile-title'>
              <h1>PROFILE</h1>
              <p>만능엔터테이너 아이유를 소개합니다.</p>
            </div>

            <div className='Profile-info'>
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
        </div>

        <div className='Entertainer-profileImg hidden' ref={ImgRef}>
          <img src={ProfileImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
