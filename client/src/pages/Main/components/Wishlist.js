import styled from "styled-components";
import { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setMyLikeList,
  setLikeScore,
  addLikeScore,
  minusLikeScore,
} from "../../../actions";

function Wishlist({ likeScore, setLikeScore, boardId, state }) {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

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
      setIsLike(!isLike);
      if (isLike === true) {
        if (likeScore > 0) {
          setLikeScore(likeScore - 1);
          // 좋아요 취소(-)
          return axios
            .post("/api/wishes", {
              headers: {
                authorization: accessToken,
              },
              boardId: boardId,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }
      }
      // 좋아요 추가(+)
      else {
        setLikeScore(likeScore + 1);
        return axios
          .post("/api/wishes", {
            headers: {
              authorization: accessToken,
            },
            boardId: boardId,
          })
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
  );
}

export default Wishlist;

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
