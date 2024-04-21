import React from "react";
import styled from "styled-components";

const PreviewItem = ({ item, productRef }) => {
  const Item = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 40rem;
    height: 45rem;

    .Gallary-imgBox {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 30rem;
      height: 35rem;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .Gallary-contentBox {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 30rem;
      height: 10rem;

      span {
        line-height: 3rem;
        font-size: 12px;
        font-weight: bold;
        font-family: var(--font-family);
        text-transform: uppercase;
      }

      h2 {
        line-height: 5rem;
        font-size: 1rem;
        font-family: var(--font-family-Noto);
      }
    }
  `;
  return (
    <Item key={item.id} ref={productRef} id='preview-item'>
      <div className='Gallary-imgBox'>
        <img src={item.img_url} alt='' />
      </div>

      <div className='Gallary-contentBox'>
        <span>{item.type}</span>
        <h2>{item.title}</h2>
      </div>
    </Item>
  );
};

export default PreviewItem;
