import React from "react";

const PreviewItem = ({ item, productRef }) => {
  return (
    <div className='Preview-item' key={item.id} ref={productRef}>
      <div className='Gallary-imgBox'>
        <img src={item.img_url} alt='' />
      </div>

      <div className='Gallary-contentBox'>
        <span>{item.type}</span>
        <h2>{item.title}</h2>
      </div>
    </div>
  );
};

export default PreviewItem;
