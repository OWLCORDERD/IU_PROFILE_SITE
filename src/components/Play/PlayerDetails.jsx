import React from "react";
import CD from "../../assets/image/Album/Audio_CD.png";

const PlayerDetails = (props) => {
  return (
    <div className="c-player-details">
      <div className="details-CD">
        <img src={CD} alt="" />
      </div>
      <div className="details-img">
        <img src={props.song.img_src} alt="" />
      </div>
      <h1 className="details-title">{props.song.title}</h1>
      <h2 className="details-artist">{props.song.artist}</h2>
    </div>
  );
};

export default PlayerDetails;
