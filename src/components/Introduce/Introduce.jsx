import React from "react";
import "../../assets/styles/introduce.css";
import AboutImg from "../../assets/image/banner 배경/slider-banner.jpg";
import { useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
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

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

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
      end: "40% top",
      toggleClass: { targets: ".About-ContentBox", className: "active" },
    });

    ScrollTrigger.create({
      trigger: ".Introduce-container",
      start: "40% top",
      end: "100% top",
      toggleClass: { targets: ".Profile-ContentBox", className: "active" },
    });
  });
  return (
    <div className="Introduce-container" ref={IntroRef}>
      <div className="Entertainer-infoBox">
        <div className="About-ContentBox">
          <div className="ContentBox-item">
            <div className="Static-title">
              <span></span>
              <h1>Introduce Entertainer</h1>
            </div>

            <div className="dynamic-txtBox">
              <div className="dynamic-title">
                <h1>I & YOU</h1>
                <p>음악으로 너와 내가 하나가 된다.</p>
              </div>

              <div className="dynamic-info">
                <p>
                  예명인 아이유(IU)는 '음악으로 너와 내가 하나가 된다'라는 뜻을
                  가지고 있다. 만 15세였던 2008년에 가수로 데뷔했으며,
                  2010년에는 국민 여동생이라는 칭호를 얻으면서 국민적인 스타로
                  떠올랐다. 매력적인 음색과 뛰어난 작사작곡 능력을 바탕으로
                  아이돌이자 아티스트로서 십수 년째 사랑 받고 있으며, 2012년
                  이래로 매년 대규모 콘서트를 진행하며 공연자로서도 활발히 활동
                  중이다.
                </p>
              </div>
            </div>

            <ul className="selectMenu-Box">
              <li>
                <a className="active">ABOUT</a>
              </li>
              <li>
                <a>PROFILE</a>
              </li>
            </ul>
          </div>

          <div className="Entertainer-profileImg">
            <img src={AboutImg} alt="" />
          </div>
        </div>

        <div className="Profile-ContentBox">
          <div className="ContentBox-item">
            <div className="Static-title">
              <span></span>
              <h1>Introduce Entertainer</h1>
            </div>

            <div className="dynamic-txtBox">
              <div className="dynamic-title">
                <h1>PROFILE</h1>
                <p>만능엔터테이너 아이유를 소개합니다.</p>
              </div>

              <div className="dynamic-info">
                <div className="name-info">
                  <h1>활동명 / 본명</h1>
                  <p>아이유 / 이지은</p>
                </div>

                <div className="debut-info">
                  <h1>데뷔일</h1>
                  <p>2008년 9월 18일</p>
                </div>

                <div className="birth-info">
                  <h1>출생</h1>
                  <p>1993년 5월 16일생</p>
                </div>

                <div className="entertainment-info">
                  <h1>소속사</h1>
                  <div className="entertainment-img">
                    <img src={Edamlogo} alt="" />
                  </div>
                </div>

                <div className="FanClub-info">
                  <h1>팬클럽</h1>
                  <div className="FanClub-img">
                    <img src={Clublogo} alt="" />
                  </div>
                </div>

                <div className="Social-info">
                  <h1>소셜</h1>
                  <div className="Social-list">
                    <a
                      className="Social-item"
                      href="https://www.youtube.com/@dlwlrma"
                      target="_blank"
                    >
                      <AiFillYoutube />
                    </a>

                    <a
                      className="Social-item"
                      href="https://www.instagram.com/dlwlrma/"
                      target="_blank"
                    >
                      <AiFillInstagram />
                    </a>

                    <a
                      className="Social-item"
                      href="https://www.facebook.com/iu.loen/?locale=ko_KR"
                      target="_blank"
                    >
                      <AiFillFacebook />
                    </a>

                    <a
                      className="Social-item"
                      href="https://twitter.com/_IUofficial"
                      target="_blank"
                    >
                      <AiFillTwitterSquare />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className="selectMenu-Box">
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a className="active">PROFILE</a>
              </li>
            </ul>
          </div>

          <div className="Entertainer-profileImg">
            <img src={ProfileImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
