import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const NextArrow = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10rem",
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
      <MdArrowForwardIos fontSize='2.5rem' />
    </div>
  );
};

export default NextArrow;
