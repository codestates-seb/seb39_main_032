import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import StoreInfo from "./StoreInfo";
import Firstselling from "./Firstselling";

function MyStore() {
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const [hasStoreInfo, setHasStoreInfo] = useState(false);
  const [storeInfo, setStoreInfo] = useState({});
  const [hasItems, setHasItems] = useState(false);

  const getStoreInfo = () => {
    axios
      .get("/api/markets/myMarket?page=1&size=30", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(storeInfo);
        if (res.data.data.length === 0) {
          return setHasStoreInfo(false);
        } else {
          setStoreInfo(res.data.data[0]);
          setHasStoreInfo(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStoreInfo();
  }, []);

  return (
    <>
      <Header />
      <MyStoreContainer>
        {hasStoreInfo ? <StoreInfo storeInfo={storeInfo} /> : <Firstselling />}
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
  height: 73.5vh; // 조절 필요
`;
