import React from 'react'
import './category.css';
import PART1 from '../../assets/video/introduce-video.mp4';
import PART2 from '../../assets/video/Celebrity.mp4';
import PART3 from '../../assets/video/화보 스케치 비하인드.mp4';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom'

const Category = () => {
    window.addEventListener('scroll', function(){
        let scroll = window.scrollY;
        const profile = document.querySelector('.CTG-Profile');
        const music = document.querySelector('.CTG-Music');
        const Gallary = document.querySelector('.CTG-Gallary');

        if(scroll > 1200 & scroll < 3000){
            profile.classList.add('active');
        }else{
            profile.classList.remove('active');
        }

        if(scroll > 2850 & scroll < 3500){
            music.classList.add('active');
        }else{
            music.classList.remove('active');
        }
 
        if(scroll > 3500){
            Gallary.classList.add('active');
        }else{
            Gallary.classList.remove('active');
        }
    })
    
  return (
    <div className = "Category-container">
        <div className = "Category-section">

            <div className= "CTGFixed-section">
                <div className = "CTG-Profile">
                <h1 className = "CTG-title">PROFILE</h1>
                <p className = "CTG-English">IYOU SITE, <br></br> We Always Update <br></br> About IU PROFILE.</p>
                <p className = "CTG-Korean">아이유 사이트에서는,<br></br> 아이유 프로필을 항시 업데이트합니다.</p>
                </div>

                <div className = "CTG-Music">
                <h1 className = "CTG-title">MUSIC</h1>
                <p className = "CTG-English">IYOU SITE, <br></br> We Always Update <br></br> About IU PROFILE.</p>
                <p className = "CTG-Korean">아이유 사이트에서는,<br></br> 아이유 프로필을 항시 업데이트합니다.</p>
                </div>

                <div className = "CTG-Gallary">
                <h1 className = "CTG-title">Gallary</h1>
                <p className = "CTG-English">IYOU SITE, <br></br> We Always Update <br></br> About IU PROFILE.</p>
                <p className = "CTG-Korean">아이유 사이트에서는,<br></br> 아이유 프로필을 항시 업데이트합니다.</p>
                </div>
            </div>

            <div className = "PART-section">
                <div className = "Profile-PART">
                    <video src = {PART1} muted loop autoPlay/>
                    <div className = "Profile-content">
                    <h1 className = "Profile-title">
                        PROFILE
                    </h1>
                    <Link to = "/Profile">
                    <button className = "Profile-button">
                        +VIEW MORE
                    </button>
                    </Link>
                    </div>
                </div>
                
                <div className = "Profile-PART">
                    <video src = {PART2} muted loop autoPlay/>
                    <div className = "Profile-content">
                    <h1 className = "Profile-title">
                        MUSIC
                    </h1>
                    <button className = "Profile-button">
                        +VIEW MORE
                    </button>
                    </div>
                </div>

                <div className = "Profile-PART">
                    <video src = {PART3} muted loop autoPlay/>
                    <div className = "Profile-content">
                    <h1 className = "Profile-title">
                        GALLARY
                    </h1>
                    <button className = "Profile-button">
                        +VIEW MORE
                    </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Category