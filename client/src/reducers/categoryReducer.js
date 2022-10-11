// action 타입 가져오기
import { SET_CLICKED_CATEGORY } from "../actions/index";

//초기 상태 값
const initialState = "";

//reducer(상태 관리) 함수
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLICKED_CATEGORY:
      return action.payload;
      break;

    default:
      return state;
  }
};

export default categoryReducer;
