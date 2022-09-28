import styled from "styled-components";
import TitleHeader from "./TitleHeader";
import React from "react";
import { useState } from "react";
import axios from "axios";

function Firstselling() {
  // const func = () => {
  //   console.log("test");
  // };

  const [storeInfo, setStoreInfo] = useState({
    storeName: "",
    storeNum: "",
    storeAdr: "",
    storeTel: "",
  });

  const handleInputStoreInfo = (key) => (e) => {
    setStoreInfo({ ...storeInfo, [key]: e.target.value });
    console.log(storeInfo);
  };

  const handleSubmitStoreInfo = (e) => {
    e.preventDefault();

    if (
      storeInfo.storeName.length < 2 ||
      storeInfo.storeNum.length < 2 ||
      storeInfo.storeAdr.length < 2 ||
      storeInfo.storeTel.length < 2
    ) {
      return alert("정보를 정확하게 입력해주세요");
    }

    let body = {
      memberId: "1", // 테스트용 넘버. 회원가입 시 부여되는 개인 아이디넘버가 들어가야함.
      marketName: storeInfo.storeName,
      companyNumber: storeInfo.storeNum,
      address: storeInfo.storeAdr,
      phone: storeInfo.storeTel,
    };

    axios
      .post("/api/markets", body)
      .then((res) => console.log(res))
      .catch(
        (err) => console.log(err),
        alert("가게 등록에 실패했습니다. 잠시 후 다시 등록해주시기 바랍니다")
      );
  };

  return (
    <Container>
      <TitleHeader
        title="판매가 처음이세요? 처음이시면 가게 정보를 등록해주세요"
        // func={func}
        color={"red"}
        subtitle={"*필수입력사항"}
      />

      <section>
        <form onSubmit={handleSubmitStoreInfo}>
          <div className="first_selling_wrapper">
            <div className="first_selling_category">
              <div>
                상호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("storeName")} />
            </div>
            <div className="first_selling_category">
              <div>
                사업자등록번호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("storeNum")} />
            </div>
            <div className="first_selling_category">
              <div>
                주소<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("storeAdr")} />
            </div>
            <div className="first_selling_category">
              <div>
                전화번호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("storeTel")} />
            </div>
          </div>
          <button type="submit">등록하기</button>
        </form>
      </section>
    </Container>
  );
}

export default Firstselling;

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

  span {
    color: red;
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