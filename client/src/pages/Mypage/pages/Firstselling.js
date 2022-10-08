import styled from "styled-components";
import TitleHeader from "../../../components/TitleHeader";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHasStoreInfo, setHasItems } from "../../../actions";
import { useNavigate, useLocation } from "react-router-dom";
import StoreLocationMap from "../components/StoreLocationMap";

function Firstselling() {
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["authorization"] = accessToken;

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const [storeInfo, setStoreInfo] = useState({
    marketName: "",
    companyNumber: "",
    address: "",
    phone: "",
  });

  const handleInputStoreInfo = (key) => (e) => {
    setStoreInfo({ ...storeInfo, [key]: e.target.value });
    console.log(storeInfo);
  };

  const handleSubmitStoreInfo = (e) => {
    // e.preventDefault();

    if (
      storeInfo.marketName.length < 2 ||
      storeInfo.companyNumber.length < 2 ||
      storeInfo.address.length < 2 ||
      storeInfo.phone.length < 2
    ) {
      return alert("정보를 정확하게 입력해주세요");
    }

    console.log(storeInfo);

    axios
      .post("/api/markets", storeInfo)
      .then(
        (res) => console.log(res.data.data),
        dispatch(setHasStoreInfo(true)),
        navigate("/mystore")
      )
      .catch((err) => {
        console.log(err);
        return alert(
          "가게 등록에 실패했습니다. 잠시 후 다시 등록해주시기 바랍니다"
        );
      });
  };

  return (
    <Container>
      <TitleHeader
        title={
          path === "/mystore/edit"
            ? "가게 정보 수정하기"
            : "판매가 처음이세요? 처음이시면 가게 정보를 등록해주세요"
        }
        // func={func}
        color={"red"}
        subtitle={"*필수입력사항"}
      />

      <section>
        <form>
          <div className="first_selling_wrapper">
            <div className="first_selling_category">
              <div>
                상호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("marketName")} />
            </div>
            <div className="first_selling_category">
              <div>
                사업자등록번호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("companyNumber")} />
            </div>
            <div className="first_selling_category">
              <div>
                주소<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("address")} />
              {/* <StoreLocationMap /> */}
            </div>
            <div className="first_selling_category">
              <div>
                전화번호<span>*</span>
              </div>
              <input onChange={handleInputStoreInfo("phone")} />
            </div>
          </div>
          <button type="submit" onClick={handleSubmitStoreInfo}>
            {path === "/mystore/edit" ? "수정하기" : "등록하기"}
          </button>
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
  height: 100vh; // 조절 필요

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
