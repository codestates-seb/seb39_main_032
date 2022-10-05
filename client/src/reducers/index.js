import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userInfoReducer from "./userInfoReducer";
import itemListReducer from "./itemListReducer";
import itemReducer from "./itemReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  loginReducer,
  userInfoReducer,
  itemListReducer,
  itemReducer,
  searchReducer,
});

export default rootReducer;
