import styled from "styled-components";

import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteToken, setUserInfo } from "../actions";
import Search from "./Search";
// import mapApi from "./mapApi";
import { useEffect, useState } from "react";
/*global kakao*/

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);
  const { authenticated } = state;

  const logoutHandler = () => {
    dispatch(deleteToken());
  };

  const [curLat, setCurLat] = useState("");
  const [curLon, setCurLon] = useState("");
  const [curAdr, setCurAdr] = useState("");

  const locationAPI = () => {
    // 좌표 찾기
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      setCurLat(crd.latitude);
      setCurLon(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    // 주소 변환
    var geocoder = new kakao.maps.services.Geocoder();

    var coord = new kakao.maps.LatLng(curLat, curLon);
    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log("도로명 주소 : " + result[0].address.address_name);
        setCurAdr(result[0].address.address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  return (
    <HeaderContainer>
      <div id="title_nav">
        <nav>
          {authenticated ? (
            <>
              <a href="/mypage" className="btn_nav">
                마이페이지
              </a>
              <span className="btn_nav" onClick={logoutHandler}>
                로그아웃
              </span>
            </>
          ) : (
            <>
              <a href="/signup" className="btn_nav">
                회원가입
              </a>
              <a href="/login" className="btn_nav">
                로그인
              </a>
            </>
          )}
        </nav>
      </div>
      <h1>
        <a href="/" id="title">
          {" "}
          최후의 반찬
        </a>
      </h1>
      <Search />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #title_nav {
    height: 30px;
    display: flex;
    margin-left: 85%;
    margin-top: 10px;
    margin-bottom: -30px;
  }

  nav {
    display: flex;
    justify-content: center;
    width: 100px;
  }

  h1 {
    /* border: 1px solid black; */
    text-align: center;
    font-family: "Do Hyeon";
    font-size: 42px;
    color: rgba(255, 74, 85, 1);
  }

  .btn_nav {
    cursor: pointer;
    padding: 2px 5px;
    font-size: smaller;
    white-space: nowrap;
  }

  a {
    text-decoration-line: none;
    color: inherit;
  }
`;
