import styled from "styled-components";
import { BasicLoginContainer } from "../../Login/components/BasicLogin";
import SubmitBtn from "../../../components/SubmitBtn";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function BasicSignup() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    pwd1: "",
    pwd2: "",
  });

  const inputHandler = (key) => (e) => {
    setUserLoginInfo({ ...userLoginInfo, [key]: e.target.value });
  };

  const signupHandler = (e) => {
    e.preventDefault();

    if (userLoginInfo.email.length < 6) {
      return alert("이메일 주소를 정확하게 입력해주세요");
    } else if (userLoginInfo.pwd1 !== userLoginInfo.pwd2) {
      return alert("비밀번호가 일치하지 않습니다");
    }

    axios
      .post("/api/signup", {
        email: userLoginInfo.email,
        memberPw: userLoginInfo.pwd1,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("입력하신 정보가 올바른지 다시 한번 확인해주세요");
      });
  };

  return (
    <BasicLoginContainer>
      <h3>회원가입</h3>
      <form onSubmit={signupHandler}>
        <p>이메일주소</p>
        <div className="user_info">
          <Icon icon="ic:baseline-alternate-email" className="login_icon" />
          <input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            onChange={inputHandler("email")}
          ></input>
        </div>
        <p>비밀번호</p>
        <div className="user_info">
          <Icon icon="fluent:lock-closed-16-regular" className="login_icon" />
          <input
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputHandler("pwd1")}
          ></input>
        </div>
        <p>비밀번호 재확인</p>
        <div className="user_info">
          <Icon icon="fluent:lock-closed-16-filled" className="login_icon" />
          <input
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            onChange={inputHandler("pwd2")}
          ></input>
        </div>
        <div className="pwd_check">
          {userLoginInfo.pwd1 !== userLoginInfo.pwd2
            ? "비밀번호가 일치하지 않습니다"
            : ""}
        </div>

        <SubmitBtn type="submit" />
      </form>
    </BasicLoginContainer>
  );
}

export default BasicSignup;
