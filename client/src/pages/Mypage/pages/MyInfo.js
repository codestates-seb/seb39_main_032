import styled from "styled-components";
import Header from "../../../components/Header";
import TitleHeader from "../../../components/TitleHeader";

function MyInfo() {
  return (
    <>
      <Header />
      <Container>
        <TitleHeader title={"개인정보 변경"} />
        <div id="editPw">
          <h4>비밀번호 변경</h4>
          <form>
            <div id="pw_change_box">
              <input id="new_pw" type="password" placeholder="새 비밀번호" />
              <input
                id="new_pw_confirm"
                type="password"
                placeholder="새 비밀번호 재확인"
              />
            </div>
            <button id="pw_edit_btn" type="submit">
              수정
            </button>
          </form>
        </div>
        <div>
          <div>회원 탈퇴</div>
        </div>
      </Container>
    </>
  );
}

export default MyInfo;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  #editPw {
    border: 1px solid;
    padding: 22px;
  }

  #pw_change_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 0.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    margin-left: 10px;
  }

  #pw_change_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  #new_pw {
    border-bottom: none;
  }

  input {
    width: 300px;
    height: 40px;
    border: 1px solid rgba(170, 170, 170, 1);
  }

  #pw_edit_btn {
    font-weight: 700;
    margin-top: 5px;
    width: 70px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 0.2rem;
  }
`;