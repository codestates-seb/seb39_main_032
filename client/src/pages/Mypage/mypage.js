import styled from "styled-components";
import Header from "../../components/Header";
import TitleHeader from "../../components/TitleHeader";
import Footer from "../../components/Footer";
import CurrentSaleItems from "./components/CurrentSaleItems";
import MyFavoriteStores from "./components/MyFavoriteStores";
import MyWishlist from "./components/MyWishlist";
import MyLike from "./pages/MyLIke";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMyItemsList } from "../../actions";
import Loading from "../../components/Loading";

function Mypage() {
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;
  const dispatch = useDispatch();

  const [hasItems, setHasItems] = useState(false);

  const getMyItems = async () => {
    await axios
      .get("/api/boards/myBoards?page=1&size=30", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        if (res.data.data.length === 0) {
          return setHasItems(false);
        } else {
          setHasItems(true);
          dispatch(setMyItemsList(res.data.data));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getMyItems().then(() => {
      setIsLoading(false);
    });
  }, []); //async & await 같이 해줘야 함

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Outer>
          <Header />
          <MypageContainer>
            <TitleHeader title={"마이 페이지"} />
            <Container>
              <Section>
                <div>
                  <a href="/myinfo">개인 정보 관리</a>
                </div>
                <div>
                  <a href="/mylike">나의 관심 상품</a>
                </div>
                <div>
                  <a href="/mybookmark">나의 관심 가게</a>
                </div>
              </Section>
              <Section>
                <div>
                  <a href="/mystore">가게 정보 관리</a>
                </div>
                <div>
                  <a href="/newpost">할인 상품 등록</a>
                </div>
                <div>
                  <a href="/myitems">할인 상품 관리</a>
                </div>
              </Section>
              <CurrentSaleItems hasItems={hasItems} />
            </Container>
          </MypageContainer>
          <Footer />
        </Outer>
      )}
    </>
  );
}

export default Mypage;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* height: 100%; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  margin: 20px;

  a {
    padding: 15px;
    margin: 5px;
    border: 1px solid;
    text-decoration: none;
    cursor: pointer;
    :visited {
      color: black;
    }
    :hover {
      color: rgba(255, 74, 85, 1);
      font-weight: 700;
    }
  }
`;
