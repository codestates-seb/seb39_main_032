import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLikeScore } from "../../../actions";
import axios from "axios";

function Item({ state }) {
  const dispatch = useDispatch();

  const [likeScore, setLikeScore] = useState(0); // 리듀서 사용해서 전역으로 처리해줘야 함.

  useEffect(() => {
    if (state.wishListCount) {
      return setLikeScore(state.wishListCount);
    }
  }, [state.wishListCount]);

  useEffect(() => {
    if (state.checkMyWish === 1) {
      return setIsLike(true);
    }
  }, [state.checkMyWish]);

  const boardId = state.boardId;

  let startTime = String(state.saleStartTime);
  let startHour = startTime.slice(11, 13);
  let startMinute = startTime.slice(14, 16);

  let endTime = String(state.saleEndTime);
  let endHour = endTime.slice(11, 13);
  let endMinute = endTime.slice(14, 16);

  let salePrice = String(state.itemSale);
  let SPhead = salePrice.slice(0, -3);
  let SPqueue = salePrice.slice(-3);
  let setSalePrice = SPhead.concat(",", SPqueue);

  let price = String(state.itemPrice);
  let head = price.slice(0, -3);
  let queue = price.slice(-3);
  let setPrice = head.concat(",", queue);

  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const mylikelist = useSelector((state) => state.mylikeListReducer);

  // 좋아요 버튼 작동 함수
  const [isLike, setIsLike] = useState(false);

  const handleLikeClick = () => {
    //로그인 안한 경우,
    if (!accessToken) {
      return alert("로그인 후 등록이 가능합니다");
    }
    //로그인 한 경우,
    else {
      console.log(accessToken);
      console.log(boardId);
      setIsLike(!isLike);
      if (isLike === true) {
        if (likeScore > 0) {
          setLikeScore(likeScore - 1);
          // 좋아요 취소(-)
          return axios
            .post(
              "/api/wishes",
              { boardId: boardId },
              {
                headers: {
                  authorization: accessToken,
                },
              }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }
      }
      // 좋아요 추가(+)
      else {
        setLikeScore(likeScore + 1);
        axios
          .post(
            "/api/wishes",
            { boardId: boardId },
            {
              headers: {
                authorization: accessToken,
              },
            }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    }
  };

  // 나의 Like 리스트 불러오기
  // const [hasLike, setHasLike] = useState(false);
  // const [myLike, setMyLike] = useState([]);

  // const getMyLike = () => {
  //   let filtered = mylikelist.filter((item, idx) => item.boardId === boardId);

  //   if (filtered.length === 1) {
  //     return setIsLike(true);
  //   } else {
  //     return setIsLike(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!accessToken) {
  //     return;
  //   } else {
  //     axios
  //       .get("/api/wishes/myWish?page=1&size=40", {
  //         headers: { authorization: accessToken },
  //       })
  //       .then((res) => {
  //         if (res.data.length === 0) {
  //           return;
  //         } else {
  //           setHasLike(true);
  //           dispatch(setMyLikeList(res.data));
  //           console.log(res.data);
  //           return getMyLike();
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [isLike]);

  return (
    <ItemContainer>
      {state.boardStatus === "품절" ? (
        <div id="done">
          <span>판매 완료</span>
        </div>
      ) : null}

      <ImgContainer>
        <a href={`/${state.marketId}`}>
          <img
            className="added_item_img"
            src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1594968820799l0.jpg"
            alt="image"
          />
        </a>
      </ImgContainer>
      <div className="added_item_wrapper">
        <ContentContainer>
          <a href={`/${state.marketId}`}>
            <ul>
              <li>
                <div className="store_name">{state.marketName}</div>
              </li>
              <li>
                <div className="item_title">{state.itemName}</div>
              </li>
              <li id="comparison">
                <span id="percent">
                  {Math.round(100 - (state.itemSale / state.itemPrice) * 100)}%
                </span>
                <div>{setSalePrice} 원</div>
              </li>
              <li>
                <div className="price">{setPrice} 원</div>
              </li>
              <li>
                <div className="sale_time">
                  할인시간 : {startHour}:{startMinute} ~ {endHour}:{endMinute}
                </div>
              </li>
              <li>
                <div>수량 : {state.itemAmount}개</div>
              </li>
            </ul>
          </a>
        </ContentContainer>
        <WishlistContainer>
          <div>관심 {likeScore}</div>
          {isLike ? (
            <Icon
              icon="clarity:heart-solid"
              className="wishlist_icon clicked"
              onClick={handleLikeClick}
            />
          ) : (
            <Icon
              icon="clarity:heart-line"
              className="wishlist_icon"
              onClick={handleLikeClick}
            />
          )}
        </WishlistContainer>
      </div>
    </ItemContainer>
  );
}

export default Item;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 230px; */
  margin: 20px 10px;

  #done {
    /* text-align: center; */
    font-size: 40px;
    font-weight: 700;
    width: 100%;
    height: 450px;
    /* border: 1px solid; */
    margin-bottom: -450px;
    background-color: rgba(170, 170, 170, 1);
    z-index: 1;
    opacity: 0.87;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0 0;
    /* border: 2px solid; */
  }

  li {
    padding: 3px 0;
    /* font-family: "Noto Sans KR"; */
  }

  #comparison {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  #percent {
    margin-right: 5px;
    font-size: smaller;
    color: #fa622f;
    font-weight: 700;
  }

  .store_name {
    font-size: larger;
    font-weight: 700;
    cursor: pointer;
  }

  .price {
    font-size: smaller;
    color: grey;
    text-decoration: line-through;
    margin-top: -6px;
  }

  .sale_time {
    color: red;
    margin-top: 10px;
    font-weight: 700;
  }

  a {
    color: black;
    text-decoration: none;
    :focus {
    }
    :visited {
      color: black;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  /* border: 1px solid green; */
  margin: 5px;
  cursor: pointer;

  & .added_item_img {
    background-color: #d9d9d9;
    width: 190px;
    height: 190px;
    border-radius: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  cursor: pointer;
`;

const WishlistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: smaller;
  margin-top: 20px;
  margin-bottom: 8px;

  .wishlist_icon {
    height: 25px;
    width: 25px;
    padding-bottom: 5px;
    cursor: pointer;
  }

  .clicked {
    color: red;
  }
`;
