import styled from "styled-components";
import { TitleHeader } from "./Firstselling";
import { Icon } from "@iconify/react";
import AddItemBox from "./AddItemBox";

const AdditemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Additem() {
  return (
    <>
      <AdditemContainer>
        <TitleHeader>
          <h2>할인 판매 품목</h2>
          <div>품목 추가하기</div>
        </TitleHeader>
        <AddItemBox />
      </AdditemContainer>
    </>
  );
}

export default Additem;
