import styled from "styled-components";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { setClickedCategory, setItemsList, setSearch } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

/*global kakao*/

function Search() {
  const dispatch = useDispatch();
  const [curLat, setCurLat] = useState("");
  const [curLon, setCurLon] = useState("");
  const [curAdr, setCurAdr] = useState("");

  // 좌표 찾기 함수
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);

    // setCurLat(37.5345361);
    // setCurLon(126.99327);
    setCurLat(crd.latitude);
    setCurLon(crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // 좌표 찾기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  // 예시 좌표 : 	X :126.993270, Y :37.5345361

  const locationAPI = () => {
    // 주소 변환
    var geocoder = new kakao.maps.services.Geocoder();

    var coord = new kakao.maps.LatLng(curLat, curLon);

    var callback = function (result, status) {
      console.log(result, status);

      if (status === kakao.maps.services.Status.OK) {
        // console.log("도로명 주소 : " + result[0].address.address_name);
        setCurAdr(result[0].address.address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  //
  //검색 기능

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const searchHandler = (e) => {
    if (!curAdr.length) {
      alert("주소를 입력해주세요");
      if (path === "/") {
        return window.location.reload();
      } else return e.preventDefault();
    }

    if (path !== "/") {
      navigate("/");
    }

    e.preventDefault();

    let search = curAdr.split(" ", 3); // '구'까지 잘라주기.
    search = `${search[0]} ${search[1]} ${search[2]}`;

    dispatch(setSearch(search));
    dispatch(setClickedCategory(""));

    axios
      .get(`/api/boards?page=1&size=50&address=${search}`)
      .then((res) => dispatch(setItemsList(res.data.data)))
      .catch((err) => console.log(err));
  };

  return (
    <SearchContainer>
      <button id="location_btn" onClick={locationAPI}>
        <Icon icon="ic:outline-my-location" id="location_icon" />
      </button>
      <form id="search_container" onSubmit={searchHandler}>
        <div id="search_box">
          <input
            id="search"
            type="text"
            defaultValue={curAdr}
            placeholder="건물명, 도로명, 지번으로 주소를 검색하세요"
          ></input>
          <button id="search_btn">
            <Icon icon="ant-design:search-outlined" id="search_icon" />
          </button>
        </div>
      </form>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  display: flex;

  form {
    display: flex;
    align-items: center;
    height: 35px;
    width: 550px;
  }

  #search_box {
    display: flex;
    align-items: center;
    height: 35px;
    width: 500px;
    border-radius: 0.1rem;
    border: 1px solid rgba(217, 217, 217, 1);
  }

  input {
    width: 90%;
    border: none;
    height: 28px;
    margin-left: 10px;
    :focus {
      outline: none;
    }
  }

  #search_btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  #search_icon {
    height: 25px;
    width: 27.96px;
    color: #aaaaaa;
  }

  #location_btn {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 1px;
    border-radius: 0.1rem;
    border: 1px solid rgba(217, 217, 217, 1);
    :hover {
      background-color: rgba(217, 217, 217, 1);
    }
  }

  #location_icon {
    height: 25px;
    width: 27.96px;
    color: rgba(255, 74, 85, 1);
  }
`;
