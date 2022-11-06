import React from 'react'
import { useState } from 'react';
import {AiFillCloseCircle, AiOutlineConsoleSql} from "react-icons/ai";
import YoutubeData from '../YoutubeData';
import {RiPlayCircleFill} from "react-icons/ri";

const GListItem = ({layoutId, filterings, itemClick, setItemClick}) => {

    const itemFilter = filterings.filter(filterings => filterings.title === layoutId.title);

    const FilterUrl = `https://www.googleapis.com/youtube/v3/videos?id=${layoutId.ytbID}&key=AIzaSyBxekmjRZk5vAzGjzmQ3jFKY9ay-kVtA_U&part=snippet,statistics`;

    const ytbData = YoutubeData(`${FilterUrl}`);

    const [layoutdata, setLayoutdata] = useState(null);

    const videoData = (item) => {
      if(layoutdata === null){
        setLayoutdata(item);
      }else{
        setLayoutdata(null);
      }
    }

    const iframeSrc = `https://www.youtube.com/embed/${layoutdata}?autoplay=1&mute=0&amp;loop=1;controls=0;playlist=${layoutdata}`;




  return (
    <div className = "GListItem-container">

      <div className = "GListItem-header">
        <AiFillCloseCircle className = "close-btn" onClick={()=>setItemClick(!itemClick)}/>        
      </div>

      <div className = "GListItem-Video">
      <div className = "Video-Image" id = {layoutdata === null ? 'active' : ''}>
        <img src = {layoutId.YtbThumbNail} />
        <RiPlayCircleFill className = "Video-playButton" onClick={()=>videoData(ytbData.items[0].id)}/>
      </div>

      <div className = "Video-iframe">
      <iframe width="560" height="315" src={iframeSrc} title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>

        <div className = "GListItem-mapBox">
        {itemFilter.map((item)=>{
          return(
            <div className = "mapBox-item">
              <div className = "mapBox-imgbox">
                <img src = {item.img_url} alt = ""/>
              </div>
            </div>
          )
          })}
        </div>
    </div>
  )
}

export default GListItem