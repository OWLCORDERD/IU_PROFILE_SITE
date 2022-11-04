import React from 'react'
import { useState } from 'react'
import UseFetch from "../hooks/UseFetch"
import {motion} from "framer-motion"
import GListBox from './GListBox'
import {Link} from "react-router-dom"

const GallaryList = () => {

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

        <motion.div className = "GallaryList-box" variants={GallaryAnibox} initial = "initial" animate = "animate">
            
            {gallarySign.map((item)=> {
                return(
                <motion.div className = "GallaryList-item" variants={GallaryAniList}>

                    <Link to = "/GallaryBox" state={{Compony : item.Compony ,Filter : filtering}}>
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