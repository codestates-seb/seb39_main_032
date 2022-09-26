import styled from "styled-components";
import { TitleHeader } from "../../Newpost/components/Firstselling";

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
    width: 600px;
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

function MyWishlist() {
  return (
    <MyWishlistContainer>
      <TitleHeader>
        <h2>나의 관심 상품</h2>
      </TitleHeader>
      <section id="my_wishlist_wrapper">
        <div className="my_wishlist">
          <div className="my_wishlist_name">교촌 허니 콤보</div>
          <div className="my_wishlist_btn delte">삭제</div>
        </div>
        <div className="my_wishlist">
          <div className="my_wishlist_name">알리오 올리오 파스타</div>
          <div className="my_wishlist_btn delte">삭제</div>
        </div>
      </section>
    </MyWishlistContainer>
  );
}

export default MyWishlist;
