import React from "react";

const Menu = ({ item }) => {
  return (
    <div className='Product-card' key={item.id}>
      <div className='Product-imgBox'>
        <img src={item?.img_url} alt='menuImg' />

        <a
          href={item.infoSrc}
          target='_blank'
          className='view-Product'
          rel='noreferrer'
        >
          <span>예고편 보기</span>
        </a>
      </div>

      <div className='Product-contentBox'>
        <div className='Product-subTitle'>
          <span>{item?.subTitle}</span>
        </div>

        <div className='Product-info'>
          <h2>{item?.title}</h2>
          <p>{item?.infoTxt}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
