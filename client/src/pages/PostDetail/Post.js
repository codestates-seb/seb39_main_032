import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleHeader from "../../components/TitleHeader";
import { Icon } from "@iconify/react";
import ItemBox from "../Mypage/components/newpost/ItemBox";
import Review from "./components/Review";
import StoreLocation from "./components/Map";
import { useState } from "react";
import axios from "axios";

function Post() {
  const [isBookMark, setIsBookMark] = useState(false);

  const BookMarkHandler = () => {
    setIsBookMark(!isBookMark);
    // axios.post(); // 넣어주기
  };

  return (
    <>
      <Header />
      <PostContainer>
        <TitleHeader
          title={"달러라 떡볶이"}
          subtitle={"서울시 용산구 회나무로 21 / 02 1234 5678"}
          icon={
            isBookMark ? (
              <Icon
                icon="bi:bookmark-star-fill"
                className="bookmark_icon active"
              />
            ) : (
              <Icon icon="bi:bookmark-star" className="bookmark_icon" />
            )
          }
          func={BookMarkHandler}
        />
        <main>
          <section>
            <StoreLocation />
          </section>
          <section className="item_info">
            <h2>할인 품목</h2>
            <ItemBox />
          </section>
        </main>
        <Review />
      </PostContainer>
      <Footer />
    </>
  );
}

export default Post;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #map {
    background-color: grey;
    width: 400px;
    height: 300px;
  }

  .item_info {
    margin-top: 50px;
  }

  .active {
    color: #ff4a55;
  }
`;
