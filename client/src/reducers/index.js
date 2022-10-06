import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userInfoReducer from "./userInfoReducer";
import itemListReducer from "./itemListReducer";
import itemReducer from "./itemReducer";
import searchReducer from "./searchReducer";
import categoryReducer from "./categoryReducer";
import myItemListReducer from "./myItemListReducer";
import mylikeListReducer from "./mylikeListReducer";
import likeScoreReducer from "./likeScoreReducer";

const rootReducer = combineReducers({
  loginReducer,
  userInfoReducer,
  itemListReducer,
  itemReducer,
  searchReducer,
  categoryReducer,
  myItemListReducer,
  mylikeListReducer,
  likeScoreReducer,
});

export default rootReducer;
