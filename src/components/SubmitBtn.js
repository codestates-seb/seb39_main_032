import styled from "styled-components";
import { useLocation } from "react-router-dom";

function SubmitBtn() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <SubmitBtnContainer>
      {path === "/signup" ? "가입하기" : "로 그 인"}
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
`;
