import styled from "styled-components";
import { TitleHeader } from "./Firstselling";

const StoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .first_selling_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first_selling_category {
    display: flex;
    padding: 5px 0;
    align-items: center;

    div {
      width: 150px;
      font-weight: 600;
    }

    span {
      width: 530px;
    }
  }
`;

function StoreInfo() {
  return (
    <StoreInfoContainer>
      <TitleHeader>
        <h2>가게 정보</h2>
        <div>정보 수정하기</div>
        {/* 정보 수정하기 부분 props로 내려줘서 버튼 cursor : pointer 설정해주기  */}
      </TitleHeader>
      <section>
        <div className="first_selling_wrapper">
          <div className="first_selling_category">
            <div>상호</div>
            <span>달려라 떡볶이</span>
          </div>
          <div className="first_selling_category">
            <div>사업자등록번호</div>
            <span>110-495-483963</span>
          </div>
          <div className="first_selling_category">
            <div>주소</div>
            <span>서울시 용산구 회나무로 110</span>
          </div>
          <div className="first_selling_category">
            <div>전화번호</div>
            <span>02-1234-5678</span>
          </div>
        </div>
      </section>
    </StoreInfoContainer>
  );
}

export default StoreInfo;
