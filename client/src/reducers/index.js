import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userInfoReducer from "./userInfoReducer";

const rootReducer = combineReducers({ loginReducer, userInfoReducer });

export default rootReducer;
