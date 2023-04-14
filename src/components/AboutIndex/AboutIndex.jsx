import React from "react";
import "../../assets/styles/AboutIndex.css";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SingerIndex from "./SingerIndex";
import axios from "axios";
import { useState } from "react";
import ActorIndex from "./ActorIndex";
import { useRef } from "react";

const AboutIndex = () => {
  const [IndexData, setIndexData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3080/Index")
      .then((res) => res.data)
      .then((data) => setIndexData(data));
  }, []);

  const SingerData = IndexData.filter((item) => item.id === "Singer");
  const ActorData = IndexData.filter((item) => item.id === "Actor");

  const IndexRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: IndexRef.current,
    start: "top top",
    end: "100% top",
    toggleClass: { className: "active", targets: ".AboutIU-IndexList" },
  });

  ScrollTrigger.create({
    trigger: IndexRef.current,
    start: "10% top",
    end: "100% top",
    toggleClass: { className: "hide", targets: ".navbar" },
  });

  ScrollTrigger.create({
    trigger: IndexRef.current,
    start: "top top",
    end: "40% top",
    toggleClass: { className: "show", targets: ".Singer-IndexBox" },
  });

  ScrollTrigger.create({
    trigger: IndexRef.current,
    start: "40% top",
    end: "100% top",
    toggleClass: { className: "show", targets: ".Actor-IndexBox" },
  });

  ScrollTrigger.create({
    trigger: IndexRef.current,
    start: "top top",
    end: "100% top",
    toggleClass: { className: "show", targets: ".Focus-EffectBox" },
  });

  return (
    <div className='AboutIndex-container' ref={IndexRef}>
      <div className='AboutIU-IndexList'>
        <SingerIndex infoData={SingerData} indexRef={IndexRef} />
        <ActorIndex infoData={ActorData} indexRef={IndexRef} />
        <div className='Scroll-Down'>
          <h2>scroll</h2>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutIndex;
