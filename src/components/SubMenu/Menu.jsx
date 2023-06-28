import React from "react";

const Menu = ({ item }) => {
  const iframeSrc = `https://www.youtube.com/embed/${item?.youtubeID}?autoplay=1&amp;playlist=${item?.youtubeID}&loop=1&mute=1`;

  return (
    <div className='Menu-container'>
      <div className='Menu-imgBox'>
        <img src={item?.img_url} alt='menuImg' />
        <div className='Menu-videoBox'>
          <iframe
            src={iframeSrc}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className='Menu-contentBox'>
        <div className='Menu-subTitle'>
          <span>{item?.subTitle}</span>
        </div>

        <div className='Menu-title'>
          <h1>{item?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
