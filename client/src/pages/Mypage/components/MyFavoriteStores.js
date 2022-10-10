import styled from "styled-components";
import axios from "axios";

function MyFavoriteStores({ state }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");

  const BookMarkHandler = () => {
    axios
      .post(
        `${API_URL}/api/favorites`,
        { marketId: state.marketId },
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
    <MyFavoriteStoresContainer>
      <div className="my_fav_store">
        <div className="my_fav_store_name">{state.marketName}</div>
        <div className="my_fav_store_btn delte" onClick={BookMarkHandler}>
          삭제
        </div>
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
