import React from 'react'
import UseFetch from '../hooks/UseFetch';
import './gallary.css'
import {AiFillCloseCircle} from "react-icons/ai";
import { useState } from 'react';
import GListItem from './GListItem';

const GListBox = ({layoutId, data, setItemClick, itemClick}) => {

    const filterCompony = data.filter(data=> data.Compony === layoutId);
    
    const updateFilter = filterCompony.filter(filterCompony => filterCompony.Update === "2022.05");

    const updateFilter2 = filterCompony.filter(filterCompony => filterCompony.Update === "2022.10");

    

    const [ItemPopupClick, setItemPopupClick] = useState(false);

    const [itemLayoutId, setitemLayoutId] = useState(null);

    console.log(itemLayoutId);

    const ItemPopup = (id) => {
        if(ItemPopupClick === false){
            setItemPopupClick(!ItemPopupClick)
            setitemLayoutId(id)
        }else{
            setItemPopupClick(!ItemPopupClick)
            setitemLayoutId(null)
        }
    }

  return (
    <div className = "GListBox-container">
        <header className = "GListBox-header">
            <img src = {filterCompony[0].img_url} alt = ""/>
            <div className = "GListBox-title">
            <h1>{layoutId}</h1>
            <p>Scroll to View More the various pictorials</p>
            </div>

            <AiFillCloseCircle className = "close-btn" onClick={()=>setItemClick(!itemClick)}/>

        </header>

        <div className = "GListBox-mapBox">
            
            {updateFilter.map((item)=> {
                return(
                <div className = "mapBox-item">

                    <div className = "mapBox-imgbox" onClick={()=>ItemPopup(item.title)}>
                        <img src = {item.img_url}/>
                        <h1>{item.Update}</h1>
                    </div>
                </div>
                )
            })}

        {updateFilter2.map((item)=> {
                return(
                <div className = "mapBox-item">

                    <div className = "mapBox-imgbox" onClick={()=>ItemPopup(item.title)}>
                        <img src = {item.img_url}/>
                        <h1>{item.Update}</h1>
                    </div>
                </div>
                )
        })}
        </div>

        {ItemPopupClick&&<GListItem itemLayoutId = {itemLayoutId} Gallarydb = {data}/>}
    </div>
  )
}

export default GListBox