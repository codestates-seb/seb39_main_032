import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MyWishlist from "../components/MyWishlist";
import TitleHeader from "../../../components/TitleHeader";

function MyLike() {
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const [hasLike, setHasLike] = useState(false);
  const [myLike, setMyLike] = useState([]);

  const getMyLike = () => {
    axios
      .get("/api/wishes/myWish?page=1&size=20", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          return setHasLike(false);
        } else {
          setHasLike(true);
          setMyLike(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyLike();
  }, []);

  return (
    <Outer>
      <Header />
      <MyLikeContainer>
        <TitleHeader title={"나의 관심 상품"} />
        {hasLike ? (
          <Wrapper>
            {myLike.map((item, idx) => {
              return <MyWishlist key={idx} id={idx} state={item} />;
            })}{" "}
          </Wrapper>
        ) : (
          "등록된 관심 상품이 없습니다"
        )}
      </MyLikeContainer>
      <Footer />
    </Outer>
  );
}

export default MyLike;
const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MyLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.section`
  border: 1px solid rgba(170, 170, 170, 1);
  padding: 10px;
`;
