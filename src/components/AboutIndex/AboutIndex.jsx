import React from "react";
import "../../assets/styles/AboutIndex.css";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SingerIndex from "./SingerIndex";
import { commonService } from "../service";
import { useState } from "react";
import ActorIndex from "./ActorIndex";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const AboutIndex = () => {
  const [IndexData, setIndexData] = useState([]);

  const IndexRef = useRef(null);

  useEffect(() => {
    commonService.getIntroIndex().then((res) => {
      setIndexData(res);
    });

    return () => setIndexData([]);
  }, []);

  useEffect(() => {
    gsap.to(".AboutIU-IndexList", {
      position: "sticky",
      top: 0,
      left: 0,
      scrollTrigger: {
        trigger: IndexRef.current,
        start: "top top",
        end: "100% top",
      },
    });

    ScrollTrigger.create({
      trigger: IndexRef.current,
      start: "-20% top",
      end: "40% top",
      toggleClass: { className: "show", targets: ".Singer-IndexBox" },
    });

    ScrollTrigger.create({
      trigger: IndexRef.current,
      start: "40% top",
      end: "100% top",
      toggleClass: { className: "show", targets: ".Actor-IndexBox" },
    });

    gsap.fromTo(
      ".Focus-EffectBox",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: IndexRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      }
    );
  });

  const SingerData = IndexData.filter((item) => item.type === "Singer");
  const ActorData = IndexData.filter((item) => item.type === "Actor");

  return (
    <div className='AboutIndex-container' ref={IndexRef}>
      <div className='AboutIU-IndexList'>
        <SingerIndex infoData={SingerData} indexRef={IndexRef} gsap={gsap} />
        <ActorIndex infoData={ActorData} indexRef={IndexRef} gsap={gsap} />
        <div className='Scroll-Down'>
          <h2>scroll</h2>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutIndex;
