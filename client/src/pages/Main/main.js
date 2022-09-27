import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lists from "./components/Lists";

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
    <>
      <Header />
      <MainContainer>
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
        <Lists />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Main;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  #category {
    margin-top: 10px;
    height: 150px;
    display: flex;
    justify-content: center;
    background-color: rgba(217, 217, 217, 0.58);
  }

  article {
    margin: 10px 0;
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
