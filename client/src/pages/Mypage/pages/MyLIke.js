import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MyWishlist from "../components/MyWishlist";

function MyLike() {
  const [hasStoreInfo, setHasStoreInfo] = useState(false);
  const [hasItems, setHasItems] = useState(false);

  // 테스트용

  return (
    <>
      <Header />
      <MyLikeContainer>
        <MyWishlist />
      </MyLikeContainer>
      <Footer />
    </>
  );
}

export default MyLike;

const MyLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 72vh;
`;
