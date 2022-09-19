import React, { useState, useEffect, useRef } from "react";
import Details from "./PlayerDetails";
import Controls from "./Playercontrol";

const Player = (props) => {
  const audioEl = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>NEXT SONG</strong>
      </p>
      <p>[{props.songs[props.nextSongIndex].title}]</p>
      <p>{props.songs[props.nextSongIndex].artist}</p>
    </div>
  );
};

export default Player;
