import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userInfoReducer from "./userInfoReducer";
import itemListReducer from "./itemListReducer";

const rootReducer = combineReducers({
  loginReducer,
  userInfoReducer,
  itemListReducer,
});

export default rootReducer;
