// action 타입 가져오기
import { USER_LOGIN } from "../actions/index";

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      return state;
  }
};

export default loginReducer;
