import styled from "styled-components";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
/*global kakao*/

function Search() {
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
    <SearchContainer>
      <button id="location_btn" onClick={locationAPI}>
        <Icon icon="ic:outline-my-location" id="location_icon" />
      </button>
      <form id="search_container">
        <div id="search_box">
          <input
            id="search"
            type="text"
            placeholder={
              curAdr
                ? `${curAdr}`
                : "건물명, 도로명, 지번으로 주소를 검색하세요"
            }
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
    border-radius: 10rem;
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
    margin-right: -4px;
  }

  #location_icon {
    height: 25px;
    width: 27.96px;
    color: rgba(255, 74, 85, 1);
  }
`;
