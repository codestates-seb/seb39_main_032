import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleHeader from "../../components/TitleHeader";
import { Icon } from "@iconify/react";
import ItemBox from "./components/ItemBox";
import Review from "./components/Review";
import StoreLocation from "./components/Map";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItemsList } from "../../actions";

function Post() {
  const state = useSelector((state) => state.itemListReducer);
  const dispatch = useDispatch();
  const [storeInfo, setStoreInfo] = useState({});
  // const [itemList, setItemList] = useState([]);
  const path = useLocation().pathname;
  const [isBookMark, setIsBookMark] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const BookMarkHandler = () => {
    setIsBookMark(!isBookMark);
    // axios.post(); // todo : 넣어주기
    console.log(storeInfo);
    console.log(state);
    console.log(reviewList);
  };

  const [isLoading, setIsLoading] = useState(true);

  const renderHandler = () => {
    return axios
      .get(`/api/markets/${path}`)
      .then((res) => {
        setStoreInfo(res.data.data);
        dispatch(setItemsList(res.data.data.boardList)); // main 페이지에서 사용하는 아이템 리스트 리듀서 재활용.
        setReviewList(res.data.data.reviewList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    renderHandler().then(() => {
      setIsLoading(false);
    });
  }, [storeInfo]);

  return (
    <>
      <Header />
      <PostContainer>
        <TitleHeader
          title={storeInfo.marketName}
          bookmarkCount={storeInfo.favoriteCount}
          subtitle={`${storeInfo.address} / ${storeInfo.phone} / `}
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
          icon2={
            <Icon icon="material-symbols:thumb-up-outline" id="thumb_up" />
          }
          func={BookMarkHandler}
        />
        <main>
          <section>
            <StoreLocation address={storeInfo.address} />
          </section>
          <section className="item_info">
            <h2>할인 품목</h2>
            {state.map((item, idx) => {
              return <ItemBox key={idx} id={idx} state={item} />;
            })}
          </section>
        </main>
        <Review reviewList={reviewList} marketId={storeInfo.marketId} />
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
    color: rgb(253, 220, 63);
  }
`;
