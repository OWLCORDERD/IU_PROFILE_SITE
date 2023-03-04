import React from 'react'
import UseFetch from "../hooks/UseFetch"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import db from "../../db.json";
import { useState } from 'react';
import { useEffect } from 'react';

const GallaryList = () => {

    const [gallaryData, setGallaryData] = useState([]);
    const [signData, setSignData] = useState([]);

    useEffect(()=>{

    setGallaryData(db.Gallary);
    setSignData(db.GallarySign);

    }, [gallaryData, signData])

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

  return (
    <div className = "GList-container">

        <motion.div className = "GallaryList-box" variants={GallaryAnibox} initial = "initial" animate = "animate">
            
            {signData.map((item) => {
                return(
                <motion.div className = "GallaryList-item" variants={GallaryAniList} key = {item.id}>

                    <Link to = "/GallaryBox" state={{Compony : item.Compony ,Filter : gallaryData}}>
                    <div className = "GallaryList-imgbox">
                        <img src = {item.img_url}/>

                        <div className = "imgbox-title">
                            <h1>{item.Compony}</h1>
                        </div>
                    </div>
                    </Link>
                </motion.div>
                )
        })}
        </motion.div>

    </div>
  )
}

export default GallaryList