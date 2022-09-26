import styled from "styled-components";
<<<<<<< HEAD

function SnsLogin() {
  return (
    <SnsLoginContainer>
      <h3>SNS 로그인</h3>
=======
import { useLocation } from "react-router-dom";

function SnsLogin() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <SnsLoginContainer>
      <h3>SNS {path === "/login" ? "로그인" : "회원가입"}</h3>
>>>>>>> main
      <div>
        <div className="sns_login_btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1920px-Google_%22G%22_Logo.svg.png"
            alt="google logo"
          ></img>
<<<<<<< HEAD
          <div> 구글 계정으로 로그인</div>
=======
          <div> 구글 계정으로 {path === "/login" ? "로그인" : "계속하기"}</div>
>>>>>>> main
        </div>
      </div>
      <div className="sns_login_btn" id="naver">
        <img
          src="https://w.namu.la/s/cfcd8d54c4668ce62a73401ad97535020da5fa40d9b3ac668f465994f449dcf42e9796fba45e11f033d072c61ec317263b60b9d25ceb29e4f2e570bd8ce06db21a66a0aacb02cb7b8af797f29a4dc583407bd1388d06a1623aed578c9341a09e"
          alt="google logo"
        ></img>
<<<<<<< HEAD
        <div> Naver 계정으로 로그인</div>
=======
        <div> Naver 계정으로 {path === "/login" ? "로그인" : "계속하기"}</div>
>>>>>>> main
      </div>
      <div className="sns_login_btn" id="kakao">
        <img
          src="https://developers.kakao.com/tool/resource/static/img/button/kakaotalksharing/kakaotalk_sharing_btn_small.png"
          alt="google logo"
        ></img>
<<<<<<< HEAD
        <div> 카카오 계정으로 로그인</div>
=======
        <div> 카카오 계정으로 {path === "/login" ? "로그인" : "계속하기"}</div>
>>>>>>> main
      </div>
    </SnsLoginContainer>
  );
}
export default SnsLogin;

<<<<<<< HEAD
const SnsLoginContainer = styled.section`
=======
export const SnsLoginContainer = styled.section`
>>>>>>> main
  width: 80%;
  padding: 10px 20px;

  .sns_login_btn {
    display: flex;
    align-items: center;
    padding: 0 40px;
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 10rem;
    text-align: center;
    cursor: pointer;
    height: 40px;
    font-size: 14px;
    margin-bottom: 3px;
  }

  a {
    text-decoration-line: none;
    color: inherit;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  #naver {
    background-color: #19ce60;
    color: white;
  }

  #kakao {
    background-color: #fee501;
  }
`;
