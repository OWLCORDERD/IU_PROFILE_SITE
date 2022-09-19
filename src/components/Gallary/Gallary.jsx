import React from 'react'
import './gallary.css'
import data from "../ImageData.json"
import background from "../../assets/image/J.ASTINA/HIP SUMMER/HIP SUMMER COLLECTION-main.jpg"

const Gallary = () => {
  return (
    <div className = "Gallary-container">

    <div className = "Gallary-box">
      <div className = "Gallary-item">

      <div className = "Gallary-mainbox">

        <img src = {background} alt = ""/>

      <div className = "Gallary-title">
        <h1>2022 J.ESTINA X IU COLLECTION</h1>
      </div>


        <div className = "Gallary-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eUI0pqOYeic"
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>

        <div className = "Gallary-sub-title">
        <h1>HIP SUMMER</h1>
        <p>22 SUMMER COLLECTION</p>
        <button className = "JESTINA">VIEW MORE</button>
      </div>

      </div>
      </div>

      <div className = "Gallary-item">
        <div className = "Gallary-list">
          {data['J.ESTINA'].map((item)=> {
            return(
          <div className = "Gallary-sub-img">
           <img src = {item.img_url} alt = ""/>
          </div>
          )
          })}
          </div>
      </div>

    </div>


  </div>
  )
}

export default Gallary