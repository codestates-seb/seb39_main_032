import styled from "styled-components";
import TitleHeader from "../../../../../components/TitleHeader";
import { Icon } from "@iconify/react";
import AddItemBox from "./AddItemBox";

function AddItem() {
  return (
    <>
      <AdditemContainer>
        <TitleHeader
          title={"할인 판매 품목"}
          subtitle={"품목 추가하기"}
          cursor={"pointer"}
        />
        <AddItemBox />
      </AdditemContainer>
    </>
  );
}

export default AddItem;

const AdditemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
