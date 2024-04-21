import React from "react";
import "assets/styles/gallaryPreview.css";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { commonService } from "components/service";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import PreviewItem from "./PreviewItem";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const GallaryPreview = () => {
  const [gallaryDB, setGallaryDB] = useState([]);
  const previewRef = useRef(null);
  const productRef = useRef(null);
  const component = useRef(null);

  useEffect(() => {
    commonService.getGallary().then((res) => setGallaryDB(res));
  }, []);

  const navigate = useNavigate();

  const mainSign = gallaryDB.filter((gallary) => gallary.video !== null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("#preview-item");

      if (productRef.current) {
        gsap.to(sections, {
          x: -productRef.current.clientWidth * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: previewRef.current,
            start: "top top",
            scrub: 1,
            end: () => "+=" + window.innerWidth * (sections.length - 1),
          },
        });
      }
      ScrollTrigger.create({
        trigger: previewRef.current,
        end: () => "+=" + window.innerWidth * (sections.length - 1),
        pin: true,
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className='GallaryPreview-container' ref={component}>
      <div className='Preview-wrap' ref={previewRef}>
        <div className='Preview-index'>
          <div className='Preview-titleBox'>
            <h2 className='sub-title'>Gallary</h2>
            <h1 className='Preview-title'>IU Official Megazine</h1>
          </div>

          <div className='Preview-info'>
            <p>아이유의 최신 공식 화보들을 확인해보세요.</p>
          </div>

          <div className='Gallary-button' onClick={() => navigate("/Gallary")}>
            <span>갤러리 보기</span>
          </div>
        </div>

        <div className='Preview-GallaryList'>
          {mainSign.map((sign) => {
            return <PreviewItem item={sign} productRef={productRef} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GallaryPreview;
