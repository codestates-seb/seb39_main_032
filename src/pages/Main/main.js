import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid;

  main {
    height: 80vh;
  }

  #category {
    margin-top: 20px;
    height: 25%;
    display: flex;
    justify-content: center;
    background-color: rgba(217, 217, 217, 0.58);
  }

  article {
    flex-wrap: wrap;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .food_category {
    background-color: white;
    border: 1px solid;
    border-radius: 1em;
    cursor: pointer;
    height: 50px;
    margin: 0 1%;
    padding: 1% 20px;
    font-size: 22px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 3px 3px grey;
    /* font-family: "Noto Sans KR", sans-serif; */
    font-family: "Do Hyeon";
  }

  #list {
    border: 5px solid green;
    height: 70%;
    margin: 0 15%;
  }

  #btn_newpost {
    display: flex;
    justify-content: flex-end;
    margin-right: 15%;

    > button {
      margin-top: 70vh;
      position: fixed;
      background-color: rgba(255, 74, 85, 1);
      color: white;
      font-weight: 700;
      height: 35px;
      padding: 8px;
      border-radius: 0.3rem;
    }
  }
`;

function Main() {
  let caterogies = [
    "분식",
    "치킨",
    "찌개",
    "중식",
    "일식",
    "양식",
    "아시안",
    "족발/보쌈",
    "반찬",
    "샐러드",
    "카페/디저트",
  ];

  return (
    <MainContainer>
      <Header />
      <main>
        <a href="/newpost" id="btn_newpost">
          <button>상품 등록하기</button>
        </a>
        <section id="category">
          <article>
            {caterogies.map((item, idx) => {
              return (
                <div value={idx} key={idx} className="food_category">
                  {item}
                </div>
              );
            })}
          </article>
        </section>
        <section id="list">
          <div>
            <span>진행 중</span>
            <span> | </span>
            <span>전체 보기</span>
          </div>
          <ul>
            <li>리스트1</li>
            <li>리스트2</li>
          </ul>
        </section>
      </main>
      <Footer />
    </MainContainer>
  );
}

export default Main;
