import {ADD_LOGIN} from "./types";

const initialState = {
};

export const loginReducer = (state = initialState, action) => {
console.log(action)
    switch (action.type) {
        default: return state
        case ADD_LOGIN:
            return action.payload
    }
}