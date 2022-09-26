import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
<<<<<<< HEAD

const rootReducer = combineReducers({ loginReducer });
=======
import userInfoReducer from "./userInfoReducer";

const rootReducer = combineReducers({ loginReducer, userInfoReducer });
>>>>>>> main

export default rootReducer;
