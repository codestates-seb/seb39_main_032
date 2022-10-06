import styled from "styled-components";

function MyWishlist({ state }) {
  return (
    <MyWishlistContainer>
      <div className="my_wishlist">
        <div className="my_wishlist_name">{state.boardName}</div>
        <div className="my_wishlist_btn delte">삭제</div>
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
    border-bottom: 1px solid;
    width: 750px;
    height: 35px;
    padding: 7px;

    .my_wishlist_name {
      width: 92%;
    }

    .my_wishlist_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }
  }
`;
