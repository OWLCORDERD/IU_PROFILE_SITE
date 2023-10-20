import React from "react";

const Menu = ({ item }) => {
  return (
    <li className='Menu-card'>
      <div className='Menu-imgBox'>
        <img src={item?.img_url} alt='menuImg' />
      </div>

      <div className='Menu-contentBox'>
        <div className='Menu-subTitle'>
          <span>{item?.subTitle}</span>
        </div>

        <div className='Menu-title'>
          <h1>{item?.title}</h1>
        </div>

        <div className='Menu-info'>
          <p>{item?.infoTxt}</p>
        </div>

        <a className='view-info' href={item?.infoSrc}>
          더 알아보기
        </a>
      </div>
    </li>
  );
};

export default Menu;
