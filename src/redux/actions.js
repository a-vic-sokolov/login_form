import {ADD_LOGIN, IS_LOGGINED} from "./types";

export function Add_login(auth) {
return {
    type: ADD_LOGIN,
    payload: auth
}
}
export function isTrue(isTrue) {
    return{
        type: IS_LOGGINED,
        payload: isTrue
    }

}