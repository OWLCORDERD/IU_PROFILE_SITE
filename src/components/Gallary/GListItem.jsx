import React from 'react'
import UseFetch from '../hooks/UseFetch';
import './gallary.css'
import {AiFillCloseCircle} from "react-icons/ai";

const GListItem = ({layoutId, data, setItemClick, itemClick}) => {

    const filterCompony = data.filter(data=> data.Compony === layoutId);
    const filterBannerImg = filterCompony.find((item)=>item.id === 1);

  return (
    <div className = "GListItem-container">
        <header className = "GListItem-header">
            <img src = {filterCompony[0].img_url} alt = ""/>
            <div className = "GListItem-title">
            <h1>{layoutId}</h1>
            <p>Scroll to View More the various pictorials</p>
            </div>

            <AiFillCloseCircle className = "close-btn" onClick={()=>setItemClick(!itemClick)}/>

        </header>

        <div className = "GListItem-box">
            
            {filterCompony.map((item)=> {
                return(
                <div className = "GListItem-item">

                    <div className = "GListItem-imgbox">
                        <img src = {item.img_url}/>
                    </div>
                </div>
                )
        })}
        </div>

    </div>
  )
}

export default GListItem