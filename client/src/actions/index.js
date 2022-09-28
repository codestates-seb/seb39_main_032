//action type
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const TOKEN_TIME_OUT = 600 * 1000;
export const SET_ITEMS_LIST = "SET_ITEMS_LIST";

// actions 생성 함수
export const storeToken = (refreshtoken) => {
  return {
    type: SET_REFRESH_TOKEN,
    payload: refreshtoken,
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

export const setItemsList = (itemlist) => {
  return {
    type: SET_ITEMS_LIST,
    payload: itemlist,
  };
};
