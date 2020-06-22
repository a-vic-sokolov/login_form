import {IS_LOGGINED} from "./types";

const initialState = {
    isLoggined: false
};

export const isLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case IS_LOGGINED:
            return action.payload
    }
}