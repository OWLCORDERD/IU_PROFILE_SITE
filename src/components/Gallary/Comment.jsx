import axios from "axios";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import "../../assets/styles/comment.css";

const Comment = ({ filterBoard, filterComment, commonData }) => {
  const title = filterBoard[0]?.title;

  const [finalDate, setFinalDate] = useState("");

  const [contents, setContents] = useState({
    name: "",
    content: "",
  });

  const nameChange = (e) => {
    setContents({
      name: e.target.value,
      content: contents.content,
    });
  };

  const contentChange = (e) => {
    setContents({
      name: contents.name,
      content: e.target.value,
    });
  };

  const totalDate = new Date();

  const year = totalDate.getFullYear();

  const month = totalDate.getMonth() + 1;

  const day = totalDate.getDate();

  useMemo(() => {
    if (String(month).length < 2) {
      setFinalDate(`${year}.0${month}.${day}`);
    } else if (String(day).length < 2) {
      setFinalDate(`${year}.${month}.0${day}`);
    } else {
      setFinalDate(`${year}.${month}.${day}`);
    }
  }, [day, month, year]);

  const commentSubmit = async (e) => {
    e.preventDefault();

    const name = contents.name;
    const content = contents.content;

    if (finalDate !== "") {
      const comment = {
        name: name,
        content: content,
        date: finalDate,
        title: title,
      };

      switch (name === "" || content === "") {
        case true:
          if (name === "") {
            alert("닉네임을 입력해주세요.");
          } else if (content === "") {
            alert("댓글을 입력해주세요.");
          }
          break;
        default:
          try {
            await axios.post(
              "https://api.iuprofile.site/CommentInsert",
              comment
            );
            commonData();
            setContents({
              name: "",
              content: "",
            });
          } catch (err) {
            console.log(err);
          }
      }
    }
  };

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
