import styled from "styled-components";
import axios from "axios";

function MyWishlist({ state }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");

  const likeHandler = () => {
    axios
      .post(
        `${API_URL}/api/wishes`,
        { boardId: state.boardId },
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((res) => console.log(res), window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <MyWishlistContainer>
      <div className="my_wishlist">
        <div className="my_wishlist_name">{state.boardName}</div>
        <div className="my_wishlist_btn delte" onClick={likeHandler}>
          삭제
        </div>
      </div>
    </MyWishlistContainer>
  );
}

export default MyWishlist;

const MyWishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #my_wishlist_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    padding: 10px;
  }

  .my_wishlist {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    width: 750px;
    height: 35px;
    padding: 7px;

    .my_wishlist_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }
  }
`;
