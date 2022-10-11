import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../../widgets/SubmitBtn";
import axios from "axios";
// import {
//   getAccessToken,
//   setAccessToken,
//   setRefreshToken,
// } from "../../../storage/Cookie";

function BasicLogin() {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    memberPw: "",
  });

  const loginHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/login/jwt`, loginInfo)
      .then((res) => {
        localStorage.setItem("accessToken", res.headers.authorization);

        // 리프레쉬 토큰 쿠키 저장.
        // setRefreshToken(res.cookie);

        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        setLoginInfo({
          email: "",
          memberPw: "",
        });
        if (err.response.status === 401) {
          alert("이메일주소 또는 비밀번호가 정확하지 않습니다");
        } else {
          console.log(err);
        }
      });

    // axios
    //   .get("/api/login", {
    //     headers: {
    //       Authorization: accessToken,
    //     },
    //   })
    //   .then((res) => {
    //     dispatch(setUserInfo(res.data.data));
    //     navigate(`/main`);
    //   })
    //   .catch((err) => console.log("로그인 실패 " + err));
  };

  return (
    <BasicLoginContainer>
      <h3>회원 로그인</h3>
      <form onSubmit={submitHandler}>
        <div className="user_info">
          <Icon icon="ic:baseline-perm-identity" className="login_icon" />
          <input
            type="email"
            placeholder="이메일주소"
            onChange={loginHandler("email")}
          ></input>
        </div>
        <div className="user_info">
          <Icon icon="ri:lock-password-line" className="login_icon" />
          <input
            autoComplete="on"
            type="password"
            placeholder="비밀번호"
            onChange={loginHandler("memberPw")}
          ></input>
        </div>
        <SubmitBtn type="submit" />
      </form>
      <div id="sub_menu">
        {/* todo : */}
        {/* <span className="sub_menu">비밀번호 찾기</span>
        <span className="sub_menu">계정 찾기</span> */}
        <a href="/signup">
          <span className="sub_menu">회원가입</span>
        </a>
      </div>
    </BasicLoginContainer>
  );
}
export default BasicLogin;

export const BasicLoginContainer = styled.section`
  width: 80%;
  padding: 20px 20px;

  .user_info {
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
    ::placeholder {
      font-size: smaller;
    }
  }

  #sub_menu {
    display: flex;
    justify-content: center;
    font-size: 7px;
    padding: 3px 5px 0 5px;
    cursor: pointer;
  }

  .sub_menu {
    display: flex;
    justify-content: center;
    font-size: 7px;
    margin: 3px 7px 0 7px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    :visited {
      color: black;
    }
  }

  p {
    font-size: smaller;
    margin-bottom: 5px;
  }

  .pwd_check {
    color: red;
    font-size: 11px;
    margin-left: 30px;
    height: 15px;
  }
`;
