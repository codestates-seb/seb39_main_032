import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";

function List() {
  const state = useSelector((state) => state.itemListReducer);

  return (
    <ListContainer>
      <Items>
        {state.map((item, idx) => {
          return <Item key={idx} id={idx} />;
        })}
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
