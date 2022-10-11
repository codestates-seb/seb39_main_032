import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

function StoreLocation() {
  return (
    <Map
      center={{ lat: 37.5405815, lng: 126.990215 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 37.5405815, lng: 126.990215 }}>
        <div id="store_name">달려라 떡볶이</div>
      </MapMarker>
    </Map>
  );
}

export default StoreLocation;
