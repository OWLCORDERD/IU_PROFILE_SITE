import React from 'react'
import {AiFillCloseCircle, AiOutlineConsoleSql} from "react-icons/ai";

const GListItem = ({layoutId, filterings, itemClick, setItemClick}) => {

    const itemFilter = filterings.filter(filterings => filterings.title === layoutId);
  return (
    <div className = "GListItem-container">

      <div className = "GListItem-header">
        <AiFillCloseCircle className = "close-btn" onClick={()=>setItemClick(!itemClick)}/>        
      </div>

        <div className = "GListItem-mapBox">
        {itemFilter.map((item)=>{
          return(
            <div className = "mapBox-item">
              <div className = "mapBox-imgbox">
                <img src = {item.img_url} alt = ""/>
              </div>
            </div>
          )
          })}
        </div>
    </div>
  )
}

export default GListItem