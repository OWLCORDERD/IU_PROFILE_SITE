import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "../../assets/styles/comment.css";

const Comment = ({ filterComment, commonData }) => {
  let totalDate = new Date();

  let year = totalDate.getFullYear();

  let month = totalDate.getMonth() + 1;

  let day = totalDate.getDate();

  const date = `${year}.0${month}.${day}`;

  const title = filterComment[0]?.title;

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
      const comment = {
        name,
        content,
        date,
        title,
      };

      axios
        .post("http://localhost:3080/comment", comment)
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
        />

        <input
          type='text'
          value={contents.content}
          onChange={(e) => contentChange(e)}
          className='text-content'
          placeholder='댓글 추가'
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
