//https만 이용 가능.

import axios from "axios";

const mapApi = async () => {
  let latitude = 37.5405815;
  let longitude = 126.990215;

  try {
    let response = await axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${latitude}&y=${longitude}`,
        {
          headers: {
            Authorization: "KakaoAK {609d13fb63c9e2041719a8834d7bbfab}",
          },
        }
      )
      .then((response) => {
        const location = response.data.documents[0];
        console.log({
          si: location.address.region_1depth_name,
          gu: location.address.region_2depth_name,
          dong: location.address.region_3depth_name,
          // locationX: location.address.x,
          // locationY: location.address.y,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export default mapApi;
