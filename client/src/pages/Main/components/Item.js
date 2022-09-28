import styled from "styled-components";
import ItemBox from "../../Newpost/components/ItemBox";
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";
import Wishlist from "./Wishlist";
import { useSelector } from "react-redux";

function Item() {
  const state = useSelector((state) => state.itemListReducer);

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
