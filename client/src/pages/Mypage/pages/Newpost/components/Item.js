import styled from "styled-components";
import TitleHeader from "../../../../../components/TitleHeader";
import { Icon } from "@iconify/react";
import ItemBox from "./ItemBox";

function Item() {
  return (
    <ItemContainer>
      <TitleHeader
        title={"할인 판매 품목"}
        subtitle={"품목 추가하기"}
        cursor={"pointer"}
        func
      />
      <form>
        <ItemBox />
        <div className="delete_btn">삭제하기</div>
      </form>
    </ItemContainer>
  );
}

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgba(170, 170, 170, 1); */
    height: 260px;
    border-radius: 0.5rem;
  }

  .delete_btn {
    color: #f24e1e;
    font-size: smaller;
    margin-left: 670px;
    margin-top: -20px;
    cursor: pointer;
  }
`;
