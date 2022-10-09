import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TitleHeader from "../../../components/TitleHeader";
import ItemBox from "../../PostDetail/components/ItemBox";
import { useSelector, useDispatch } from "react-redux";
import { setMyItemsList } from "../../../actions";

function MyItems() {
  const accessToken = localStorage.getItem("accessToken");
  // axios.defaults.headers.common["authorization"] = accessToken;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.myItemListReducer);
  const [hasItems, setHasItems] = useState(false);

  const getItemList = () => {
    axios
      .get("/api/boards/myBoards?page=1&size=50", {
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
    getItemList();
  }, []);

  return (
    <Outer>
      <Header />
      <MyItemsContainer>
        <TitleHeader title={"할인 상품 관리"} />
        {hasItems ? (
          <form>
            {state.map((item, idx) => {
              return (
                <>
                  <div id="date">
                    <div>등록일 : {item.boardCreateAt}</div>
                  </div>
                  <ItemBox key={idx} id={idx} state={item} />
                </>
              );
            })}
          </form>
        ) : (
          "등록된 상품이 없습니다"
        )}
      </MyItemsContainer>
      <Footer />
    </Outer>
  );
}

export default MyItems;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MyItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgba(170, 170, 170, 1); */
    border-radius: 0.5rem;
  }

  #date {
    margin-top: 13px;
  }
`;
