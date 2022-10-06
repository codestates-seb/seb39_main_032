import styled from "styled-components";
import Search from "./Search";
import { useNavigate, useLocation } from "react-router-dom";
// import mapApi from "./mapApi";

function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("accessToken");

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    if (path !== "/") {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <HeaderContainer>
      <div id="title_nav">
        <nav>
          {authenticated ? (
            <>
              <a href="/mypage" className="btn_nav">
                마이페이지
              </a>
              <span className="btn_nav" onClick={logoutHandler}>
                로그아웃
              </span>
            </>
          ) : (
            <>
              <a href="/signup" className="btn_nav">
                회원가입
              </a>
              <a href="/login" className="btn_nav">
                로그인
              </a>
            </>
          )}
        </nav>
      </div>
      <h1>
        <a href="/" id="title">
          {" "}
          최후의 반찬
        </a>
      </h1>
      <Search />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #title_nav {
    height: 30px;
    display: flex;
    margin-left: 60%;
    margin-top: 10px;
    margin-bottom: -30px;
  }

  nav {
    display: flex;
    justify-content: center;
    width: 100px;
  }

  h1 {
    /* border: 1px solid black; */
    text-align: center;
    font-family: "Do Hyeon";
    font-size: 42px;
    color: rgba(255, 74, 85, 1);
  }

  .btn_nav {
    cursor: pointer;
    padding: 2px 5px;
    font-size: smaller;
    white-space: nowrap;
  }

  a {
    text-decoration-line: none;
    color: inherit;
  }
`;
