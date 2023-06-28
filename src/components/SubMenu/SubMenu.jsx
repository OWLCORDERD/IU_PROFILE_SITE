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

  const columnFilter = subMenu.filter((item) => item.procession === "column");

  const rowFilter = subMenu.filter((item) => item.procession === "row");

  return (
    <div className='Submenu-container'>
      <div className='Submenu-titleBox'>
        <h1>acting activity</h1>
        <p>
          연기자 배우 이지은의 최신 영화, 드라마 작품들을 확인하실 수 있습니다.
        </p>
      </div>
      <div className='Submenu-wrap'>
        <div className='menu-ColumnBox'>
          <Menu key={columnFilter[0]?.id} item={columnFilter[0]} />
        </div>

        <div className='menu-RowBox'>
          <Menu key={rowFilter[0]?.id} item={rowFilter[0]} />
          <div className='row-ColumnBox'>
            <Menu key={rowFilter[1]?.id} item={rowFilter[1]} />
            <Menu key={rowFilter[2]?.id} item={rowFilter[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
