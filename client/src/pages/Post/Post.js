import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TitleHeader } from "../Newpost/components/Firstselling";
import { Icon } from "@iconify/react";
import ItemBox from "../Newpost/components/ItemBox";
import Review from "./components/Review";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .bookmark {
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-left: -400px;

    .bookmark_icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  #map {
    background-color: grey;
    width: 400px;
    height: 300px;
  }

  .item_info {
    margin-top: 50px;
  }
`;

function Post() {
  return (
    <>
      <Header />
      <PostContainer>
        <TitleHeader>
          <h2>달려라 떡볶이</h2>
          <span className="bookmark">
            <Icon icon="bi:bookmark-star" className="bookmark_icon" />
          </span>
          <div>서울시 용산구 회나무로 / 02 1234 5678</div>
        </TitleHeader>
        <main>
          <section>
            <div id="map">지도</div>
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
