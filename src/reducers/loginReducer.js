// action 타입 가져오기
import {
  SET_ACCESS_TOKEN,
  DELETE_TOKEN,
  TOKEN_TIME_OUT,
} from "../actions/index";

//초기 상태 값
const initialState = {
  authenticated: false,
  accessToken: null,
  expireTime: null,
};

//login과 관련된 reducer(상태 관리) 함수
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        authenticated: true,
        accessToken: action.payload, // 객체 형식으로 저장.
        expireTime: new Date().getTime() + TOKEN_TIME_OUT,
      };

    case DELETE_TOKEN:
      return {
        authenticated: false,
        accessToken: null,
        expireTime: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
