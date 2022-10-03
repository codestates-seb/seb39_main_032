import styled from "styled-components";
import React from "react";

function TitleHeader(props) {
  return (
    <TitleHeaderContainer>
      <h2>
        {props.title}{" "}
        <span className="bookmark" onClick={props.func}>
          {props.icon}
        </span>
      </h2>

      <Subtext onClick={props.func} color={props.color} cursor={props.cursor}>
        {props.subtitle}
      </Subtext>
    </TitleHeaderContainer>
  );
}

export default TitleHeader;

const TitleHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-top: 30px;
  border-bottom: 2px solid #545454;
  margin-bottom: 20px;

  & h2 {
    margin-bottom: 8px;
    display: flex;
  }

  .bookmark {
    width: 30px;
    height: 30px;

    .bookmark_icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Subtext = styled.div`
  margin-top: 4%;
  font-size: smaller;
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`;
