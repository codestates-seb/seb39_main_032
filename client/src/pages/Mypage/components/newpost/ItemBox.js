import styled from "styled-components";
import TitleHeader from "../../../../components/TitleHeader";
import { Icon } from "@iconify/react";

function ItemBox() {
  return (
    <ItemBoxContainer>
      <div className="added_item_wrapper">
        <div className="added_item_content">
          <ul>
            <li>
              <div className="item_title">로제 떡볶이</div>
              <span className="category_tag">분식</span>
            </li>
            <li>
              <div>수량 : 5개</div>
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
      background-color: #d9d9d9;
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
