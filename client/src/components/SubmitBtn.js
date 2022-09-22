import styled from "styled-components";

function SubmitBtn(props) {
  return <SubmitBtnContainer>{props.title}</SubmitBtnContainer>;
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
`;
