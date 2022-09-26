import styled from "styled-components";
import BasicSignup from "./components/BasicSignup";
import { LoginContainer } from "../Login/login";
import SnsSignup from "./components/SnsSignup";

function Signup() {
  return (
    <LoginContainer>
      <main>
        <BasicSignup />
        <SnsSignup />
      </main>
    </LoginContainer>
  );
}

export default Signup;
