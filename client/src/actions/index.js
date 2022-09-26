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
};
