import React, { useState, useRef, useEffect } from "react";
import "../../assets/styles/gallaryBoard.css";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { BsEye, BsFillHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import ScrollTop from "../hooks/ScrollTop";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";
import Swal from "sweetalert2";
import Comment from "./Comment";
import { commonService } from "../service";

const GallaryBoard = () => {
  const location = useLocation();

  const layoutId = location.state.layoutId;

  const [gallaryDB, setGallaryDB] = useState([]);

  const [boardComment, setBoardComment] = useState([]);

  useEffect(() => {
    reCommentDB();
    reGallaryDB();
  }, []);

  const reCommentDB = () => {
    commonService.getComment().then((res) => {
      setBoardComment(res);
    });
  };

  const reGallaryDB = () => {
    commonService.getGallary().then((res) => {
      setGallaryDB(res);
    });
  };

  const filterBoard = gallaryDB.filter((item) => item.id === layoutId);

  const filterComment = boardComment.filter(
    (item) => item.title === filterBoard[0]?.title
  );

  const BoardRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: BoardRef.current,
    start: "top top",
    end: "100% top",
    removeClass: { className: "hide", targets: ".navbar" },
  });

  const likeUp = async (likes) => {
    const total = likes + 1;

    try {
      await axios.patch(`https://iuprofile.site/likeUp`, {
        like: total,
        id: layoutId,
      });

      Swal.fire({
        icon: "success",
        title: "Thank`s for like",
        text: "좋아요는 개발자에게 큰 힘이 됩니다.",
      }).then((value) => {
        if (value) {
          reGallaryDB();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ScrollTop />
      <div className='GallaryBoard-container' ref={BoardRef}>
        <Navbar />
        {filterBoard.map((item) => {
          return (
            <div className='Board-Gallary'>
              <div className='Gallary-ImgBoard'>
                <div className='ImgBoard-background'>
                  <img src={item.img_url} alt='ImgBoard' />
                </div>

                <div className='Gallary-Img'>
                  <img src={item.img_url} alt='ImgBoard' />
                </div>
              </div>

              <div className='Gallary-InfoBoard'>
                <div className='Info-titleBox'>
                  <h2 className='Info-Compony'>{item.Compony}</h2>
                  <h1 className='Info-title'>{item.title}</h1>
                </div>

                <div className='Info-CountBox'>
                  <div className='View-CountItem'>
                    <BsEye />
                    <div className='count-View'>0</div>
                  </div>
                  <div className='Like-CountItem'>
                    <div
                      className='Like-button'
                      onClick={() => likeUp(item.likes)}
                    >
                      <BsFillHeartFill className='Like-icon' />
                      <div className='Like-content'>
                        <h2>이 이미지가 마음에 듭니다.</h2>
                      </div>
                    </div>
                    <div className='count-Like'>{item.likes}</div>
                  </div>
                  <div className='Comment-CountItem'>
                    <FaCommentAlt />
                    <div className='count-Comment'>{filterComment.length}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Comment
          filterBoard={filterBoard}
          filterComment={filterComment}
          commonData={reCommentDB}
        />
      </div>
    </>
  );
};

export default GallaryBoard;
