import styled from "styled-components";

function MyFavoriteStores({ state }) {
  return (
    <MyFavoriteStoresContainer>
      <div className="my_fav_store">
        <div className="my_fav_store_name">{state.marketName}</div>
        <div className="my_fav_store_btn delte">삭제</div>
      </div>
    </MyFavoriteStoresContainer>
  );
}

export default MyFavoriteStores;

const MyFavoriteStoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .my_fav_store {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    width: 750px;
    height: 35px;
    padding: 7px;

    .my_fav_store_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }
  }
`;
