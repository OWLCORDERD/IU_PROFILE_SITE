import {React, useEffect , useState} from 'react'
import './gallary.css'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import UseFetch from '../hooks/UseFetch'

const GallaryBanner = () => {
  

  const gallaryData = UseFetch("http://localhost:3001/Gallary");

  const Datafilter = gallaryData.filter(gallaryData => gallaryData.date === "2022.10.31");

  const innerwidth = {
    width : "50%",
    height : "50%"
  };

  const animationback = {
    initial : {
      opacity : 0,
      width : innerwidth.width,
      height : innerwidth.height,
    },

    animate : {
      opacity : 1,
      width : ["50%", "100%", "100%"],
      height : ["50%", "50%", "100%"],
      transition : {
        duration : 1.5
      }
    }
  }

  const animationBox = {
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

  const animationItem = {
    initial : {
      opacity : 0
    },

    animate : {
      opacity : 1,
      transition : {
        duration : 1
      }
    }
  }

  return (
    <motion.div className = "Gallary-container" variants={animationBox} initial = "initial" animate = "animate">
      {Datafilter.map((item)=>{
        return(
        <div className = "Gallary-background">
          <motion.img src = {item.img_url} alt = "" variants={animationItem}/>
        </div>
        )
      })}

      {Datafilter.map((item)=>{
      return(
      <div className = "Gallary-content-box">
      <div className = "Gallary-contents">
        <motion.div className = "Gallary-subTitle" variants={animationItem}>
          <h1>{item.title}</h1>
        </motion.div>

        <motion.div className = "Gallary-title" variants={animationItem}>
          <h1>{item.Compony}</h1>
        </motion.div>
      </div>

      <motion.div className = "Gallary-buttons" variants={animationItem}>

      <Link to = "/GallaryList">
      <button className = "View-button">
        View More
      </button>
      </Link>
      
      </motion.div>
      </div>
      )
      })}

    </motion.div>
  )
}

export default GallaryBanner