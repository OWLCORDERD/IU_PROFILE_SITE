import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import "../../assets/styles/comment.css";

const Comment = ({ filterBoard, filterComment, commonData }) => {
  let totalDate = new Date();

  let year = totalDate.getFullYear();

  let month = totalDate.getMonth() + 1;

  let day = totalDate.getDate();

  const date = `${year}.0${month}.${day}`;

  const title = filterBoard[0]?.title;

  const nameRef = useRef(null);
  const contentRef = useRef(null);

  const [contents, setContents] = useState({
    name: "",
    content: "",
  });

  const nameChange = useCallback(
    (e) => {
      setContents({
        name: e.target.value,
        content: contents.content,
      });
    },
    [contents]
  );

  const contentChange = useCallback(
    (e) => {
      setContents({
        name: contents.name,
        content: e.target.value,
      });
    },
    [contents]
  );

  const commentSubmit = useCallback(
    (e) => {
      const name = contents.name;
      const content = contents.content;

      switch (name === "" || content === "") {
        case true:
          if (name === "") {
            alert("닉네임을 입력해주세요.");
            nameRef.current.focus();
          } else if (content === "") {
            alert("댓글을 입력해주세요.");
            contentRef.current.focus();
          }
          break;
        default:
          const comment = {
            name: name,
            content: content,
            date: date,
            title: title,
          };

          axios
            .post("http://lim5570.cafe24.com:4000/CommentInsert", comment)
            .then(function (response) {
              console.log(response);
              commonData();
            })
            .catch(function (err) {
              console.log(err);
            });

          setContents({
            name: "",
            content: "",
          });
      }

      e.preventDefault();
    },
    [contents, date, title, commonData]
  );

  return (
    <div className='Comment-container'>
      <div className='Comment-countBox'>
        <h1>Comments {filterComment.length}</h1>
      </div>

      <form className='InputComment-Form' onSubmit={(e) => commentSubmit(e)}>
        <input
          type='text'
          value={contents.name}
          onChange={(e) => nameChange(e)}
          className='text-name'
          placeholder='닉네임 입력'
          ref={nameRef}
        />

        <input
          type='text'
          value={contents.content}
          onChange={(e) => contentChange(e)}
          className='text-content'
          placeholder='댓글 추가'
          ref={contentRef}
        />

        <button type='submit' className='Comment-submit'>
          작성
        </button>
      </form>

      <div className='Comment-list'>
        {filterComment.map((item) => {
          return (
            <div className='Comment-item'>
              <div className='Comment-box'>
                <div className='Comment-user'>
                  <h2>{item.name}</h2>
                </div>

                <div className='Comment-content'>
                  <p>{item.content}</p>
                </div>
              </div>

              <div className='Comment-info'>
                <div className='notice-title'>{item.title}</div>

                <div className='date'>{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
