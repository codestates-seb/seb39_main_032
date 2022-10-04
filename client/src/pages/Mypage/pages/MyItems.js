import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TitleHeader from "../../../components/TitleHeader";
import ItemBox from "../../PostDetail/components/ItemBox";
import { useSelector, useDispatch } from "react-redux";
import { setItemsList } from "../../../actions";

function MyItems() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemListReducer);
  const [hasStoreInfo, setHasStoreInfo] = useState(true);
  const [hasItems, setHasItems] = useState(false);

  const getItemList = () => {
    axios
      .get("/api/markets/9")
      .then((res) => dispatch(setItemsList(res.data.data.boardList)))
      .catch((err) => console.log(err));
  };

  // 테스트용

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <>
      <Header />
      <MyItemsContainer>
        <TitleHeader title={"할인 상품 관리"} />
        <form>
          {state.map((item, idx) => {
            return <ItemBox key={idx} id={idx} state={item} />;
          })}
        </form>
      </MyItemsContainer>
      <Footer />
    </>
  );
}

export default MyItems;

const MyItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgba(170, 170, 170, 1); */
    border-radius: 0.5rem;
  }
`;
