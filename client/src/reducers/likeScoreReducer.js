// action 타입 가져오기
import {
  SET_LIKE_SCORE,
  ADD_LIKE_SCORE,
  MINUS_LIKE_SCORE,
} from "../actions/index";

//초기 상태 값
const initialState = {};

//reducer(상태 관리) 함수
const likeScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_SCORE:
      return action.payload;

      break;

    case ADD_LIKE_SCORE:
      return action.payload + 1;

      break;

    case MINUS_LIKE_SCORE:
      return action.payload - 1;

      break;

    default:
      return state;
  }
};

export default likeScoreReducer;
