import styled from "styled-components";
import { useLocation } from "react-router-dom";

function DeleteBtn(props) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <DeleteBtnContainer
      onClick={props.func}
      width={props.width}
      marginLeft={props.marginLeft}
      marginBottom={props.marginBottom}
    >
      {path === "/newpost" ? "등록" : "삭제"}
    </DeleteBtnContainer>
  );
}

export default DeleteBtn;

const DeleteBtnContainer = styled.button`
  background-color: #f24e1e;
  color: white;
  font-weight: 700;
  border-radius: 0.3rem;
  border: none;
  width: 60px;
  height: 30px;
  /* margin-bottom: 20px; */
  /* margin-left: 92%; */
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  cursor: pointer;
`;
