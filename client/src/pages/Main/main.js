import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { setItemsList, setClickedCategory } from "../../actions";
import Loading from "../../components/Loading";

function Main({ isLoading }) {
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

  const handleClickCategory = (e) => {
    dispatch(setClickedCategory(e.target.id));

    axios
      .get(
        `/api/boards?page=1&size=10&address=${search}&category=${e.target.id}`
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
                    <div
                      id={item}
                      value={idx}
                      key={idx}
                      className="food_category"
                      onClick={handleClickCategory}
                    >
                      {item}
                    </div>
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
    margin-top: 10px;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    background-color: rgba(217, 217, 217, 0.58);
  }

  article {
    margin: 10px 0;
    flex-wrap: wrap;
    width: 45%;
    display: flex;
    align-items: center;
  }

  .food_category {
    background-color: white;
    border: 1px solid;
    border-radius: 1em;
    cursor: pointer;
    height: 50px;
    margin: 0 1%;
    padding: 1% 20px;
    font-size: 22px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 3px 3px grey;
    /* font-family: "Noto Sans KR", sans-serif; */
    font-family: "Do Hyeon";
    :hover {
      background-color: grey;
    }
  }
`;
