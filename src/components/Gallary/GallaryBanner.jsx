import {React} from 'react'
import './gallary.css'
import {motion} from "framer-motion"
import UseFetch from '../hooks/UseFetch'

const GallaryBanner = () => {
  

  const gallaryData = UseFetch("http://localhost:4000/db");
  
  const latelyfilter = gallaryData.filter(gallaryData => gallaryData.sinceDate === '2022.10');

  const latelyCompony = latelyfilter.filter(latelyfilter => latelyfilter.Compony === 'VOGUE');


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
      {latelyCompony.map((item)=>{
        return(
        <div className = "Gallary-background" key={item.id}>
          <motion.img src = {item.img_url} alt = "" variants={animationItem}/>
        </div>
        )
      })}

      {latelyCompony.map((item)=>{
        return(
        <div className = "Gallary-content-box" key={item.id}>

          <div className = "Gallary-contents">
            <motion.div className = "Gallary-subTitle" variants={animationItem}>
              <h1>{item.title}</h1>
            </motion.div>

            <motion.div className = "Gallary-title" variants={animationItem}>
              <h1>{item.Compony}</h1>
            </motion.div>
          </div>

        </div>
      )
      })}
    </motion.div>
  )
}

export default GallaryBanner