import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TitleHeader from "../../../components/TitleHeader";
import Item from "../components/newpost/Item";

function MyItems() {
  const [hasStoreInfo, setHasStoreInfo] = useState(true);
  const [hasItems, setHasItems] = useState(false);

  const getStoreInfo = () => {
    // axios.get()
  };

  // 테스트용

  //   useEffect(() => {
  //     // console.log(state);
  //     // state에 저장해서 가져오면 어차피 초기화되니, 서버에서 가져오는게 나음.
  //     // setHasStoreInfo(state.hasStoreInfo);
  //   }, []);

  return (
    <>
      <Header />
      <MyItemsContainer>
        <Item />
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
`;
