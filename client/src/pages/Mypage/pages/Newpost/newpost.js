import styled from "styled-components";
import Header from "../../../../components/Header";
// import Firstselling from "./components/Firstselling";
// import StoreInfo from "../Mypage/components/StoreInfo";
import AddItem from "./components/AddItem";
import Footer from "../../../../components/Footer";
import Item from "./components/Item";
import AddItemBox from "./components/AddItemBox";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ItemBox from "./components/ItemBox";

function Newpost() {
  const state = useSelector((state) => state.userInfoReducer);

  const [hasStoreInfo, setHasStoreInfo] = useState(true);
  const [hasItems, setHasItems] = useState(false);

  const getStoreInfo = () => {
    // axios.get()
  };

  // 테스트용

  useEffect(() => {
    // console.log(state);
    // state에 저장해서 가져오면 어차피 초기화되니, 서버에서 가져오는게 나음.
    // setHasStoreInfo(state.hasStoreInfo);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* 가게 정보가, 있을 때 : 없을때
        {hasStoreInfo ? <StoreInfo /> : <Firstselling />} */}
        {/* 가게 정보가 있고 && 아이템도 있을 때 : 가게 정보가 없고, 아이템도 없을 때*/}
        {hasStoreInfo && hasItems ? <Item /> : null}
        {/* 가게 정보가 있고, 아이템은 없을 때 : 가게 정보가 없고, 아이템은 있을 때 */}
        {hasStoreInfo && hasItems === false ? <AddItem /> : null}
      </main>
      <Footer />
    </>
  );
}

export default Newpost;
