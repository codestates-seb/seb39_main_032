import styled from "styled-components";
import TitleHeader from "../../../components/TitleHeader";
import { Icon } from "@iconify/react";
import DeleteBtn from "../../../widgets/DeleteBtn";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ItemBox({ state }) {
  const location = useLocation();
  const path = location.pathname;

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

  const deleteHandler = (e) => {
    const boardId = state.boardId;

    axios
      .delete(`/api/boards/${boardId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ItemBoxContainer>
      <div className="added_item_wrapper">
        <div className="added_item_content">
          <ul>
            <li>
              <div className="item_title">{state.itemName}</div>
              <span className="category_tag">{state.foodCategory}</span>
            </li>
            <li>
              <div>수량 : {state.itemAmount}개</div>
            </li>
            <li>
              <div>{setSalePrice} 원</div>
            </li>
            <li>
              <div className="price">{setPrice}원</div>
            </li>
            <li>
              <div className="sale_time">
                할인시간 : {startHour}:{startMinute} ~ {endHour}:{endMinute}
              </div>
            </li>
          </ul>
        </div>
        <div className="added_item_img_wrapper">
          <img
            className="added_item_img"
            src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1594968820799l0.jpg"
            alt="image"
          />
        </div>
      </div>
      {path === "/myitems" ? (
        <DeleteBtn
          func={deleteHandler}
          marginLeft={"602px"}
          marginBottom={"15px"}
        />
      ) : null}
    </ItemBoxContainer>
  );
}

export default ItemBox;

export const ItemBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(170, 170, 170, 1);
  margin-bottom: 5px;

  .added_item_wrapper {
    display: flex;
    height: 230px;
    align-items: center;
    /* flex-direction: ${(props) => (props.path === "/" ? "column" : "row")}; */
  }

  .added_item_content {
    display: flex;
    align-items: center;
    width: 500px;
    height: 200px;
  }

  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 15px 20px;
    /* border: 1px solid red; */
  }

  li {
    padding: 6.5px 0;
    display: flex;
    margin-left: 15px;

    .item_title {
      font-size: larger;
      font-weight: 700;
    }

    .category_tag {
      font-size: smaller;
      margin-left: 10px;
      font-weight: 700;
      padding: 4px 8px;
      color: white;
      background-color: rgba(255, 74, 85, 1);
      border-radius: 1rem;
    }

    .price {
      font-size: smaller;
      color: grey;
      text-decoration: line-through;
      margin-top: -6px;
    }

    .sale_time {
      color: red;
      font-weight: 700;
      font-size: larger;
    }
  }

  .added_item_img_wrapper {
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    /* border: 1px solid green; */

    & .added_item_img {
      width: 190px;
      height: 180px;
      border-radius: 0.5rem;
    }
  }
`;
