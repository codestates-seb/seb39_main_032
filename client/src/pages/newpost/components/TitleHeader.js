import styled from "styled-components";
import React from "react";

function TitleHead({ title, test, color, content }) {
  return (
    <TitleHeaderContainer>
      <h2>{title}</h2>
      {/* <h2>판매가 처음이세요? 처음이시면 가게 정보를 등록해주세요</h2> */}
      <Subtext onClick={test} color={color}>
        {/* *필수입력사항 */}
        {content}
      </Subtext>
    </TitleHeaderContainer>
  );
}

export default TitleHead;

const TitleHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-top: 30px;
  border-bottom: 2px solid #545454;
  margin-bottom: 20px;

  & h2 {
    margin-bottom: 8px;
  }

  /* & div {
    margin-top: 4%;
    font-size: smaller;
  } */
`;

const Subtext = styled.div`
  margin-top: 4%;
  font-size: smaller;
  color: ${(props) => props.color};
`;
