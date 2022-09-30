import styled from "styled-components";
import Header from "../../../components/Header";
// import Firstselling from "./components/Firstselling";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AddItemBox from "../components/newpost/AddItemBox";
import TitleHeader from "../../../components/TitleHeader";

function Newpost() {
  const state = useSelector((state) => state.userInfoReducer);

  const [hasStoreInfo, setHasStoreInfo] = useState(true);
  const [hasItems, setHasItems] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const getStoreInfo = () => {
    // axios.get()
  };

  // 테스트용

  useEffect(() => {
    // console.log(state);
    // state에 저장해서 가져오면 어차피 초기화되니, 서버에서 가져오는게 나음.
    // setHasStoreInfo(state.hasStoreInfo);
  }, []);

  const [countList, setCountList] = useState([0]);

  const addItemBoxHandler = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0]; //배열의 마지막 요소의 값 추출
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  const deleteItemBoxHandler = () => {
    let countArr = [...countList];
    countArr.pop();
    setCountList(countArr);
    console.log(countArr);
  };

  return (
    <>
      <Header />
      <NewPostContainer>
        <TitleHeader
          title={"할인 상품 등록"}
          subtitle={"품목 추가하기"}
          cursor={"pointer"}
          func={addItemBoxHandler}
        />
        <form>
          {countList.map((item, idx) => {
            return (
              <AddItemBox
                key={idx}
                deleteItemBoxHandler={deleteItemBoxHandler}
              />
            );
          })}

          <button>등록</button>
        </form>
      </NewPostContainer>
      <Footer />
    </>
  );
}

export default Newpost;

const NewPostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    background-color: #f24e1e;
    color: white;
    font-weight: 700;
    border-radius: 0.3rem;
    border: none;
    width: 60px;
    height: 30px;
    margin-left: 740px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgba(170, 170, 170, 1); */
  }
`;
