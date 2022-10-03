import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../../widgets/SubmitBtn";
import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../../../storage/Cookie";

function BasicLogin() {
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
      .post("/login/jwt", loginInfo)
      .then((res) => {
        localStorage.setItem("accessToken", res.headers.authorization);
        // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
        axios.defaults.headers.common["Authorization"] =
          res.headers.authorization;

        // 리프레쉬 토큰 쿠키 저장.
        // setRefreshToken(res.cookie);
        navigate("/");
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
        <span className="sub_menu">비밀번호 찾기</span>
        <span className="sub_menu">계정 찾기</span>
        <a href="/signup">
          <span className="signup_menu">회원가입</span>
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