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

<<<<<<< HEAD
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
=======
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
>>>>>>> main

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD
    margin: 16vh 0vh;
    width: 380px;
    height: 560px;
=======
    width: 380px;
    padding: 40px 0;
    /* height: 560px; */
>>>>>>> main
    border: 2px solid rgba(217, 217, 217, 1);
    border-radius: 1rem;
    background-color: white;
  }
`;
