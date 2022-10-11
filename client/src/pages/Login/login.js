import styled from "styled-components";
import BasicLogin from "./components/BasicLogin";
import SnsLogin from "./components/SnsLogin";

function Login() {
  return (
    <LoginContainer>
      <main>
        <BasicLogin />
        <SnsLogin />
      </main>
    </LoginContainer>
  );
}

export default Login;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
    padding: 40px 0;
    /* height: 560px; */
    border: 2px solid rgba(217, 217, 217, 1);
    border-radius: 1rem;
    background-color: white;
  }
`;
