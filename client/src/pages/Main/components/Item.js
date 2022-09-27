import styled from "styled-components";
import ItemBox from "../../Newpost/components/ItemBox";
import { Icon } from "@iconify/react";

function Item() {
  return (
    <ItemContainer>
      <ImgContainer>
        <img
          className="added_item_img"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1594968820799l0.jpg"
          alt="image"
        />
      </ImgContainer>
      <div className="added_item_wrapper">
        <div className="added_item_content">
          <ul>
            <li>
              <div className="store_name">[달려라 떡볶이]</div>
            </li>
            <li>
              <div className="item_title">로제 떡볶이</div>
            </li>

            <li>
              <div>12,900원</div>
            </li>
            <li>
              <div className="price">13,900원</div>
            </li>
            <li>
              <div className="sale_time">할인시간 : 18:00 ~ 19:00</div>
            </li>
            <li>
              <div>수량 : 5개</div>
            </li>
            <li className="wishlist">
              <div>관심 4</div>
              <Icon icon="clarity:heart-line" className="wishlist_icon" />
            </li>
          </ul>
        </div>
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

  .wishlist {
    display: flex;
    justify-content: space-between;
    font-size: smaller;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .wishlist_icon {
    height: 25px;
    width: 25px;
    padding-bottom: 5px;
    cursor: pointer;
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

  & .added_item_img {
    background-color: #d9d9d9;
    width: 190px;
    height: 190px;
    border-radius: 0.5rem;
  }
`;
