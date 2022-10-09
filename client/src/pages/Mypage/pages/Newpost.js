import styled from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AddItemBox from "../components/newpost/AddItemBox";
import TitleHeader from "../../../components/TitleHeader";
import { setAddItem, setDeleteItem } from "../../../actions";

function Newpost() {
  const deleteRef = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemReducer);

  const [countList, setCountList] = useState([1, 2, 3, 4, 5]);
  const addItemBoxHandler = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0]; //배열의 마지막 요소의 값 추출
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  //[0,2]

  const deleteItemBoxHandler = (deleteId, id) => {
    // console.log(deleteId); // 1
    // console.log(countList); // [0,1,2]
    let countArr = [...countList];
    const restList = countArr.filter((ele, idx) => {
      return ele !== deleteId; // [0,2]
    });
    // console.log(restList); //[0,2]
    setCountList(restList);
    dispatch(setDeleteItem(deleteId));
  };

  return (
    <Outer>
      <Header />
      <NewPostContainer>
        <TitleHeader
          title={"할인 상품 등록"}
          subtitle={"품목 추가하기"}
          cursor={"pointer"}
          func={addItemBoxHandler}
        />

        {countList.map((ele, idx) => {
          return (
            <AddItemBox
              key={idx}
              ele={ele}
              id={idx + 1}
              deleteItemBoxHandler={deleteItemBoxHandler}
            />
          );
        })}
      </NewPostContainer>
      <Footer />
    </Outer>
  );
}

export default Newpost;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const NewPostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
