import styled from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AddItemBox from "../components/newpost/AddItemBox";
import TitleHeader from "../../../components/TitleHeader";

function Newpost() {
  const deleteRef = useRef();
  const state = useSelector((state) => state.itemReducer);
  // const items = useSelector((state) => state.itemsReducer);

  const [countList, setCountList] = useState([0]);

  const addItemBoxHandler = () => {
    let counter = countList.length; // length는 기본적으로 1부터 시작 // 2
    setCountList([...countList, counter]); // [0,1,2]
    // console.log(countList);
  };

  //[0,2]

  const deleteItemBoxHandler = (deleteidx) => {
    // console.log(deleteidx); // 1
    // console.log(countList); // [0,1,2]
    const restList = countList.filter((ele, idx) => {
      return idx !== deleteidx; // [0,2]
    });
    // console.log(restList); //[0,2]
    setCountList(restList);
    // console.log(countList);
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
        {countList.map((item, idx) => {
          return (
            <AddItemBox
              key={idx}
              idx={idx}
              id={idx + 1}
              deleteItemBoxHandler={deleteItemBoxHandler}
            />
          );
        })}
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
`;
