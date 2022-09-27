import styled from "styled-components";
import Item from "./Item";

function List() {
  return (
    <ListContainer>
      <Items>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Items>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div`
  display: flex;
  border: 1.5px solid #aaaaaa;
  border-radius: 0.5rem;
  margin: 0 40px;
`;

const Items = styled.ul`
  display: flex;
  /* border: 1px solid; */
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: flex-start;
  list-style: none;
  padding: 0 1%;
`;
