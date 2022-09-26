import styled from "styled-components";
import { TitleHeader } from "../../Newpost/components/Firstselling";

const MyFavoriteStoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #my_fav_store_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    padding: 10px;
  }

  .my_fav_store {
    display: flex;
    border-bottom: 1px solid;
    width: 600px;
    height: 35px;
    padding: 7px;

    .my_fav_store_name {
      width: 92%;
    }

    .my_fav_store_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }
  }
`;

function MyFavoriteStores() {
  return (
    <MyFavoriteStoresContainer>
      <TitleHeader>
        <h2>나의 관심 가게</h2>
      </TitleHeader>
      <section id="my_fav_store_wrapper">
        <div className="my_fav_store">
          <div className="my_fav_store_name">달려라 떡볶이</div>
          <div className="my_fav_store_btn delte">삭제</div>
        </div>
        <div className="my_fav_store">
          <div className="my_fav_store_name">샐러디</div>
          <div className="my_fav_store_btn delte">삭제</div>
        </div>
      </section>
    </MyFavoriteStoresContainer>
  );
}

export default MyFavoriteStores;
