import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";

// 명칭 변경
function List() {
  const search = useSelector((state) => state.searchReducer);
  const clickedCategory = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemListReducer);

  const [btnActive, setBtnActive] = useState("ongoing");
  const [isFiltered, setIsFiltered] = useState(true);

  let filteredItems = state.filter((item) => item.boardStatus === "판매중");
  // let filteredItems = useSelector((state) => state.filteredItemListReducer);

  const clickHandler = (e) => {
    setBtnActive(e.target.id);

    if (e.target.id === "ongoing") {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  };

  // Pagination
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <ListContainer>
      <ListHeader>
        <h2>
          {search ? `"${search}"` : "모든 지역"}
          {"   "}
          {clickedCategory ? `#${clickedCategory}` : ""}
        </h2>
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
          ? filteredItems.slice(offset, offset + limit).map((item, idx) => {
              return <Item key={item.boardId} id={idx} state={item} />;
            })
          : state.slice(offset, offset + limit).map((item, idx) => {
              return <Item key={item.boardId} id={idx} state={item} />;
            })}
      </Items>

      <Pagination
        total={isFiltered ? filteredItems.length : state.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </ListContainer>
  );
}

export default List;

const ListHeader = styled.section`
  display: flex;
  justify-content: space-between;
  /* margin-top: 20px; */

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
  width: 950px;
  /* border: 1px solid; */
`;

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 20px; */
  justify-content: flex-start;
  list-style: none;
  padding: 0 1%;
  border: 1.5px solid #aaaaaa;
  border-radius: 0.5rem;
  /* margin: 0 20px; */
`;
