import styled from "styled-components";
import { useLocation } from "react-router-dom";

function SubmitBtn(props) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <SubmitBtnContainer width={props.width}>
      {path === "/signup" ? ("/login" ? "가입하기" : "수정하기") : "로 그 인"}
    </SubmitBtnContainer>
  );
}

export default SubmitBtn;

const SubmitBtnContainer = styled.button`
  width: 100%;
  height: 35px;
  background-color: #ff4a55;
  border: none;
  border-radius: 0.2rem;
  margin-top: 5px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  width: ${(props) => props.width};
`;
