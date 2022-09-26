import styled from "styled-components";
import TitleHead from "./TitleHeader";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first_selling_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first_selling_category {
    display: flex;
    padding: 5px 0;
    align-items: center;

    div {
      width: 150px;
      font-weight: 600;
    }

    input {
      width: 530px;
      height: 28px;
      border: 1px solid #aaaaaa;
    }
  }

  button {
    width: 200px;
    height: 35px;
    margin-top: 20px;
    color: white;
    font-weight: 700;
    background-color: #f24e1e;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
  }
`;

export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-top: 30px;
  border-bottom: 2px solid #545454;
  margin-bottom: 20px;

  & h2 {
    margin-bottom: 8px;
  }

  & div {
    margin-top: 4%;
    font-size: smaller;
  }
`;

function Firstselling() {
  const test = () => {
    console.log("test");
  };

  return (
    <Container>
      <TitleHead
        title="판매가 처음이세요?"
        test={test}
        color={"blue"}
        content={"테스트"}
      />

      <section>
        <form>
          <div className="first_selling_wrapper">
            <div className="first_selling_category">
              <div>상호*</div>
              <input />
            </div>
            <div className="first_selling_category">
              <div>사업자등록번호*</div>
              <input />
            </div>
            <div className="first_selling_category">
              <div>주소*</div>
              <input />
            </div>
            <div className="first_selling_category">
              <div>전화번호*</div>
              <input />
            </div>
          </div>
          <button>등록하기</button>
        </form>
      </section>
    </Container>
  );
}

export default Firstselling;
