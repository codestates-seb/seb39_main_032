// action 타입 가져오기
import { SET_SEARCH } from "../actions/index";

//초기 상태 값
const initialState = "";

//reducer(상태 관리) 함수
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
      break;

    default:
      return state;
  }
};

export default searchReducer;
