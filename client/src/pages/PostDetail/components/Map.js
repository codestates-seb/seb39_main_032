/*global kakao*/
import React, { useEffect } from "react";

const StoreLocation = () => {
  let address = "서울특별시 용산구 회나무로 21";

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  }, [address]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "360px",
        }}
      ></div>
    </>
  );
};

export default StoreLocation;
