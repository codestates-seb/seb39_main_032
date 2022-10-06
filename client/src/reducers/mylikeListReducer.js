// action 타입 가져오기
import { SET_MY_LIKE_LIST } from "../actions/index";

//초기 상태 값
const initialState = {};

//reducer(상태 관리) 함수
const mylikeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_LIKE_LIST:
      return action.payload;

      break;

    default:
      return state;
  }
};

export default mylikeListReducer;
