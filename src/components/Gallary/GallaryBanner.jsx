import {React} from 'react'
import './gallary.css'
import {motion} from "framer-motion"
import GallaryBannerImg from "../../assets/image/GallaryBanner.jpg"

const GallaryBanner = () => {

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
        
        <div className = "Gallary-background">
          <motion.img src = {GallaryBannerImg} alt = "" variants={animationItem}/>
        </div>

        <div className = "Gallary-content-box">

          <div className = "Gallary-contents">
            <motion.div className = "Gallary-subTitle" variants={animationItem}>
              <h1>IU Gallary</h1>
            </motion.div>

            <motion.div className = "Gallary-title" variants={animationItem}>
              <h1>New Megazine Scene</h1>
            </motion.div>
          </div>

        </div>
    </motion.div>
  )
}

export default GallaryBanner