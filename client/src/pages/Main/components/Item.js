import styled from "styled-components";
import ItemBox from "../../Newpost/components/ItemBox";
import { Icon } from "@iconify/react";
import Wishlist from "./Wishlist";

function Item({ id, items }) {
  let startTime = String(items[id].saleStartTime);
  let startHour = startTime.slice(11, 13);
  let startMinute = startTime.slice(14, 16);

  let endTime = String(items[id].saleEndTime);
  let endHour = endTime.slice(11, 13);
  let endMinute = endTime.slice(14, 16);

  // let startMinute = state[id].saleStartTime.getMinutes();
  // let endHour = state[id].saleEndTime.getHours();
  // let endMinute = state[id].saleEndTime.getMinutes();

  return (
    <ItemContainer>
      <ImgContainer>
        <a href="/:id">
          <img
            className="added_item_img"
            src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1594968820799l0.jpg"
            alt="image"
          />
        </a>
      </ImgContainer>
      <div className="added_item_wrapper">
        <ContentContainer>
          <a href="/:id">
            <ul>
              <li>
                <div className="store_name">[{items[id].marketName}]</div>
              </li>
              <li>
                <div className="item_title">{items[id].itemName}</div>
              </li>
              <li>
                <div>{items[id].itemSale}원</div>
              </li>
              <li>
                <div className="price">{items[id].itemPrice}원</div>
              </li>
              <li>
                <div className="sale_time">
                  할인시간 : {startHour}:{startMinute} ~ {endHour}:{endMinute}
                </div>
              </li>
              <li>
                <div>수량 : {items[id].itemAmount}개</div>
              </li>
            </ul>
          </a>
        </ContentContainer>
        <Wishlist />
      </div>
    </ItemContainer>
  );
}

export default Item;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* width: 230px; */
  /* border: 1px dotted; */
  margin: 20px 10px;

  ul {
    list-style: none;
    padding: 0 0;
    /* border: 2px solid; */
  }

  li {
    padding: 3px 0;
    /* font-family: "Noto Sans KR"; */
  }

  .store_name {
    font-size: larger;
    font-weight: 700;
    cursor: pointer;
  }

  .price {
    font-size: smaller;
    color: grey;
    text-decoration: line-through;
    margin-top: -6px;
  }

  .sale_time {
    color: red;
  }

  a {
    text-decoration: none;
    :focus {
    }
    :visited {
      color: black;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  /* border: 1px solid green; */
  margin: 5px;
  cursor: pointer;

  & .added_item_img {
    background-color: #d9d9d9;
    width: 190px;
    height: 190px;
    border-radius: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  cursor: pointer;
`;
