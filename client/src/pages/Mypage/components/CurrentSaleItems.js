import styled from "styled-components";
import TitleHeader from "../../../components/TitleHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function CurrentSaleItems({ hasItems }) {
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const state = useSelector((state) => state.myItemListReducer);
  let itemsOnSale = state.filter((item, idx) => item.boardStatus === "판매중");

  // 삭제 버튼
  const deleteHandler = (e) => {
    const boardId = e.target.id;

    axios
      .delete(`/api/boards/${boardId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  // 마감 버튼 todo
  const [itemInfo, setItemInfo] = useState({});
  const [newInfo, setNewInfo] = useState(itemInfo);

  const soldOutHandler = (e) => {
    const boardId = e.target.id;

    axios
      .patch(`/api/boards/soldOut/${boardId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => console.log(res), window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <CurrentSaleItemsContainer>
      <TitleHeader title={"현재 판매 중인 상품"} />
      <Wrapper>
        {hasItems
          ? itemsOnSale.map((item, idx) => {
              return (
                <div className="cur_selling_item">
                  <div className="cur_selling_item_name">{item.itemName}</div>

                  <div className="menu">
                    <div
                      className="cur_selling_item_btn delte"
                      id={item.boardId}
                      onClick={deleteHandler}
                    >
                      삭제
                    </div>
                    <button
                      className="cur_selling_item_btn finish"
                      id={item.boardId}
                      onClick={soldOutHandler}
                    >
                      마감
                    </button>
                  </div>
                </div>
              );
            })
          : "판매중인 상품이 없습니다"}
      </Wrapper>
    </CurrentSaleItemsContainer>
  );
}

export default CurrentSaleItems;

const CurrentSaleItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.section`
  border: 1px solid rgba(170, 170, 170, 1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 780px;

  .menu {
    display: flex;
  }

  .cur_selling_item {
    display: flex;
    border-bottom: 1px solid;
    height: 35px;
    padding: 7px;
    justify-content: space-between;

    .cur_selling_item_name {
      width: 80%;
      display: flex;
    }

    .cur_selling_item_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }

    button {
      height: 21px;
      font-size: smaller;
      font-weight: 700;
      border: none;
      border-radius: 0.2rem;
      padding-bottom: 3px;

      :hover {
        color: white;
        background-color: red;
      }
    }
  }
`;
