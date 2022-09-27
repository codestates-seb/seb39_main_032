import styled from "styled-components";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Wishlist() {
  const [isLike, setIsLike] = useState(false);
  const [likeScore, setLikeScore] = useState(2);

  const handleLikeClick = () => {
    setIsLike(!isLike);
    if (isLike === true) {
      if (likeScore > 0) {
        setLikeScore(likeScore - 1);
      }
    } else {
      setLikeScore(likeScore + 1);
    }
  };

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
