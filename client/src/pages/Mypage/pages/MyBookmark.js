import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MyFavoriteStores from "../components/MyFavoriteStores";
import TitleHeader from "../../../components/TitleHeader";

function MyBookmark() {
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const [hasBookmark, setHasBookmark] = useState(false);
  const [myBookmark, setMyBookmark] = useState([]);

  const getMyBookmark = () => {
    axios
      .get("/api/favorites/myFavorite?page=1&size=30", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        if (res.data.data.length === 0) {
          return setHasBookmark(false);
        } else {
          setHasBookmark(true);
          setMyBookmark(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyBookmark();
  }, []);

  return (
    <Outer>
      <Header />
      <MyBookmarkContainer>
        <TitleHeader title={"나의 관심 가게"} />
        {hasBookmark ? (
          <Wrapper>
            {myBookmark.map((item, idx) => {
              return <MyFavoriteStores key={idx} id={idx} state={item} />;
            })}{" "}
          </Wrapper>
        ) : (
          "등록된 관심 가게가 없습니다"
        )}
      </MyBookmarkContainer>
      <Footer />
    </Outer>
  );
}

export default MyBookmark;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MyBookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 73.5vh;
`;

const Wrapper = styled.section`
  border: 1px solid rgba(170, 170, 170, 1);
  padding: 10px;
`;
