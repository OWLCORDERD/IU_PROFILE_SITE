import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "10rem",
        top: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",
        zIndex: "10",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <MdArrowBackIos fontSize='2.5rem' />
    </div>
  );
};

export default PrevArrow;
