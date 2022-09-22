import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;

  main {
    margin: 10vh 0vh;
    width: 404px;
    height: 75vh;
    border: 2px solid rgba(217, 217, 217, 1);
    border-radius: 1rem;
  }

  section {
    border: 1px solid;
  }

  #signup {
    height: 60%;
  }

  #SNS_signup {
    height: 40%;
  }

  .sns_signup_submit {
    border: 1px solid;
    width: 70%;
    cursor: pointer;
  }
`;

function Signup() {
  return (
    <SignupContainer>
      <main>
        <section id="signup">
          <h3>회원가입</h3>
          <form>
            <div>
              <p>이메일주소</p>
              <input type="text"></input>
            </div>
            <div>
              <p>비밀번호</p>
              <input type="password"></input>
            </div>
            <div>
              <p>비밀번호 재확인</p>
              <input type="password"></input>
            </div>
            <button id="signup_submit">가입하기</button>
          </form>
        </section>
        <section id="SNS_signup">
          <h3>SNS 회원가입</h3>
          <div>
            <div className="sns_signup_submit">구글 계정으로 계속하기</div>
          </div>
          <div>
            <div className="sns_signup_submit">Naver 계정으로 계속하기</div>
          </div>
          <div>
            <div className="sns_signup_submit">카카오 계정으로 계속하기</div>
          </div>
        </section>
      </main>
    </SignupContainer>
  );
}

export default Signup;
