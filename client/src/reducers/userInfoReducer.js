// action 타입 가져오기
import {
  SET_USER_INFO,
  SET_STORE_INFO,
  SET_HAS_STORE_INFO,
  SET_HAS_ITEMS,
} from "../actions/index";

//초기 상태 값
const initialState = {
  email: null,
  memberPw: null,
  authenticated: false,
  memberID: null,
  marketID: null,
  marketName: null,
  companyNumber: null,
  address: null,
  phone: null,
  hasStoreInfo: false,
  hasItems: false,
};

//reducer(상태 관리) 함수
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      let userInfo = {
        email: action.payload.email,
        memberPw: action.payload.memberPw,
        authenticated: true,
      };

      return Object.assign({}, state, userInfo);
      break;

    case SET_STORE_INFO:
      {
        let storeInfo = {
          memberID: action.payload.memberID,
          marketID: action.payload.marketID,
          marketName: action.payload.marketName,
          companyNumber: action.payload.companyNumber,
          address: action.payload.address,
          phone: action.payload.phone,
        };

        return Object.assign({}, state, storeInfo);
      }
      break;

    case SET_HAS_STORE_INFO:
      {
        let storeInfo = {
          hasStoreInfo: action.payload,
        };

        return Object.assign({}, state, storeInfo);
      }
      break;

    case SET_HAS_ITEMS:
      {
        let storeInfo = {
          hasItems: action.payload,
        };

        return Object.assign({}, state, storeInfo);
      }
      break;

    default:
      return state;
  }
};

export default userInfoReducer;
