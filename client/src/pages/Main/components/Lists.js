import { useState } from "react";
import styled from "styled-components";
import List from "./List";

function Lists() {
  const [btnActive, setBtnActive] = useState(1);

  const clickHandler = (e) => {
    setBtnActive(e.target.id);
  };

  return (
    <ListsContainer>
      <ListHeader>
        <h2>#분식</h2>
        <ListsNav>
          <span
            id="1"
            className={1 === Number(btnActive) ? "active" : ""}
            onClick={clickHandler}
          >
            진행 중
          </span>
          <span> | </span>
          <span
            id="2"
            className={2 === Number(btnActive) ? "active" : ""}
            onClick={clickHandler}
          >
            전체 보기
          </span>
        </ListsNav>
      </ListHeader>
      <List />
    </ListsContainer>
  );
}

export default Lists;

const ListHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 35px 0 20px;

  h2 {
    margin-left: 20px;
  }
`;

const ListsNav = styled.div`
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

const ListsContainer = styled.section`
  /* border: 3px solid green; */
  margin: 0 22% 20px 22%;
`;
