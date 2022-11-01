import React from 'react'
import { useState } from 'react'
import UseFetch from "../hooks/UseFetch"
import {motion} from "framer-motion"
import GListItem from './GListItem'

const GallaryList = () => {

    const [toggleclick, setToggleClick] = useState(false);
    const [clickYear, setClickYear] = useState("#2022");
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

    const gallaryData = UseFetch("http://localhost:3001/Gallary");

    const gallarySign = UseFetch("http://localhost:3001/GallarySign");

    const filtering = gallaryData.filter(gallaryData => gallaryData.since === "2022");

    const GallaryAnibox = {
        initial : {
            opacity : 1
        },
        animate : {
            opacity : 1,
            transition : {
                staggerChildren : 0.5,
                delayChildren : 0.8
            }
        }
    }

    const GallaryAniList = {
        initial : {
            opacity : 0
        },
        animate : {
            opacity : 1,
            transition : {
                delay : 0.5,
                duration : 1
            }
        }
    }

    const GallaryAniItem = {
        initial : {
            opacity : 0
        },
        animate : {
            opacity : 1,
            transition : {
                delay : 0.2,
                duration : 1
            }
        }
    }

  return (
    <div className = "GList-container">
        <motion.header className = "GList-header" variants={GallaryAniItem} initial = "initial" animate = "animate">
            <div className = "GList-title">
            <h1>MEGAZINE</h1>
            <p>Scroll through the year selection box to check the various pictorials by year.</p>
            </div>

            <div className = "select-years-container">
            <ul className = "select-years" id = {clickYear === "#2022" ? "active" : ""} >
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>

                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020" onClick={()=>setClickYear("#2020") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021" onClick={()=>setClickYear("#2021") & setToggleClick(false)}></input>
                </li>
            </ul>

            <ul className = "select-years" id = {clickYear === "#2021" ? "active" : ""}>
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020" onClick={()=>setClickYear("#2020") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022" onClick={()=>setClickYear("#2022") & setToggleClick(false)}></input>
                </li>
            </ul>

            <ul className = "select-years" id = {clickYear === "#2020" ? "active" : ""}>
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021" onClick={()=>setClickYear("#2021") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022" onClick={()=>setClickYear("#2022") & setToggleClick(false)}></input>
                </li>
            </ul>
            </div>

        </motion.header>

        <motion.div className = "GallaryList-box" variants={GallaryAnibox} initial = "initial" animate = "animate">
            
            {gallarySign.map((item)=> {
                return(
                <motion.div className = "GallaryList-item" variants={GallaryAniList}>

                    <div className = "GallaryList-imgbox" onClick={()=>popup(item.Compony)}>
                        <img src = {item.img_url}/>

                        <div className = "imgbox-title">
                            <h1>{item.Compony}</h1>
                        </div>
                    </div>
                </motion.div>
                )
        })}
        </motion.div>

        {itemClick&&<GListItem layoutId = {layoutId} popup = {popup} data = {filtering} setItemClick = {setItemClick} itemClick = {itemClick}/>}

    </div>
  )
}

export default GallaryList