// action 타입 가져오기
import { applyMiddleware } from "redux";
import { SET_ADD_ITEM, SET_DELETE_ITEM } from "../actions/index";

//초기 상태 값
const initialState = [
  { itemId: 1 },
  { itemId: 2 },
  { itemId: 3 },
  { itemId: 4 },
  { itemId: 5 },
];

//reducer(상태 관리) 함수
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_ITEM:
      {
        let itemInfo = {
          itemId: action.payload.itemId,
          itemName: action.payload.itemName,
          category: action.payload.category,
          quantity: action.payload.quantity,
          price: action.payload.price,
          salePrice: action.payload.salePrice,
          st_DL: action.payload.st_DL,
          start_time_hour: action.payload.start_time_hour,
          start_time_minute: action.payload.start_time_minute,
          fi_DL: action.payload.fi_DL,
          finish_time_hour: action.payload.finish_time_hour,
          finish_time_minute: action.payload.finish_time_minute,
          img: action.payload.img,
        };

        let setList = [...state];

        let updatedItemIdx = state.findIndex(
          (el) => el.itemId === action.payload.itemId
        );
        setList[updatedItemIdx] = itemInfo;
        return [...setList];
      }
      break;

    case SET_DELETE_ITEM:
      let restItem = state.filter((ele) => ele.itemId !== action.payload);

      return [...restItem];

      break;

    default:
      return state;
  }
};

export default itemReducer;
