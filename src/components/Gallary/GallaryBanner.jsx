import { React } from "react";
import "../../assets/styles/gallaryBanner.css";
import data from "../../db.json";
import { RiPlayCircleFill } from "react-icons/ri";
import { useState } from "react";

const GallaryBanner = () => {
  const NewFilter = data.Gallary.filter((item) => item.update === "New");

  const [iframeId, setIframeId] = useState(null);

  const videoPlay = () => {
    if (iframeId == null) {
      setIframeId(NewFilter[0].YtbID);
    } else {
      setIframeId(null);
    }
  };

  const NewIframe = `https://www.youtube.com/embed/${iframeId}?autoplay=1&mute=0&amp;loop=1;controls=0;playlist=${iframeId}`;

  return (
    <div className="Gallary-banner">
      <div className="Gallary-background">
        <div className="New-Megazine" id={iframeId == null ? "active" : ""}>
          <img src={NewFilter[0].YtbThumbNail} alt="" />
          <RiPlayCircleFill
            className="play-button"
            onClick={(e) => videoPlay(e)}
          />
        </div>

        <div className="Megazine-Video">
          <iframe
            width="560"
            height="315"
            src={NewIframe}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GallaryBanner;
