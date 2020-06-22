import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {isLoginReducer} from "./isLoginReducer";

export const rootReducer = combineReducers({
    auth: loginReducer,
    isLog: isLoginReducer
})