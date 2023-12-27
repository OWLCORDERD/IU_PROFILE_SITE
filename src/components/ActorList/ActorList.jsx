import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "assets/styles/Actorlist.css";
import { commonService } from "../service";
import Menu from "./Menu";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/all";
import { useRef } from "react";
import "assets/styles/slick/slick.css";
import "assets/styles/slick/slick-theme.css";

const ActorList = () => {
  const [subMenu, getSubMenu] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    commonService.getSubMenu().then((res) => getSubMenu(res));
  }, []);

  return (
    <div className='Submenu-container' ref={menuRef}>
      <div className='Submenu-titleBox'>
        <h1 className='Submenu-title'>acting activity</h1>
        <p className='Submenu-info'>
          배우 이지은의 다양한 연기 활동 작품을 감상하실 수 있습니다.
        </p>
      </div>
      <div className='Submenu-wrap'>
        {subMenu.map((item) => {
          return <Menu item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ActorList;
