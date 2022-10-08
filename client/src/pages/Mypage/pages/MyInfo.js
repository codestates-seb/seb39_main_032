import styled from "styled-components";
import Header from "../../../components/Header";
import TitleHeader from "../../../components/TitleHeader";
import Footer from "../../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function MyInfo() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [email, setEmail] = useState("");

  // 이메일 주소 확인
  useEffect(() => {
    axios
      .get("/api/member/login/basic", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => setEmail(res.data.data.email))
      .catch((err) => console.log(err));
  }, []);

  // 회원 탈퇴
  const withdraw = (e) => {
    axios
      .delete("/withdrawal", {
        headers: {
          authorization: accessToken,
        },
      })
      .then(
        (res) => console.log(res),
        localStorage.removeItem("accessToken"),
        alert("회원 탈퇴가 정상적으로 처리되었습니다"),
        navigate("/")
      )
      .catch((err) => console.log(err));
  };

  //비번 변경
  const [userPwInfo, setUserPwInfo] = useState({
    pwd1: "",
    pwd2: "",
  });

  const inputHandler = (key) => (e) => {
    setUserPwInfo({ ...userPwInfo, [key]: e.target.value });
  };

  const pwEditHandler = (e) => {
    e.preventDefault();

    if (userPwInfo.pwd1 !== userPwInfo.pwd2) {
      return alert("비밀번호가 일치하지 않습니다");
    }

    axios
      .patch(
        "/api/member/login",
        {
          email: email,
          memberPw: userPwInfo.pwd1,
        },
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("비밀번호가 정상적으로 변경되었습니다");
      })
      .catch((err) => {
        console.log(err);
        alert("입력하신 비밀번호가 올바른지 다시 한번 확인해주세요");
      });
  };

  return (
    <Outer>
      <Header />
      <Container>
        <TitleHeader
          title={"개인정보 변경"}
          subtitle={"회원 탈퇴"}
          cursor={"pointer"}
          color={"red"}
          func={withdraw}
        />
        <div id="editPw">
          <h4>비밀번호 변경</h4>
          <form>
            <div id="pw_change_box">
              <input
                id="new_pw"
                type="password"
                placeholder="새 비밀번호"
                onChange={inputHandler("pwd1")}
              />
              <input
                id="new_pw_confirm"
                type="password"
                placeholder="새 비밀번호 재확인"
                onChange={inputHandler("pwd2")}
              />
            </div>
            <div className="pwd_check">
              {userPwInfo.pwd1 !== userPwInfo.pwd2
                ? "비밀번호가 일치하지 않습니다"
                : ""}
            </div>
            <button id="pw_edit_btn" type="submit" onClick={pwEditHandler}>
              수정
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </Outer>
  );
}

export default MyInfo;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  #editPw {
    border: 1px solid;
    padding: 22px;
  }

  #pw_change_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 0.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    margin-left: 10px;
  }

  #pw_change_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  #new_pw {
    border-bottom: none;
  }

  input {
    width: 300px;
    height: 40px;
    border: 1px solid rgba(170, 170, 170, 1);
  }

  #pw_edit_btn {
    font-weight: 700;
    margin-top: 5px;
    width: 70px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 0.2rem;
  }

  .pwd_check {
    color: red;
    font-size: 11px;
    height: 15px;
  }
`;
