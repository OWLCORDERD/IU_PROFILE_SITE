import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../assets/styles/submenu.css";
import { commonService } from "../service";
import Menu from "./Menu";

const SubMenu = () => {
  const [subMenu, getSubMenu] = useState([]);

  useEffect(() => {
    commonService.getSubMenu().then((res) => getSubMenu(res));
  }, []);

  return (
    <div className='Submenu-container'>
      <div className='Submenu-titleBox'>
        <h1>acting activity</h1>
      </div>
      <div className='Submenu-wrap'>
        <ul className='Activity-list'>
          {subMenu.map((item) => {
            return <Menu item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
