import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useState } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { userLogin } from "../../../actions/index";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn";
import axios from "axios";

function BasicLogin() {
=======
import { useDispatch, useSelector } from "react-redux";
import { storeToken, setUserInfo } from "../../../actions/index";
import { useNavigate, useLocation } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn";
import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../../../storage/Cookie";

function BasicLogin() {
  const location = useLocation();
  const path = location.pathname;
>>>>>>> main
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
<<<<<<< HEAD
    userPw: "",
  });

=======
    memberPw: "",
  });

  //
>>>>>>> main
  const loginHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

<<<<<<< HEAD
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
=======
  // const state = useSelector((state) => state.loginReducer);
  // const { accessToken } = state;

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(loginInfo);

    axios
      .post("/login", loginInfo)
      .then((res) => {
        dispatch(storeToken(res.headers.authorization));
        dispatch(setUserInfo(loginInfo));

        // 액세스 토큰 쿠키 저장 -> 저장되는지 테스트 필요.
        // setAccessToken(res.headers.authorization);

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
>>>>>>> main
  };

  return (
    <BasicLoginContainer>
      <h3>회원 로그인</h3>
      <form onSubmit={submitHandler}>
<<<<<<< HEAD
        <div className="login_info">
=======
        <div className="user_info">
>>>>>>> main
          <Icon icon="ic:baseline-perm-identity" className="login_icon" />
          <input
            type="email"
            placeholder="이메일주소"
            onChange={loginHandler("email")}
          ></input>
        </div>
<<<<<<< HEAD
        <div className="login_info">
=======
        <div className="user_info">
>>>>>>> main
          <Icon icon="ri:lock-password-line" className="login_icon" />
          <input
            autoComplete="on"
            type="password"
            placeholder="비밀번호"
<<<<<<< HEAD
            onChange={loginHandler("userPw")}
          ></input>
        </div>
        <SubmitBtn type="submit" title={"로 그 인"} />
=======
            onChange={loginHandler("memberPw")}
          ></input>
        </div>
        <SubmitBtn type="submit" />
>>>>>>> main
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

<<<<<<< HEAD
const BasicLoginContainer = styled.section`
  width: 80%;
  padding: 20px 20px;

  .login_info {
=======
export const BasicLoginContainer = styled.section`
  width: 80%;
  padding: 20px 20px;

  .user_info {
>>>>>>> main
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
<<<<<<< HEAD
=======
    ::placeholder {
      font-size: smaller;
    }
>>>>>>> main
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
<<<<<<< HEAD
=======

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
>>>>>>> main
`;
