import React, { useState, useEffect } from "react";
import "../../assets/styles/Register.css";
import logo from "../../assets/image/logo/I-YOU-unscreen.gif";
import { useRef } from "react";

const Join = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userPw: "",
    userName: "",
  });
  const [notAllowed, setNotAllowed] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const IdRef = useRef(null);
  const PwRef = useRef(null);
  const NameRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    const afterInputs = { ...inputs, [name]: value };
    setInputs(afterInputs);

    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (reg.test(inputs.userPw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }

    if (inputs.userId.length > 0 && inputs.userId.includes("@")) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }

    if (inputs.userName.length > 0) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  useEffect(() => {
    if (idValid && pwValid && nameValid) {
      setNotAllowed(false);
      return;
    }

    console.log(idValid, pwValid, nameValid);
    setNotAllowed(true);
  }, [idValid, pwValid, nameValid]);

  const signIn = (event) => {
    event.preventDefault();

    if (inputs.userId === "") {
      alert("이메일을 입력해주세요.");
      IdRef.current.focus();
      return;
    } else if (inputs.userPw === "") {
      alert("패스워드를 입력해주세요.");
      PwRef.current.focus();
      return;
    } else if (inputs.userName === "") {
      alert("닉네임을 입력해주세요.");
      NameRef.current.focus();
      return;
    } else {
      fetch("http://localhost:3080/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputs.userId,
          password: inputs.userPw,
          name: inputs.userName,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data !== "") {
            window.location.replace("/Gallary");
          } else {
            alert("회원가입에 실패하였습니다.");
          }
        });
    }
  };
  return (
    <div className='Join-container'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div className='Join-Form'>
        <div className='Email-Input'>
          <input
            type='text'
            name='userId'
            onChange={(e) => onChange(e)}
            placeholder='이메일을 입력해주세요.'
            id='userId'
            ref={IdRef}
          />
          {idValid === true ? null : (
            <p className='Warning-txt'>이메일 형식에 맞춰 입력해주세요</p>
          )}
        </div>

        <div className='Password-Input'>
          <input
            type='password'
            name='userPw'
            onChange={(e) => onChange(e)}
            placeholder='비밀번호를 입력해주세요.'
            id='userPw'
            ref={PwRef}
          />
          {pwValid === true ? null : (
            <p className='Warning-txt'>
              비밀번호는 8자 이상, 숫자/대문자/소문자/특수문자를 모두
              포함해야합니다.
            </p>
          )}
        </div>

        <div className='name-Input'>
          <input
            type='text'
            onChange={(e) => onChange(e)}
            placeholder='닉네임을 적어주세요.'
            id='userName'
            name='userName'
            ref={NameRef}
          />
          {nameValid === true ? null : (
            <p className='Warning-txt'>닉네임을 입력해주세요.</p>
          )}
        </div>

        <button
          className='SignUp-button'
          onClick={(event) => signIn(event)}
          disabled={notAllowed}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
