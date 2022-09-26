// action 타입 가져오기
import { SET_USER_INFO } from "../actions/index";

//초기 상태 값
const initialState = {
  email: null,
  memberPw: null,
  authenticated: false,
};

//login과 관련된 reducer(상태 관리) 함수
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        email: action.payload.email,
        memberPw: action.payload.memberPw,
        authenticated: true,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
