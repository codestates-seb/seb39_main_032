import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { setItemsList, setClickedCategory } from "../../actions";
import Loading from "../../components/Loading";
import { useState } from "react";

function Main({ isLoading }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const search = useSelector((state) => state.searchReducer);

  let caterogies = [
    "분식",
    "치킨",
    "한식",
    "중식",
    "일식",
    "양식",
    "피자",
    "아시안",
    "족발/보쌈",
    "샐러드",
    "디저트",
  ];

  const state = useSelector((state) => state.itemListReducer);
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);

  const handleClickCategory = (e) => {
    dispatch(setClickedCategory(e.target.id));

    setActive(e.target.id);

    axios
      .get(
        `${API_URL}/api/boards?page=1&size=10&address=${search}&category=${e.target.id}`
      )
      .then((res) => dispatch(setItemsList(res.data.data)))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Outer>
          <Header />
          <MainContainer>
            <section id="category">
              <article>
                {caterogies.map((item, idx) => {
                  return (
                    <FoodCategory
                      id={item}
                      key={idx}
                      onClick={handleClickCategory}
                      backGround={active === item ? "rgba(255, 74, 85, 1)" : ""}
                      color={active === item ? "white" : ""}
                      size={active === item ? "700" : "500"}
                    >
                      {item}
                    </FoodCategory>
                  );
                })}
              </article>
            </section>
            <List />
          </MainContainer>
          <Footer />
        </Outer>
      )}
    </>
  );
}

export default Main;

const Outer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  #category {
    margin-top: 20px;
    /* width: 46%; */
    /* height: 60px; */
    display: flex;
    justify-content: center;
    border: 1px solid rgba(217, 217, 217, 0.58);
    /* border: 1px solid #aaaaaa; */
    /* background-color: rgba(217, 217, 217, 0.58); */
    margin-bottom: 20px;
  }

  article {
    /* margin: 10px 0; */
    flex-wrap: wrap;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
`;

const FoodCategory = styled.div`
  background-color: ${(props) => props.backGround};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.size};
  /* border: 1px solid; */
  /* border-radius: 1em; */
  cursor: pointer;
  /* height: 50px; */
  /* margin: 0 1%; */
  padding: 1.5% 0;
  width: 86px;
  font-size: 17px;
  /* font-weight: 500; */
  text-align: center;
  white-space: nowrap;
  /* box-shadow: 3px 3px grey; */
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Do Hyeon"; */
  :hover {
    background-color: rgba(255, 74, 85, 1);
    color: white;
    font-weight: 700;
  }
`;
