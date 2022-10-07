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
import { setBoardItemsList } from "../../actions";
import Loading from "../../components/Loading";

function Post() {
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["authorization"] = accessToken; // 여기서는 이렇게 지정해줘야 get요청으로 리뷰 리스트 불러올 때 올바르게 불러와짐.

  const state = useSelector((state) => state.boardItemListReducer);
  const dispatch = useDispatch();
  const [storeInfo, setStoreInfo] = useState({});
  // const [itemList, setItemList] = useState([]);
  const path = useLocation().pathname;
  let marketId = path.slice(1);
  const [isBookMark, setIsBookMark] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const BookMarkHandler = () => {
    if (!accessToken) {
      return alert("로그인 후 등록이 가능합니다");
    } else {
      setIsBookMark(!isBookMark);
      axios.post("/api/favorites", {
        headers: {
          authorization: accessToken,
        },
        marketId: marketId,
      });
    }
  };

  const renderHandler = async () => {
    await axios
      .get(`/api/markets${path}`)
      .then((res) => {
        dispatch(setBoardItemsList(res.data.data.boardList)); // main 페이지에서 사용하는 아이템 리스트 리듀서 재활용 -> 재활용하면 안됨.
        setStoreInfo(res.data.data);
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
  }, []); //async & await 같이 해줘야 함

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
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
