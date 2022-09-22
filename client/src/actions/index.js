import axios from "axios";

//action type
export const USER_LOGIN = "USER_LOGIN";

// actions 생성 함수
export const userLogin = (logininfo) => {
  // userinfo에는 email하고 pw가 담겨있음.
  //
  //   const request = axios.post("api/jwt", logininfo).then((res) => res.data.data);
  //   return {
  //     type: USER_LOGIN,
  //     payload: request,
  //   };
};
