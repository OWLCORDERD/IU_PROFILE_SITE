import React from 'react'
import './gallary.css'
import {AiFillCloseCircle, AiOutlineConsoleSql} from "react-icons/ai";
import { useState } from 'react';
import GListItem from './GListItem';
import { useLocation } from 'react-router-dom';

const GListBox = () => {

    const location = useLocation();
    const test = location.state.Compony;
    const filterings = location.state.Filter;

    const filterCompony = filterings.filter(filterings=> filterings.Compony === test);
    const updateFilter = filterCompony.filter(filterCompony => filterCompony.Update === "2022.05");
    const updateFilter2 = filterCompony.filter(filterCompony => filterCompony.Update === "2022.10");

    const [itemClick, setItemClick] = useState(false);
    const [layoutId, setLayoutId] = useState(null);

    const popup = (id) =>{
        if(itemClick===false){
            setItemClick(!itemClick);
            setLayoutId(id);
        }else{
            setItemClick(!itemClick);
            setLayoutId(null);
        }
    }


  return (
    <div className = "GListBox-container">
        <header className = "GListBox-header">
            <img src = {filterCompony[0].img_url} alt = ""/>
            <div className = "GListBox-title">
            <h1>{filterCompony[0].Compony}</h1>
            <p>Scroll to View More the various pictorials</p>
            </div>

        </header>

        <div className = "GListBox-mapBox">
            
            {updateFilter.map((item)=> {
                return(
                <div className = "mapBox-item">

                    <div className = "mapBox-imgbox" onClick={()=>popup(item.title)}>
                        <img src = {item.img_url}/>
                        <h1>{item.Update}</h1>
                    </div>
                </div>
                )
            })}

        {updateFilter2.map((item)=> {
                return(
                <div className = "mapBox-item">

                    <div className = "mapBox-imgbox" onClick={()=>popup(item.title)}>
                        <img src = {item.img_url}/>
                        <h1>{item.Update}</h1>
                    </div>
                </div>
                )
        })}
        </div>

        {itemClick&&<GListItem filterings = {filterings} layoutId = {layoutId} itemClick = {itemClick} setItemClick = {setItemClick}/>}
    </div>
  )
}

export default GListBox