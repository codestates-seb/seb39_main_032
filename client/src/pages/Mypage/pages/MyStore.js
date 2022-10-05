import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import StoreInfo from "./StoreInfo";
import Firstselling from "./Firstselling";

function MyStore() {
  const [hasStoreInfo, setHasStoreInfo] = useState(false);
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
      <MyStoreContainer>
        {hasStoreInfo ? <StoreInfo /> : <Firstselling />}
      </MyStoreContainer>
      <Footer />
    </>
  );
}

export default MyStore;

const MyStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
