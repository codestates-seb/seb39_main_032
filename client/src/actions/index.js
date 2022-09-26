<<<<<<< HEAD
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
=======
//action type
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const TOKEN_TIME_OUT = 600 * 1000;

// actions 생성 함수
export const storeToken = (accesstoken) => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: { accesstoken },
  };
};

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN,
  };
};

export const setUserInfo = (loginInfo) => {
  // loginInfo = {email: , memberPw: }
  return {
    type: SET_USER_INFO,
    payload: loginInfo,
  };
>>>>>>> main
};
