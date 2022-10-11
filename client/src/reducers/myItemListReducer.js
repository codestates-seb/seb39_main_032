// action 타입 가져오기
import { SET_MY_ITEMS_LIST } from "../actions/index";

//초기 상태 값
const initialState = [];

//reducer(상태 관리) 함수
const myItemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ITEMS_LIST:
      return action.payload;
      break;

    default:
      return state;
  }
};

export default myItemListReducer;
