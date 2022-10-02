import React, { useEffect } from "react";
/*global kakao*/

const StoreLocationMap = () => {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

    //지도를 미리 생성
    var map = new window.daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new window.daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new window.daum.maps.Marker({
      position: new window.daum.maps.LatLng(37.537187, 127.005476),
      map: map,
    });

    function sample5_execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: function (data) {
          var addr = data.address; // 최종 주소 변수

          // 주소 정보를 해당 필드에 넣는다.
          document.getElementById("sample5_address").value = addr;
          // 주소로 상세 정보를 검색
          geocoder.addressSearch(data.address, function (results, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.daum.maps.services.Status.OK) {
              var result = results[0]; //첫번째 결과의 값을 활용

              // 해당 주소에 대한 좌표를 받아서
              var coords = new window.daum.maps.LatLng(result.y, result.x);
              // 지도를 보여준다.
              mapContainer.style.display = "block";
              map.relayout();
              // 지도 중심을 변경한다.
              map.setCenter(coords);
              // 마커를 결과값으로 받은 위치로 옮긴다.
              marker.setPosition(coords);
            }
          });
        },
      }).open();
    }
  }, []);

  return (
    <>
      <input type="text" id="sample5_address" placeholder="주소"></input>
      <input
        type="button"
        onclick="sample5_execDaumPostcode()"
        value="주소 검색"
      ></input>
      <div
        id="map"
        style={{
          width: "300px",
          height: "300px",
          display: "none",
          margin: "10px, 0",
        }}
      ></div>
    </>
  );
};

export default StoreLocationMap;
