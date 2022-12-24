import React from 'react'
import { useState } from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
import YoutubeData from '../YoutubeData'
import {RiPlayCircleFill} from "react-icons/ri"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import UseFetch from "../hooks/UseFetch"

const GListItem = ({layoutId, filterCompony, itemClick, setItemClick}) => {

    const itemFilter = filterCompony.filter(filterCompony => filterCompony.title === layoutId.title);

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

    let increments = 0
    function Slide_Next(e){
      Page(increments += e);
    }
    function Slide_Back(e){
      Page(increments += e);
    }

    function Page(e){
      let i;

      const Slide = document.querySelectorAll('#mapItemBox-item')
      const SlideButton = document.querySelector('.control-next')
      let ControlCount = document.querySelector('.control-page h1')

      if(e < 9){
        let number = e;

        ControlCount.innerHTML = `${number}/8`
      }
      
      if(e > 8){
        let Renumber = 1;

        ControlCount.innerHTML = `${Renumber}/8`
      }


      if(e > Slide.length){
        increments = 1
      }

      if(e < 1){
        increments = Slide.length
      }

      for(i = 0; i < Slide.length; i++){
        Slide[i].classList.remove('active');
      }
      Slide[increments-1].classList.toggle('active');
    }

    const CommentDB = UseFetch('http://localhost:3001/Comment');

    const [postData, setPostData] = useState({
      name : "",
      date : "",
      text : ""
    })

    function ClickHandler(e){
      e.preventDefault();
      fetch('http://localhost:3001/Comment', {
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
          name : postData.name,
          date : postData.date,
          text : postData.text
        })
      }).then(()=> {
        console.log("add successfull");
      })
    }

    function textHandler(e){
      const newPostData = {...postData}
      newPostData[e.target.id] = e.target.value
      setPostData(newPostData)
    }

  return (
    <div className = "GListItem-container">
      <div className = "GListItem-header">
        <div className = "logo">
          <img src = {layoutId.logo}/>
        </div>
        <AiFillCloseCircle className = "close-btn" onClick={()=>setItemClick(!itemClick)}/>
      </div>

      <div className = "Video-contents">
        <div className = "video-title">
          <h1>{layoutId.title}</h1>
          <p>New Video</p>
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
      </div>

      <div className = "GListItem-mapBox">
        <div className = "Slider-control">
          <div className = "control-page">
            <h1>0/8</h1>
          </div>

          <div className = "control-button">
            <IoIosArrowBack className = "control-back" onClick = {()=>Slide_Back(-1)}/>
            <IoIosArrowForward className = "control-next" onClick= {()=>Slide_Next(1)}/>
          </div>
        </div>

        <div className = "mapBox-Slider">
          <div id = "mapItemBox-itemSign">
            <div className = "Sign-imgbox">
              <img src = {layoutId.img_url} alt = ""/>

                <div className = "Sign-title">
                  <h1>{layoutId.sub_title}</h1>
                  <p>{layoutId.Update}</p>
                </div>
            </div>
          </div>

            {itemFilter.map((item)=>{
            return(
              <div id = "mapItemBox-item" key={item.id}>
                <div className = "mapBox-imgbox">
                  <img src = {item.img_url} alt = ""/>
                </div>
              </div>
            )
            })}
        </div>
      </div>

      <div className = "GListItem-comment">

        <div className = "Comment-title">
          <h1>댓글</h1>
        </div>

        <div className = "Comment-box">
        <form className = "CommentCRA-box" onSubmit={(e)=>ClickHandler(e)}>
        <div className = "Comment-info">
        <input type = "text" className= "Name-InputBox" id = "name" onChange={(e)=>textHandler(e)} placeholder = "닉네임"/>
        <input type = "date" className= "Date-InputBox" id = "date" onChange={(e)=>textHandler(e)}/>
        </div>
        <input type = "text" className= "Comment-InputBox" id = "text" onChange={(e)=>textHandler(e)} placeholder = "댓글 추가"/>
        <div className = "Comment-PostBox">
          <button className = "post-button">작성</button>
          <button className = "Cancel-button">취소</button>
        </div>
        </form>

        <div className = "CommentView-box">
        {CommentDB.map((item)=>{
        return(
          <div className = "CommentView-item" key={item.id}>
            <div className = "CommentView-info">
              <h1>{item.name}</h1>
              <p>{item.date}</p>
            </div>
            <div className = "CommentView-textBox">
              <h1>{item.text}</h1>
            </div>
          </div>
        )
        })}
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default GListItem