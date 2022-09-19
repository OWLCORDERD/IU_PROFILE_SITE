import React from 'react'
import Data from "../ImageData.json"
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import './popup.css';

const Popup = ({poper, layoutId}) => {

  const singleimage = Data.VogueData.find((item)=>item.id === layoutId);
  return (
    <div className = "Popup_container">
      <div className = "Popup-close" onClick={()=>poper(false)}>
        <span></span>
        <span></span>
      </div>

      <div className = "Popup-gridContainer">

      <div className = "image-detail">
      <img src = {singleimage.img_url} alt = "" layoutId = {singleimage.id}/>
      </div>

      <div className = "content-detail">
        <img src = {singleimage.title} alt = ""/>
        <p>{singleimage.sub_title}</p>
      </div>

      </div>

    </div>
  )
}

export default Popup