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
        <span id="count">
          {props.icon2} {props.bookmarkCount}
        </span>
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
    align-items: center;
  }

  .bookmark {
    margin-left: 2px;
    width: 26px;
    height: 26px;
    margin-right: 13px;

    .bookmark_icon {
      width: 26px;
      height: 26px;
      cursor: pointer;
    }
  }

  #count {
    font-size: 14px;
    font-weight: 400;
    margin-left: 3px;
  }
`;

const Subtext = styled.div`
  margin-top: 4%;
  font-size: smaller;
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`;
