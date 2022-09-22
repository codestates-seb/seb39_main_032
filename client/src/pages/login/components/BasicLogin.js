import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../actions/index";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn";
import axios from "axios";

function BasicLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    userPw: "",
  });

  const loginHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(loginInfo);

    axios.post("api/jwt", loginInfo).then((res) => {
      //   dispatch;
    });

    dispatch(userLogin(loginInfo));

    //  dispatch(userLogin(loginInfo)).then((res) => {
    //   if (res.payload.loginSuccess) {
    //     navigate("/");
    //   } else {
    //     alert("아이디 또는 비밀번호를 확인해주세요");
    //   }
    // });
  };

  return (
    <BasicLoginContainer>
      <h3>회원 로그인</h3>
      <form onSubmit={submitHandler}>
        <div className="login_info">
          <Icon icon="ic:baseline-perm-identity" className="login_icon" />
          <input
            type="email"
            placeholder="이메일주소"
            onChange={loginHandler("email")}
          ></input>
        </div>
        <div className="login_info">
          <Icon icon="ri:lock-password-line" className="login_icon" />
          <input
            autoComplete="on"
            type="password"
            placeholder="비밀번호"
            onChange={loginHandler("userPw")}
          ></input>
        </div>
        <SubmitBtn type="submit" title={"로 그 인"} />
      </form>
      <div id="sub_menu">
        {/* <span className="sub_menu">비밀번호 찾기</span>
        <span className="sub_menu">계정 찾기</span> */}
        <a href="/signup">
          <span className="signup_menu">회원가입</span>
        </a>
      </div>
    </BasicLoginContainer>
  );
}
export default BasicLogin;

const BasicLoginContainer = styled.section`
  width: 80%;
  padding: 20px 20px;

  .login_info {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid rgba(217, 217, 217, 1);
  }

  .login_icon {
    color: #aaaaaa;
    margin: 0 5px;
  }

  input {
    height: 37px;
    width: 88%;
    border: none;
    :focus {
      outline: none;
    }
  }

  #sub_menu {
    display: flex;
    justify-content: center;
    margin-top: 3px;
  }

  .signup_menu {
    font-size: 7px;
    cursor: pointer;
    /* padding: 0 10px; */
  }

  a {
    text-decoration: none;
  }
`;
