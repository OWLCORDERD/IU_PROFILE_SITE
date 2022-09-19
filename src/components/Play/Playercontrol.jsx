import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsPauseCircleFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
const Playercontrol = (props) => {
  return (
    <div className="control">
      <button className="skip-button" onClick={() => props.SkipSong(false)}>
        <BsFillPlayCircleFill l />
      </button>
      <button
        className="play"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <BsPauseCircleFill /> : <AiFillPlayCircle />}
      </button>
      <button className="skip-button" onClick={() => props.SkipSong(false)}>
        <BsFillSkipEndFill />
      </button>
    </div>
  );
};

export default Playercontrol;
