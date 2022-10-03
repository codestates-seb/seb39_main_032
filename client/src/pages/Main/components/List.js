import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Item from "./Item";

// 명칭 변경
function List() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemListReducer);
  const [btnActive, setBtnActive] = useState("ongoing");
  const [isFiltered, setIsFiltered] = useState(true);

  let filteredItems = state.filter((item) => item.boardStatus === "판매중");

  const clickHandler = (e) => {
    setBtnActive(e.target.id);

    if (e.target.id === "ongoing") {
      return setIsFiltered(true);
    } else {
      return setIsFiltered(false);
    }
  };

  return (
    <ListContainer>
      <ListHeader>
        <h2>#분식</h2>
        <ListNav>
          <span
            id="ongoing"
            className={"ongoing" === btnActive ? "active" : ""}
            onClick={clickHandler}
          >
            진행 중
          </span>
          <span> | </span>
          <span
            id="all"
            className={"all" === btnActive ? "active" : ""}
            onClick={clickHandler}
          >
            전체 보기
          </span>
        </ListNav>
      </ListHeader>

      <Items>
        {isFiltered
          ? filteredItems.map((item, idx) => {
              return <Item key={idx} id={idx} state={item} />;
            })
          : state.map((item, idx) => {
              return <Item key={idx} id={idx} state={item} />;
            })}
      </Items>
    </ListContainer>
  );
}

export default List;

const ListHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 35px 0 20px;

  h2 {
    margin-left: 20px;
  }
`;

const ListNav = styled.div`
  margin-top: 20px;

  span {
    cursor: pointer;
    padding: 0 7px;
  }

  .active {
    color: red;
    font-weight: 700;
  }
`;

const ListContainer = styled.section`
  width: 50%;
  /* border: 1px solid; */
`;

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: flex-start;
  list-style: none;
  padding: 0 1%;
  border: 1.5px solid #aaaaaa;
  border-radius: 0.5rem;
  margin: 0 40px;
`;
