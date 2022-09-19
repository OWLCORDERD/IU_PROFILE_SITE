import React, {useState} from 'react'
import './magazine.css'
import Data from "../ImageData.json"
import Popup from "../Popup/Popup"
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const Magazine = () => {

  const [filter, onFilter] = useState("#vogue");

  const [popup, setPopup] = useState(false);

  const [layoutId,setlayoutId] = useState(null);

  const poper = (id) =>{
    if(popup===false){
      setlayoutId(id);
      setPopup(!popup);
    }else{
      setPopup(!popup);
      setlayoutId(null);
    }
  }

  return (
    <div className = "magazine-container">

        <div className = "magazine-title">
          <h1>2022 NEW IU MAGAZINE</h1>
        </div>

        <div className = "magazine-box">

        <div className = "magazine-filter">
          <a href = "#VOGUE" onClick={()=>onFilter("#vogue")} className = {filter === "#vogue" ? "active" : ''}>VOGUE</a>
          <a href = "#MARIE CLAIRE" onClick={()=>onFilter("#MARIE CLAIRE")} className = {filter === "#MARIE CLAIRE" ? "active" : ''}>MARIE CLAIRE</a>
        </div>

        <AnimateSharedLayout>
        <div id = "magazine-imageBox" className={filter === "#vogue" ? "active" : ''}>

          {Data.VogueData.map((item) => {
            return(
          <div className = "magazine-item">
          <img src = {item.img_url} alt = "" layoutId = {item.id}/>
          <div className = "magazine-detail">
            <img src = {item.title} alt = ""/>
            <input type = "submit" value = "VIEW MORE" className= "View_button"  onClick={()=> poper(item.id)}/>
          </div>
          </div>
            )
          })}
        
          </div>
          <AnimatePresence>
            {popup&&<Popup poper = {poper} layoutId = {layoutId}/>}
            </AnimatePresence>

          </AnimateSharedLayout>

          
        <div id = "magazine-imageBox" className={filter === "#MARIE CLAIRE" ? "active" : ''}>

          {Data.MarieDATA.map((item) => {
            return(
              <div className = "magazine-item">
              <img src = {item.img_url} alt = ""/>
              </div>
            )
          })}

          </div>

          </div>

    </div>
  )
}

export default Magazine