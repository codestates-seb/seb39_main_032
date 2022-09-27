import styled from "styled-components";
import List from "./List";

function Lists() {
  return (
    <ListsContainer>
      <ListHeader>
        <h2>#분식</h2>
        <ListsNav>
          <span id="ing">진행 중</span>
          <span> | </span>
          <span>전체 보기</span>
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

  #ing {
    color: red;
  }
`;

const ListsContainer = styled.section`
  /* border: 3px solid green; */
  margin: 0 22% 20px 22%;
`;
