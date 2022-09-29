import styled from "styled-components";
import Header from "../../components/Header";
import TitleHeader from "../../components/TitleHeader";
import Footer from "../../components/Footer";
import CurrentSaleItems from "./components/CurrentSaleItems";
import MyFavoriteStores from "./components/MyFavoriteStores";
import MyWishlist from "./components/MyWishlist";

function Mypage() {
  return (
    <>
      <Header />
      <MypageContainer>
        <TitleHeader title={"나의 정보"} />
        <a href="/myinfo">
          <div>개인 정보 관리</div>
        </a>
        <a href="/mystore">
          <div>가게 등록 및 관리</div>
        </a>
        <a href="/newpost">
          <div>할인 상품 등록 및 관리</div>
        </a>
        <CurrentSaleItems />
        <MyFavoriteStores />
        <MyWishlist />
      </MypageContainer>
      <Footer />
    </>
  );
}

export default Mypage;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
