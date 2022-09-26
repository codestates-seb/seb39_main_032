import styled from "styled-components";
import { TitleHeader } from "../../Newpost/components/Firstselling";

const CurrentSaleItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #currunt_selling_items_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    padding: 10px;
  }

  .cur_selling_item {
    display: flex;
    border-bottom: 1px solid;
    width: 600px;
    height: 35px;
    padding: 7px;

    .cur_selling_item_name {
      width: 78%;
    }

    .cur_selling_item_btn {
      margin: 0 7px;
      cursor: pointer;
      font-size: smaller;
    }

    button {
      height: 21px;
      color: white;
      font-size: smaller;
      font-weight: 700;
      border: none;
      border-radius: 0.2rem;
      background-color: red;
    }
  }
`;

function CurrentSaleItems() {
  return (
    <CurrentSaleItemsContainer>
      <TitleHeader>
        <h2>현재 판매 중인 상품</h2>
      </TitleHeader>
      <section id="currunt_selling_items_wrapper">
        <div className="cur_selling_item">
          <div className="cur_selling_item_name">까르보나라 떡볶이</div>
          <div className="cur_selling_item_btn edit">수정</div>
          <div className="cur_selling_item_btn delte">삭제</div>
          <button className="cur_selling_item_btn finish">마감</button>
        </div>
        <div className="cur_selling_item">
          <div className="cur_selling_item_name">로제 떡볶이</div>
          <div className="cur_selling_item_btn edit">수정</div>
          <div className="cur_selling_item_btn delte">삭제</div>
          <button className="cur_selling_item_btn finish">마감</button>
        </div>
      </section>
    </CurrentSaleItemsContainer>
  );
}

export default CurrentSaleItems;
