import styled from "styled-components";
import TitleHeader from "../../../components/TitleHeader";
import StoreLocation from "../../PostDetail/components/Map";
import SubmitBtn from "../../../widgets/SubmitBtn";
import { useNavigate } from "react-router-dom";

function StoreInfo({ storeInfo }) {
  const navigate = useNavigate();

  const editBtnHandler = () => {
    navigate("/mystore/edit");
  };

  return (
    <>
      <TitleHeader
        title={"나의 가게 정보"}
        cursor={"pointer"}
        func={editBtnHandler}
        subtitle={"수정하기"}
      />
      <StoreInfoContainer>
        <StoreLocation address={storeInfo.address} />
        <div className="first_selling_wrapper">
          <div className="first_selling_category">
            <div>상호</div>
            <span>{storeInfo.marketName}</span>
          </div>
          <div className="first_selling_category">
            <div>사업자등록번호</div>
            <span>{storeInfo.companyNumber}</span>
          </div>
          <div className="first_selling_category">
            <div>주소</div>
            <span>{storeInfo.address}</span>
          </div>
          <div className="first_selling_category">
            <div>전화번호</div>
            <span>{storeInfo.phone}</span>
          </div>
        </div>
      </StoreInfoContainer>
    </>
  );
}

export default StoreInfo;

const StoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .first_selling_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
