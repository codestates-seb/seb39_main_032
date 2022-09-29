import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleHeader from "../../components/TitleHeader";
import { Icon } from "@iconify/react";
import ItemBox from "../Mypage/pages/Newpost/components/ItemBox";
import Review from "./components/Review";
import StoreLocation from "./components/Map";

function Post() {
  return (
    <>
      <Header />
      <PostContainer>
        <TitleHeader
          title={"달러라 떡볶이"}
          subtitle={"서울시 용산구 회나무로 21 / 02 1234 5678"}
          icon={<Icon icon="bi:bookmark-star" className="bookmark_icon" />}
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
`;
