import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <div>Loading...</div>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  background-color: #f8f9f9;
  height: 100vh;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
