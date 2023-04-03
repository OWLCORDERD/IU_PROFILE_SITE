import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../assets/styles/Register.css";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducer/userSlice";

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    userId: "",
    userPw: "",
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg]);

  const onChange = (e) => {
    const { name, value } = e.target;
    const nextLoginInputs = { ...loginInputs, [name]: value };
    setLoginInputs(nextLoginInputs);
  };

  const IdRef = useRef(null);
  const PwRef = useRef(null);

  const LoginFunc = (event) => {
    event.preventDefault();

    if (loginInputs.userId === "") {
      alert("아이디를 입력해주세요.");
      IdRef.current.focus();
    } else if (loginInputs.userPw === "") {
      alert("패스워드를 입력해주세요.");
      PwRef.current.focus();
    } else {
      let body = {
        email: loginInputs.userId,
        password: loginInputs.userPw,
      };
      axios.post("http://localhost:3080/Login", body).then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          console.log("로그인");
          dispatch(loginUser(res.data.userInfo));
          setMsg("");
        }
        if (res.data.code === 400) {
          setMsg("ID, Password가 비어있습니다.");
        }
        if (res.data.code === 401) {
          setMsg("존재하지 않는 ID입니다.");
        }
        if (res.data.code === 402) {
          setMsg("Password가 틀립니다.");
        }
      });
    }
  };

  return (
    <div className="Login-container">
      <div className="Login-Form">
        <div className="Email-Input">
          <input
            type="text"
            name="userId"
            placeholder="아이디를 입력해주세요."
            ref={IdRef}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="Password-Input">
          <input
            type="password"
            name="userPw"
            ref={PwRef}
            placeholder="패스워드를 입력해주세요."
            onChange={(e) => onChange(e)}
          />
        </div>

        <button
          className="SignIn-button"
          onClick={(event) => LoginFunc(event)}
          disabled={loading}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
