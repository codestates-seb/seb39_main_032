//action type
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const TOKEN_TIME_OUT = 600 * 1000;
export const SET_ITEMS_LIST = "SET_ITEMS_LIST";
export const SET_STORE_INFO = "SET_STORE_INFO";
export const SET_HAS_STORE_INFO = "SET_HAS_STORE_INFO";
export const SET_HAS_ITEMS = "SET_HAS_ITEMS";
export const SET_ADD_ITEM = "SET_ADD_ITEM";
export const SET_DELETE_ITEM = "SET_DELETE_ITEM";
export const SET_SUBMIT_ITEMS = "SET_SUBMIT_ITEMS";
export const SET_SEARCH = "SET_SEARCH";

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

export const setItemsList = (itemlist) => {
  return {
    type: SET_ITEMS_LIST,
    payload: itemlist,
  };
};

export const setUserInfo = (userinfo) => {
  return {
    type: SET_USER_INFO,
    payload: userinfo,
  };
};

export const setStoreInfo = (storeInfo) => {
  return {
    type: SET_STORE_INFO,
    payload: storeInfo,
  };
};

export const setHasStoreInfo = (hasStoreInfo) => {
  return {
    type: SET_HAS_STORE_INFO,
    payload: hasStoreInfo, //true or false
  };
};

export const setHasItems = (hasStoreInfo) => {
  return {
    type: SET_HAS_ITEMS,
    payload: hasStoreInfo, //true or false
  };
};

export const setAddItem = (itemInfo) => {
  return {
    type: SET_ADD_ITEM,
    payload: itemInfo, // {itmeName: "name", price: "3000" ...}
  };
};

export const setDeleteItem = (deleteId) => {
  return {
    type: SET_DELETE_ITEM,
    payload: deleteId,
  };
};

export const setSubmitItems = (items) => {
  return {
    type: SET_SUBMIT_ITEMS,
    payload: items, // {item1}
  };
};

export const setSearch = (keyword) => {
  return {
    type: SET_SEARCH,
    payload: keyword,
  };
};
